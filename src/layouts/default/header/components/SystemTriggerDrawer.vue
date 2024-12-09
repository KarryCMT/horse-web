<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" width="340px" class="full-drawer portal-toggle-drawer" :title="t('layout.header.systemChange')">
    <div class="tool">
      <a-input-search :placeholder="t('common.drawerSearchText')" allowClear v-model:value="keyword" />
    </div>
    <div class="main">
      <div class="item" v-if="getSysList.length">
        <div class="item-list">
          <div class="item-list-item flex justify-start" v-for="(item, i) in getSysList" :key="i" @click="selectItem(item)" :class="{ activeItem: item.currentSystem }">
            <div class="icon-box">
              <i :class="item.icon"></i>
            </div>
            <p class="com-hover">
              <p class="title">{{ getFullName(item) }}</p>
              <p class="title-desc">{{item.description }}</p>
            </p>
          </div>
        </div>
      </div>
      <jnpf-empty v-else />
    </div>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { useMessage } from '@/hooks/web/useMessage';
  import { reactive, toRefs, computed } from 'vue';
  import { CheckCircleFilled } from '@ant-design/icons-vue';
  import { useI18n } from '@/hooks/web/useI18n';
  import { setMajor } from '@/api/permission/userSetting';
  import { useRouter } from 'vue-router';

  interface State {
    list: any[];
    keyword: string;
  }

  const state = reactive<State>({
    list: [],
    keyword: '',
  });
  const { keyword } = toRefs(state);
  defineEmits(['register']);
  const { createMessage } = useMessage();
  const { t } = useI18n();
  const [registerDrawer, { changeLoading, closeDrawer }] = useDrawerInner(init);
  const router = useRouter();

  const getSysList = computed(() => (state.keyword ? state.list.filter(o => o.name.indexOf(state.keyword) !== -1) : state.list));

  function init(data) {
    state.keyword = '';
    state.list = data.list || [];
  }
  function selectItem(item) {
    if (item.currentSystem) return;
    changeLoading(true);
    let query = { majorId: item.id, majorType: 'System' };
    setMajor(query)
      .then(res => {
        createMessage.success(res.msg).then(() => {
          router.replace('/');
          setTimeout(() => {
            changeLoading(false);
            closeDrawer();
            location.reload();
          }, 50);
        });
      })
      .catch(() => {
        changeLoading(false);
      });
  }
  function getFullName(item) {
    if (!item.enCode) return item.name;
    return t('routes.' + item.enCode.replace(/\./g, '-'), item.name);
  }
</script>

<style lang="less" scoped>
.activeItem{
  background-color: #f1f4f8;
}
.icon-box{
  width: 32px;
  height: 32px;
  font-size: 20px;
  color: #fff;
  background-color: #1890ff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .icon-ym{
    font-size: 20px;
  }
}
.title{
  font-size: 14px;
  font-weight: 600;
  color: #172b4d;
}
.title-desc{
  font-size: 12px;
  color: #42526e;
}
.ant-drawer .ant-drawer-mask {
  position: absolute;
  inset: 0;
  z-index: 1000;
  background: transparent !important;
  pointer-events: auto;
}
.item-list {
  .item-list-item {
    justify-content: flex-start !important;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 10px;
    &:hover{
      background-color: #f1f4f8;
    }
  }
}
</style>
