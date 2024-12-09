<template>
  <BasicPopup v-bind="$attrs" @register="registerPopup" :title="title" destroyOnClose>
    <template #insertToolbar> </template>
    <a-row class="p-10px dynamic-form" :style="{ margin: '0 auto', width: '100%' }">
      <!-- 表单 -->
      <a-form :colon="false" size="middle" layout="horizontal" labelAlign="right" :labelCol="{ style: { width: '100px' } }" :model="dataForm" ref="formRef">
        <a-row :gutter="15">
          <!-- 具体表单 -->
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Purchase_number">
              <template #label>采购单号 </template>
              <p>{{ dataForm.F_Purchase_number }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Applys">
              <template #label>采购申请人 </template>
              <p>{{ dataForm.F_Applys }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Dep_Name">
              <template #label>所属部门 </template>
              <p>{{ dataForm.F_Dep_Name }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Purchase">
              <template #label>采购申请日期 </template>
              <p>{{ dataForm.F_Purchase }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="ant-col-item">
            <a-form-item name="F_Reasons">
              <template #label>采购原因 </template>
              <p>{{ dataForm.F_Reasons }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="ant-col-item">
            <a-form-item name="F_Remarks">
              <template #label>备注 </template>
              <p>{{ dataForm.F_Remarks }}</p>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="ant-col-item mb-20px">
            <a-form-item>
              <JnpfGroupTitle content="采购明细" :bordered="false" helpMessage="" />
              <a-table
                :data-source="dataForm.tableField111"
                :columns="test_purchaseorderColumns"
                size="small"
                :pagination="false"
                :scroll="{ x: 'max-content' }">
                <template #headerCell="{ column }">
                  <span class="required-sign" v-if="column.required">*</span>
                  {{ column.title }}
                  <BasicHelp :text="column.tipLabel" v-if="column.tipLabel && column.title" />
                </template>
                <template #bodyCell="{ column, index, record }">
                  <template v-if="column.key === 'index'">{{ index + 1 }}</template>
                  <template v-if="column.key === 'F_Product_name'">
                    <JnpfInput
                      v-model:value="record.F_Product_name"
                      placeholder="请输入"
                      disabled
                      detailed
                      allowClear
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_name">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Product_Code'">
                    <JnpfInput
                      v-model:value="record.F_Product_Code"
                      placeholder="请输入"
                      disabled
                      detailed
                      allowClear
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_Code">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Product_category'">
                    <JnpfInput
                      v-model:value="record.F_Product_category"
                      placeholder="请输入"
                      disabled
                      detailed
                      allowClear
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_category">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Specifications'">
                    <JnpfInput
                      v-model:value="record.F_Specifications"
                      placeholder="请输入"
                      disabled
                      detailed
                      allowClear
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Specifications">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Unit'">
                    <JnpfInput
                      v-model:value="record.F_Unit"
                      placeholder="请输入"
                      disabled
                      detailed
                      allowClear
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Unit">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Numbers'">
                    <JnpfInputNumber
                      v-model:value="record.F_Numbers"
                      placeholder="请输入"
                      disabled
                      detailed
                      :style="{ width: '100%' }"
                      :step="1"
                      :controls="false">
                    </JnpfInputNumber>
                  </template>
                </template>
              </a-table>
            </a-form-item>
          </a-col>
          <!-- 表单结束 -->
        </a-row>
      </a-form>
    </a-row>
  </BasicPopup>
  <!-- 有关联表单详情：开始 -->
  <RelationDetail ref="relationDetailRef" />
  <!-- 有关联表单详情：结束 -->
</template>
<script lang="ts" setup>
  import { getDetailInfo } from './helper/api';
  import { getConfigData } from '@/api/onlineDev/visualDev';
  import { reactive, toRefs, nextTick, ref, computed, unref, toRaw } from 'vue';
  import { BasicPopup, usePopup } from '@/components/Popup';
  import { BasicModal, useModal } from '@/components/Modal';
  // 有关联表单详情
  import RelationDetail from '@/views/common/dynamicModel/list/detail/index.vue';
  // 表单权限
  import { usePermission } from '@/hooks/web/usePermission';
  import { useMessage } from '@/hooks/web/useMessage';
  import { CaretRightOutlined } from '@ant-design/icons-vue';
  import { buildUUID } from '@/utils/uuid';
  import { useI18n } from '@/hooks/web/useI18n';

  interface State {
    dataForm: any;
    title: string;
    maskConfig: any;
    locationScope: any;
  }

  defineOptions({ name: 'Detail' });
  const { createMessage, createConfirm } = useMessage();
  const [registerPopup, { openPopup, setPopupProps, closePopup }] = usePopup();
  const test_purchaseorderColumns: any[] = computed(() => {
    let list = [
      {
        title: '产品名称',
        dataIndex: 'F_Product_name',
        key: 'F_Product_name',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
      {
        title: '产品编码',
        dataIndex: 'F_Product_Code',
        key: 'F_Product_Code',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
      {
        title: '产品分类',
        dataIndex: 'F_Product_category',
        key: 'F_Product_category',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
      {
        title: '规格',
        dataIndex: 'F_Specifications',
        key: 'F_Specifications',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
      {
        title: '产品单位',
        dataIndex: 'F_Unit',
        key: 'F_Unit',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
      {
        title: '数量',
        dataIndex: 'F_Numbers',
        key: 'F_Numbers',
        labelWidth: '',
        span: '24',
        tipLabel: '',
        required: false,
        style: { width: '100%' },
        align: 'left',
        fixed: false,
      },
    ];
    const indexColumn = {
      title: '序号',
      showLabel: true,
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      fixed: 'left',
      width: 50,
    };
    //子表复杂表头-处理
    let columnList = list;
    let complexHeaderList: any[] = [];
    if (complexHeaderList.length) {
      let childColumns: any[] = [];
      let firstChildColumns: string[] = [];
      for (let i = 0; i < complexHeaderList.length; i++) {
        const e = complexHeaderList[i];
        e.title = e.fullNameI18nCode ? t(e.fullNameI18nCode, e.fullName) : e.fullName;
        e.align = e.align;
        e.children = [];
        e.jnpfKey = 'complexHeader';
        if (e.childColumns?.length) {
          childColumns.push(...e.childColumns);
          for (let k = 0; k < e.childColumns.length; k++) {
            const item = e.childColumns[k];
            for (let j = 0; j < list.length; j++) {
              const o = list[j];
              if (o.key == item && o.fixed !== 'left' && o.fixed !== 'right') e.children.push({ ...o });
            }
          }
        }
        if (e.children.length) firstChildColumns.push(e.children[0].key);
      }
      complexHeaderList = complexHeaderList.filter(o => o.children.length);
      let newList: any[] = [];
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        if (!childColumns.includes(e.key) || e.fixed === 'left' || e.fixed === 'right') {
          newList.push(e);
        } else {
          if (firstChildColumns.includes(e.key)) {
            const item = complexHeaderList.find(o => o.childColumns.includes(e.key));
            newList.push(item);
          }
        }
      }
      columnList = newList;
    }
    let columns = [indexColumn, ...columnList];
    const leftFixedList = columns.filter(o => o.fixed === 'left');
    const rightFixedList = columns.filter(o => o.fixed === 'right');
    const noFixedList = columns.filter(o => o.fixed !== 'left' && o.fixed !== 'right');
    return [...leftFixedList, ...noFixedList, ...rightFixedList];
  });

  const { t } = useI18n();
  const relationDetailRef = ref<any>(null);
  const state = reactive<State>({
    dataForm: {},
    title: t('common.detailText', '详情'),
    maskConfig: {
      test_purchaseorderF_Product_name: {
        prefixType: 1,
        useUnrealMask: false,
        maskType: 1,
        unrealMaskLength: 1,
        prefixLimit: 0,
        suffixLimit: 0,
        filler: '*',
        prefixSpecifyChar: '',
        suffixType: 1,
        ignoreChar: '',
        suffixSpecifyChar: '',
      },
      test_purchaseorderF_Product_Code: {
        prefixType: 1,
        useUnrealMask: false,
        maskType: 1,
        unrealMaskLength: 1,
        prefixLimit: 0,
        suffixLimit: 0,
        filler: '*',
        prefixSpecifyChar: '',
        suffixType: 1,
        ignoreChar: '',
        suffixSpecifyChar: '',
      },
      test_purchaseorderF_Product_category: {
        prefixType: 1,
        useUnrealMask: false,
        maskType: 1,
        unrealMaskLength: 1,
        prefixLimit: 0,
        suffixLimit: 0,
        filler: '*',
        prefixSpecifyChar: '',
        suffixType: 1,
        ignoreChar: '',
        suffixSpecifyChar: '',
      },
      test_purchaseorderF_Specifications: {
        prefixType: 1,
        useUnrealMask: false,
        maskType: 1,
        unrealMaskLength: 1,
        prefixLimit: 0,
        suffixLimit: 0,
        filler: '*',
        prefixSpecifyChar: '',
        suffixType: 1,
        ignoreChar: '',
        suffixSpecifyChar: '',
      },
      test_purchaseorderF_Unit: {
        prefixType: 1,
        useUnrealMask: false,
        maskType: 1,
        unrealMaskLength: 1,
        prefixLimit: 0,
        suffixLimit: 0,
        filler: '*',
        prefixSpecifyChar: '',
        suffixType: 1,
        ignoreChar: '',
        suffixSpecifyChar: '',
      },
    },
    locationScope: {},
  });
  const { title, dataForm, maskConfig } = toRefs(state);
  // 表单权限
  const { hasFormP } = usePermission();

  defineExpose({ init });

  function init(data) {
    state.dataForm.id = data.id;
    openPopup();
    nextTick(() => {
      setTimeout(initData, 0);
    });
  }

  function initData() {
    changeLoading(true);
    if (state.dataForm.id) {
      getData(state.dataForm.id);
    } else {
      closePopup();
    }
  }

  function getData(id) {
    getDetailInfo(id).then(res => {
      state.dataForm = res.data || {};
      nextTick(() => {
        changeLoading(false);
      });
    });
  }

  function toDetail(modelId, id) {
    if (!id) return;
    getConfigData(modelId).then(res => {
      if (!res.data || !res.data.formData) return;
      const formConf = JSON.parse(res.data.formData);
      formConf.popupType = 'general';
      const data = { id, formConf, modelId };
      relationDetailRef.value?.init(data);
    });
  }

  function setFormProps(data) {
    setPopupProps(data);
  }

  function changeLoading(loading) {
    setFormProps({ loading });
  }
</script>
