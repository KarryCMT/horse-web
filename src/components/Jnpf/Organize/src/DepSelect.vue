<template>
  <div :class="[$attrs.class, 'select-tag-list']" v-if="buttonType === 'button'">
    <a-button preIcon="icon-ym icon-ym-btn-add" @click="openSelectModal">{{ modalTitle }}</a-button>
    <div class="tags">
      <a-tag class="!mt-10px" :closable="!disabled" v-for="(item, i) in options" :key="item.id" @close="onTagClose(i)">{{ item.fullName }}</a-tag>
    </div>
  </div>
  <a-select v-bind="getSelectBindValue" v-model:value="innerValue" :options="options" @change="onChange" @click="openSelectModal" v-else />
  <a-modal v-model:open="visible" :title="modalTitle" :width="800" class="transfer-modal" @ok="handleSubmit" centered :maskClosable="false" :keyboard="false">
    <template #closeIcon>
      <ModalClose :canFullscreen="false" @cancel="handleCancel" />
    </template>
    <div class="transfer__body">
      <div class="transfer-pane">
        <div class="transfer-pane__tool">
          <a-input-search :placeholder="t('common.enterKeyword')" allowClear v-model:value="keyword" @search="handleSearch" />
        </div>
        <div class="transfer-pane__body transfer-pane__body-tab">
          <a-tabs v-model:activeKey="activeKey" :tabBarGutter="10" size="small" class="pane-tabs" v-if="hasSys">
            <a-tab-pane key="1" tab="全部数据"></a-tab-pane>
            <a-tab-pane key="system" tab="动态参数"></a-tab-pane>
          </a-tabs>
          <BasicTree class="tree-main" :treeData="treeData" @select="handleSelect" ref="treeRef" defaultExpandAll :loading="loading" />
        </div>
      </div>
      <div class="transfer-pane right-pane">
        <div class="transfer-pane__tool">
          <span>{{ t('component.jnpf.common.selected') }}</span>
          <span class="remove-all-btn" @click="removeAll">{{ t('component.jnpf.common.clearAll') }}</span>
        </div>
        <div class="transfer-pane__body">
          <ScrollContainer>
            <div v-for="(item, i) in selectedData" :key="i" class="selected-item">
              <span :title="item.fullName">{{ item.fullName }}</span>
              <delete-outlined class="delete-btn" @click="removeData(i)" />
            </div>
            <jnpf-empty v-if="!selectedData.length" />
          </ScrollContainer>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
  import { getOrgByOrganizeCondition } from '@/api/permission/organize';
  import { Form, Modal as AModal } from 'ant-design-vue';
  import { DeleteOutlined } from '@ant-design/icons-vue';
  import { computed, ref, unref, watch, onMounted, nextTick } from 'vue';
  import { BasicTree, TreeActionType } from '@/components/Tree';
  import { ScrollContainer } from '@/components/Container';
  import { depSelectProps } from './props';
  import ModalClose from '@/components/Modal/src/components/ModalClose.vue';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useAttrs } from '@/hooks/core/useAttrs';
  import { useOrganizeStore } from '@/store/modules/organize';
  import { cloneDeep, pick } from 'lodash-es';

  defineOptions({ name: 'JnpfDepSelect', inheritAttrs: false });
  const props = defineProps(depSelectProps);
  const emit = defineEmits(['update:value', 'change', 'labelChange']);
  const attrs: any = useAttrs({ excludeDefaultKeys: false });
  const { t } = useI18n();
  const organizeStore = useOrganizeStore();
  const visible = ref(false);
  const treeRef = ref<Nullable<TreeActionType>>(null);
  const innerValue = ref<string | any[] | undefined>([]);
  const keyword = ref('');
  const activeKey = ref('');
  const treeData = ref<any[]>([]);
  const allList = ref<any[]>([]);
  const orgTreeData = ref<any[]>([]);
  const options = ref<any[]>([]);
  const loading = ref(false);
  const selectedData = ref<any[]>([]);
  const formItemContext = Form.useInjectFormItemContext();
  const systemFieldList = ref<any[]>([
    { id: '@currentOrg', fullName: '当前组织' },
    { id: '@currentOrgAndSubOrg', fullName: '当前组织及子组织' },
    { id: '@currentGradeOrg', fullName: '当前分管组织' },
  ]);

  const getSelectBindValue = computed(() => ({
    ...pick(props, ['placeholder', 'disabled', 'size', 'allowClear']),
    fieldNames: { label: 'fullName', value: 'id' },
    open: false,
    mode: props.multiple ? 'multiple' : '',
    showSearch: false,
    showArrow: true,
    class: unref(attrs).class ? 'w-full ' + unref(attrs).class : 'w-full',
    style: Reflect.has(unref(attrs), 'style') ? unref(attrs).style : {},
  }));

  watch(
    () => props.value,
    () => {
      setValue();
    },
    { immediate: true },
  );
  watch(
    () => allList.value,
    () => {
      setValue();
    },
    { deep: true },
  );
  watch(
    () => activeKey.value,
    val => {
      if (!val) return;
      keyword.value = '';
      if (props.selectType === 'all') {
        loading.value = true;
        if (activeKey.value === 'system') {
          treeData.value = cloneDeep(systemFieldList.value);
        } else {
          treeData.value = cloneDeep(orgTreeData.value);
        }
        nextTick(() => {
          handleSearch('');
        });
        loading.value = false;
      }
    },
  );

  function setValue() {
    if (!props.value || !props.value.length) {
      innerValue.value = props.multiple ? [] : undefined;
      options.value = [];
      selectedData.value = [];
      emit('labelChange', '');
      return;
    }
    const ids = props.multiple ? (props.value as any[]) : [props.value];
    let selectedList: any[] = [];
    for (let i = 0; i < ids.length; i++) {
      inner: for (let j = 0; j < allList.value.length; j++) {
        if (ids[i] === allList.value[j].id) {
          selectedList.push(allList.value[j]);
          break inner;
        }
      }
    }
    const innerIds = selectedList.map(o => o.id);
    innerValue.value = props.multiple ? innerIds : innerIds[0];
    options.value = cloneDeep(selectedList);
    selectedData.value = cloneDeep(selectedList);
    const labels = selectedData.value.map(o => o.fullName).join();
    emit('labelChange', labels);
  }
  function onChange(_val, option) {
    selectedData.value = option ?? [];
    handleSubmit();
  }
  function onTagClose(i) {
    selectedData.value.splice(i, 1);
    handleSubmit();
  }
  function openSelectModal() {
    if (props.disabled) return;
    visible.value = true;
    activeKey.value = '1';
    keyword.value = '';
    treeData.value = [];
    initData();
    setValue();
    nextTick(() => {
      handleSearch('');
    });
  }
  function handleCancel() {
    visible.value = false;
  }
  function handleSearch(value) {
    getTree().setSearchValue(value);
  }
  function handleSelect(keys) {
    if (!keys.length) return;
    const data: any = getTree().getSelectedNode(keys[0]);
    if (data?.disabled || data?.type === 'company') return;
    const boo = selectedData.value.some(o => o.id === data.id);
    if (boo) return;
    const item = cloneDeep(data);
    if (props.selectType === 'custom') item.fullName = item.lastFullName;
    props.multiple ? selectedData.value.push(item) : (selectedData.value = [item]);
  }
  function removeAll() {
    selectedData.value = [];
  }
  function removeData(index: number) {
    selectedData.value.splice(index, 1);
  }
  function getTree() {
    const tree = unref(treeRef);
    if (!tree) {
      throw new Error('tree is null!');
    }
    return tree;
  }
  function handleSubmit() {
    const ids = unref(selectedData).map(o => o.id);
    options.value = unref(selectedData);
    innerValue.value = props.multiple ? ids : ids[0];
    if (props.multiple) {
      emit('update:value', ids);
      emit('change', ids, unref(options));
    } else {
      emit('update:value', ids[0] || '');
      emit('change', ids[0] || '', unref(options)[0]);
    }
    formItemContext.onFieldChange();
    handleCancel();
  }
  async function initData() {
    loading.value = true;
    orgTreeData.value = await organizeStore.getOrganizeTree();
    const orgList = await organizeStore.getOrganizeList();
    allList.value = [...orgList, ...systemFieldList.value];
    if (props.selectType === 'all') {
      if (activeKey.value === 'system') {
        treeData.value = cloneDeep(systemFieldList.value);
      } else {
        treeData.value = cloneDeep(orgTreeData.value);
      }
      loading.value = false;
    } else {
      if (!props.ableIds?.length) {
        treeData.value = [];
        loading.value = false;
        return;
      }
      const query = { departIds: props.ableIds };
      getOrgByOrganizeCondition(query).then(res => {
        treeData.value = res.data.list;
        loading.value = false;
      });
    }
  }

  onMounted(() => {
    initData();
  });
</script>
