<template>
  <BasicPopup
    v-bind="$attrs"
    @register="registerPopup"
    showOkBtn
    destroyOnClose
    :cancelText="t('common.cancelText', '取消')"
    :okText="t('common.okText', '确定')"
    @ok="handleSubmit"
    :closeFunc="onClose">
    <template #title>
      <a-space :size="10">
        <div class="text-16px font-medium">{{ title }}</div>
        <a-space-compact size="small" block v-if="dataForm.id">
          <a-tooltip :title="t('common.prevRecord')">
            <a-button size="small" :disabled="getPrevDisabled" @click="handlePrev">
              <i class="icon-ym icon-ym-caret-left text-10px"></i>
            </a-button>
          </a-tooltip>
          <a-tooltip :title="t('common.nextRecord')">
            <a-button size="small" :disabled="getNextDisabled" @click="handleNext">
              <i class="icon-ym icon-ym-caret-right text-10px"></i>
            </a-button>
          </a-tooltip>
        </a-space-compact>
      </a-space>
    </template>
    <template #insertToolbar>
      <JnpfCheckboxSingle v-model:value="submitType" :label="continueText" v-if="showContinueBtn" />
    </template>
    <a-row class="p-10px dynamic-form" :style="{ margin: '0 auto', width: '100%' }">
      <a-form
        :colon="false"
        size="middle"
        layout="horizontal"
        labelAlign="right"
        :labelCol="{ style: { width: '100px' } }"
        :model="dataForm"
        :rules="dataRule"
        ref="formRef">
        <a-row :gutter="15">
          <!-- 具体表单 -->
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Purchase_number">
              <template #label>采购单号 </template>
              <JnpfInput
                v-model:value="dataForm.F_Purchase_number"
                @change="changeData('F_Purchase_number', -1)"
                placeholder="系统自动生成"
                readonly
                :style="{ width: '100%' }">
              </JnpfInput>
            </a-form-item>
          </a-col>
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Applys">
              <template #label>采购申请人 </template>
              <JnpfUsersSelect
                v-model:value="dataForm.F_Applys"
                @change="changeData('F_Applys', -1)"
                placeholder="请选择"
                :allowClear="true"
                :style="{ width: '100%' }"
                selectType="all">
              </JnpfUsersSelect>
            </a-form-item>
          </a-col>
          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Dep_Name">
              <template #label>所属部门 </template>
              <JnpfDepSelect
                v-model:value="dataForm.F_Dep_Name"
                @change="changeData('F_Dep_Name', -1)"
                placeholder="请选择"
                :allowClear="true"
                :style="{ width: '100%' }"
                :showSearch="false"
                selectType="all">
              </JnpfDepSelect>
            </a-form-item>
          </a-col>

          <a-col :span="12" class="ant-col-item">
            <a-form-item name="F_Purchase">
              <template #label>采购申请日期 </template>
              <JnpfDatePicker
                v-model:value="dataForm.F_Purchase"
                @change="changeData('F_Purchase', -1)"
                placeholder="请选择"
                :allowClear="true"
                :style="{ width: '100%' }"
                format="yyyy-MM-dd"
                :startTime="getRelationDate(false, 1, 1, '', '')"
                :endTime="getRelationDate(false, 1, 1, '', '')">
              </JnpfDatePicker>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="ant-col-item">
            <a-form-item name="F_Reasons">
              <template #label>采购原因 </template>
              <JnpfTextarea
                v-model:value="dataForm.F_Reasons"
                @change="changeData('F_Reasons', -1)"
                placeholder="请输入"
                :allowClear="true"
                :style="{ width: '100%' }"
                :autoSize="{ minRows: 4, maxRows: 4 }"
                :showCount="false">
              </JnpfTextarea>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="ant-col-item">
            <a-form-item name="F_Remarks">
              <template #label>备注 </template>
              <JnpfTextarea
                v-model:value="dataForm.F_Remarks"
                @change="changeData('F_Remarks', -1)"
                placeholder="请输入"
                :allowClear="true"
                :style="{ width: '100%' }"
                :autoSize="{ minRows: 4, maxRows: 4 }"
                :showCount="false">
              </JnpfTextarea>
            </a-form-item>
          </a-col>

          <a-col :span="24" class="ant-col-item mb-20px">
            <a-form-item>
              <JnpfGroupTitle content="采购明细" :bordered="false" helpMessage="" />
              <a-table
                :data-source="dataForm.test_purchaseorderList"
                :columns="test_purchaseorderColumns"
                size="small"
                :pagination="false"
                :scroll="{ x: 'max-content' }"
                :rowSelection="gettest_purchaseorderRowSelection"
                rowKey="jnpfId">
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
                      @change="changeData('test_purchaseorderF_Product_name', index)"
                      placeholder="请输入"
                      :allowClear="true"
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_name"
                      :showCount="false">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Product_Code'">
                    <JnpfInput
                      v-model:value="record.F_Product_Code"
                      @change="changeData('test_purchaseorderF_Product_Code', index)"
                      placeholder="请输入"
                      :allowClear="true"
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_Code"
                      :showCount="false">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Product_category'">
                    <JnpfInput
                      v-model:value="record.F_Product_category"
                      @change="changeData('test_purchaseorderF_Product_category', index)"
                      placeholder="请输入"
                      :allowClear="true"
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Product_category"
                      :showCount="false">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Specifications'">
                    <JnpfInput
                      v-model:value="record.F_Specifications"
                      @change="changeData('test_purchaseorderF_Specifications', index)"
                      placeholder="请输入"
                      :allowClear="true"
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Specifications"
                      :showCount="false">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Unit'">
                    <JnpfInput
                      v-model:value="record.F_Unit"
                      @change="changeData('test_purchaseorderF_Unit', index)"
                      placeholder="请输入"
                      :allowClear="true"
                      :style="{ width: '100%' }"
                      :maskConfig="maskConfig.test_purchaseorderF_Unit"
                      :showCount="false">
                    </JnpfInput>
                  </template>
                  <template v-if="column.key === 'F_Numbers'">
                    <JnpfInputNumber
                      v-model:value="record.F_Numbers"
                      @change="changeData('test_purchaseorderF_Numbers', index)"
                      placeholder="请输入"
                      :style="{ width: '100%' }"
                      :step="1"
                      :controls="false">
                    </JnpfInputNumber>
                  </template>
                  <template v-if="column.key === 'action'">
                    <a-space>
                      <a-button class="action-btn" type="link" @click="copyTest_purchaseorderRow(index)" size="small">
                        {{ t('common.copyText', '复制') }}
                      </a-button>
                      <a-button class="action-btn" type="link" color="error" @click="removeTest_purchaseorderRow(index, true)" size="small">
                        {{ t('common.delText', '删除') }}
                      </a-button>
                    </a-space>
                  </template>
                </template>
              </a-table>
              <a-space class="input-table-footer-btn">
                <a-button type="primary" preIcon="icon-ym icon-ym-btn-add" @click="addTest_purchaseorderRow"> {{ t('common.add1Text', '添加') }} </a-button>
                <a-button type="danger" preIcon="icon-ym icon-ym-btn-clearn" @click="batchRemoveTest_purchaseorderRow(true)">
                  {{ t('common.batchDelText', '批量删除') }}
                </a-button>
              </a-space>
            </a-form-item>
          </a-col>
          <!-- 表单结束 -->
        </a-row>
      </a-form>
    </a-row>
  </BasicPopup>
</template>
<script lang="ts" setup>
  import { create, update, getInfo } from './helper/api';
  import { reactive, toRefs, nextTick, ref, unref, computed, toRaw, inject } from 'vue';
  import { BasicPopup, usePopup } from '@/components/Popup';
  import { JnpfRelationForm } from '@/components/Jnpf';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useUserStore } from '@/store/modules/user';
  import type { FormInstance } from 'ant-design-vue';
  import { thousandsFormat, getDateTimeUnit, getTimeUnit } from '@/utils/jnpf';
  import { getDictionaryDataSelector } from '@/api/systemData/dictionary';
  import { getDataInterfaceRes } from '@/api/systemData/dataInterface';
  import dayjs from 'dayjs';
  // 表单权限
  import { usePermission } from '@/hooks/web/usePermission';
  import { cloneDeep } from 'lodash-es';
  import { buildUUID } from '@/utils/uuid';
  import { CaretRightOutlined } from '@ant-design/icons-vue';

  interface State {
    dataForm: any;
    tableRows: any;
    dataRule: any;
    optionsObj: any;
    childIndex: any;
    isEdit: any;
    interfaceRes: any;
    //可选范围默认值
    ableAll: any;
    //掩码配置
    maskConfig: any;
    //定位属性
    locationScope: any;
    selectedtest_purchaseorderRowKeys: any;

    title: string;
    continueText: string;
    allList: any[];
    currIndex: number;
    isContinue: boolean;
    submitType: number;
    showContinueBtn: boolean;
  }

  const emit = defineEmits(['reload']);
  const getLeftTreeActiveInfo: (() => any) | null = inject('getLeftTreeActiveInfo', null);
  const userStore = useUserStore();
  const userInfo = userStore.getUserInfo;
  const { createMessage, createConfirm } = useMessage();
  const { t } = useI18n();
  const [registerPopup, { openPopup, setPopupProps }] = usePopup();
  const formRef = ref<FormInstance>();
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
    list.push({
      title: t('component.table.action'),
      showLabel: true,
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      fixed: 'right',
      width: 100,
    });
    const indexColumn = {
      title: t('component.table.index'),
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

  const gettest_purchaseorderHasBatchBtn = computed(() => {
    let flist: any[] = [
      {
        btnIcon: 'icon-ym icon-ym-btn-add',
        show: true,
        label: '添加',
        btnType: 'primary',
        value: 'add',
        labelI18nCode: 'common.add1Text',
      },
      {
        btnIcon: 'icon-ym icon-ym-btn-clearn',
        showConfirm: 'true',
        show: true,
        label: '批量删除',
        btnType: 'danger',
        value: 'batchRemove',
        labelI18nCode: 'common.batchDelText',
      },
    ];
    return flist?.length && flist.some(o => o.value == 'batchRemove' && !!o.show);
  });

  const gettest_purchaseorderRowSelection = computed(() => {
    if (!unref(gettest_purchaseorderHasBatchBtn)) return undefined;
    const rowSelection = {
      selectedRowKeys: state.selectedtest_purchaseorderRowKeys,
      onChange: (selectedRowKeys: string[]) => {
        state.selectedtest_purchaseorderRowKeys = selectedRowKeys;
      },
    };
    return rowSelection;
  });

  const state = reactive<State>({
    dataForm: {
      F_Purchase_number: undefined,
      F_Applys: userInfo.userId?userInfo.userId:'',
      F_Dep_Name: userInfo.departmentId ? userInfo.departmentId : '',
      F_Purchase: undefined,
      F_Reasons: undefined,
      F_Remarks: undefined,
      F_CreatorUserId: '',
      F_CreatorTime: '',
      F_LastModifyUserId: '',
      F_LastModifyTime: '',
      test_purchaseorderList: [],
    },

    tableRows: {
      test_purchaseorderList: {
        F_Product_name: '',
        F_Product_Code: '',
        F_Product_category: '',
        F_Specifications: '',
        F_Unit: '',
        F_Numbers: undefined,
        enabledmark: undefined,
      },
    },

    dataRule: {},

    optionsObj: {},

    childIndex: -1,
    isEdit: false,
    interfaceRes: {
      test_purchaseorderF_Product_category: [],
      F_CreatorUserId: [],
      F_Purchase_number: [],
      F_Purchase: [],
      F_Dep_Name: [],
      test_purchaseorderF_Numbers: [],
      F_CreatorTime: [],
      test_purchaseorderF_Product_Code: [],
      F_Applys: [],
      F_Remarks: [],
      F_LastModifyTime: [],
      test_purchaseorderF_Product_name: [],
      test_purchaseorderF_Unit: [],
      F_Reasons: [],
      F_LastModifyUserId: [],
      test_purchaseorderF_Specifications: [],
    },
    //可选范围默认值
    ableAll: {},

    //掩码配置
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

    //定位属性
    locationScope: {},

    selectedtest_purchaseorderRowKeys: [],

    title: '',
    continueText: '',
    allList: [],
    currIndex: 0,
    isContinue: false,
    submitType: 0,
    showContinueBtn: true,
  });
  const { title, continueText, showContinueBtn, dataRule, dataForm, optionsObj, ableAll, maskConfig, submitType } = toRefs(state);

  const getPrevDisabled = computed(() => state.currIndex === 0);
  const getNextDisabled = computed(() => state.currIndex === state.allList.length - 1);
  // 表单权限
  const { hasFormP } = usePermission();

  defineExpose({ init });

  function init(data) {
    state.submitType = 0;
    state.isContinue = false;
    state.title = !data.id ? t('common.add2Text', '新增') : t('common.editText', '编辑');
    state.continueText = !data.id ? t('common.continueAndAddText', '确定并新增') : t('common.continueText', '确定并继续');
    setFormProps({ continueLoading: false });
    state.dataForm.id = data.id;
    openPopup();
    state.allList = data.allList;
    state.currIndex = state.allList.length && data.id ? state.allList.findIndex(item => item.id === data.id) : 0;
    nextTick(() => {
      getForm().resetFields();
      state.dataForm.test_purchaseorderList = [];
      setTimeout(initData, 0);
    });
  }

  function initData() {
    changeLoading(true);
    if (state.dataForm.id) {
      getData(state.dataForm.id);
    } else {
      //初始化options

      if (state.dataForm.test_purchaseorderList) {
        for (let i = 0; i < state.dataForm.test_purchaseorderList.length; i++) {
          state.childIndex = i;
          state.dataForm.test_purchaseorderList[i].jnpfId = buildUUID();
        }
      }
      // 设置默认值
      state.dataForm = {
        F_Purchase_number: undefined,
        F_Applys: userInfo.userId?userInfo.userId:'',
        F_Dep_Name: userInfo.departmentId ? userInfo.departmentId : '',
        F_Purchase: undefined,
        F_Reasons: undefined,
        F_Remarks: undefined,
        F_CreatorUserId: '',
        F_CreatorTime: '',
        F_LastModifyUserId: '',
        F_LastModifyTime: '',
        test_purchaseorderList: [],
      };
      if (getLeftTreeActiveInfo) state.dataForm = { ...state.dataForm, ...(getLeftTreeActiveInfo() || {}) };
      state.childIndex = -1;
      changeLoading(false);
    }
  }

  function getForm() {
    const form = unref(formRef);
    if (!form) {
      throw new Error('form is null!');
    }
    return form;
  }

  function getData(id) {
    getInfo(id).then(res => {
      state.dataForm = res.data || {};

      if (state.dataForm.test_purchaseorderList) {
        for (let i = 0; i < state.dataForm.test_purchaseorderList.length; i++) {
          state.childIndex = i;
          state.dataForm.test_purchaseorderList[i].jnpfId = buildUUID();
        }
      }
      state.childIndex = -1;
      changeLoading(false);
    });
  }

  async function handleSubmit(type) {
    try {
      const values = await getForm()?.validate();
      if (!values) return;
      if (!test_purchaseorderExist()) return;

      setFormProps({ confirmLoading: true });
      const formMethod = state.dataForm.id ? update : create;
      formMethod(state.dataForm)
        .then(res => {
          createMessage.success(res.msg);
          setFormProps({ confirmLoading: false });
          if (state.submitType == 1) {
            initData();
            state.isContinue = true;
          } else {
            setFormProps({ open: false });
            emit('reload');
          }
        })
        .catch(() => {
          setFormProps({ confirmLoading: false });
        });
    } catch (_) {}
  }

  function handlePrev() {
    state.currIndex--;
    handleGetNewInfo();
  }

  function handleNext() {
    state.currIndex++;
    handleGetNewInfo();
  }

  function handleGetNewInfo() {
    changeLoading(true);
    getForm().resetFields();
    const id = state.allList[state.currIndex].id;
    getData(id);
  }

  function setFormProps(data) {
    setPopupProps(data);
  }

  function changeLoading(loading) {
    setPopupProps({ loading });
  }

  async function onClose() {
    if (state.isContinue) emit('reload');
    return true;
  }

  function changeData(model, index) {
    state.isEdit = false;
    state.childIndex = index;
    for (let key in state.interfaceRes) {
      if (key != model) {
        let faceReList = state.interfaceRes[key];
        for (let i = 0; i < faceReList.length; i++) {
          let relationField = faceReList[i].relationField;
          if (relationField) {
            let modelAll = relationField.split('-');
            let faceMode = '';
            let faceMode2 = modelAll.length == 2 ? modelAll[0].substring(0, modelAll[0].length - 4) + modelAll[1] : '';
            for (let i = 0; i < modelAll.length; i++) {
              faceMode += modelAll[i];
            }
            if (faceMode == model || faceMode2 == model) {
              let options = 'get' + key + 'Options';
              eval(options)(true);
              changeData(key, index);
            }
          }
        }
      }
    }
  }

  function changeDataFormData(type, data, model, index, defaultValue) {
    if (!state.isEdit) {
      if (type == 2) {
        for (let i = 0; i < state.dataForm[data].length; i++) {
          if (index == -1) {
            state.dataForm[data][i][model] = defaultValue;
          } else if (index == i) {
            state.dataForm[data][i][model] = defaultValue;
          }
        }
      } else {
        state.dataForm[data] = defaultValue;
      }
    }
  }

  function addTest_purchaseorderRow() {
    let item = {
      F_Product_name: undefined,
      F_Product_Code: undefined,
      F_Product_category: undefined,
      F_Specifications: undefined,
      F_Unit: undefined,
      F_Numbers: undefined,
      jnpfId: buildUUID(),
    };
    state.dataForm.test_purchaseorderList.push(item);
    state.childIndex = state.dataForm.test_purchaseorderList.length - 1;
    state.childIndex = -1;
  }

  function removeTest_purchaseorderRow(index, showConfirm = false) {
    if (showConfirm) {
      createConfirm({
        iconType: 'warning',
        title: '提示',
        content: '此操作将永久删除该数据, 是否继续?',
        onOk: () => {
          state.dataForm.test_purchaseorderList.splice(index, 1);
        },
      });
    } else {
      state.dataForm.test_purchaseorderList.splice(index, 1);
    }
  }

  function copyTest_purchaseorderRow(index) {
    let item = cloneDeep(state.dataForm.test_purchaseorderList[index]);
    let copyData = {};
    for (let i = 0; i < unref(test_purchaseorderColumns).length; i++) {
      const cur = unref(test_purchaseorderColumns)[i];
      if (cur.key != 'index' && cur.key != 'action') {
        if (cur.children?.length && cur.jnpfKey == 'complexHeader') {
          for (let j = 0; j < cur.children.length; j++) {
            copyData[cur.children[j].key] = item[cur.children[j].key];
          }
        } else {
          copyData[cur.key] = item[cur.key];
        }
      }
    }
    const copyItem = { ...copyData, jnpfId: buildUUID() };
    state.dataForm.test_purchaseorderList.push(copyItem);
    state.childIndex = state.dataForm.test_purchaseorderList.length - 1;
    state.childIndex = -1;
  }

  function batchRemoveTest_purchaseorderRow(showConfirm = false) {
    if (!state.selectedtest_purchaseorderRowKeys.length) return createMessage.error('请选择一条数据');
    const handleRemove = () => {
      state.dataForm.test_purchaseorderList = state.dataForm.test_purchaseorderList.filter(o => !state.selectedtest_purchaseorderRowKeys.includes(o.jnpfId));
      nextTick(() => {
        state.selectedtest_purchaseorderRowKeys = [];
      });
    };
    if (showConfirm) {
      createConfirm({
        iconType: 'warning',
        title: '提示',
        content: '此操作将永久删除该数据, 是否继续?',
        onOk: () => {
          handleRemove();
        },
      });
    } else {
      handleRemove();
    }
  }

  function test_purchaseorderExist() {
    let isOk = true;
    for (let i = 0; i < state.dataForm.test_purchaseorderList.length; i++) {
      const e = state.dataForm.test_purchaseorderList[i];
    }
    return isOk;
  }

  function getRelationDate(timeRule, timeType, timeTarget, timeValueData, dataValue) {
    let timeDataValue: any = null;
    let timeValue = Number(timeValueData);
    if (timeRule) {
      if (timeType == 1) {
        timeDataValue = timeValue;
      } else if (timeType == 2) {
        timeDataValue = dataValue;
      } else if (timeType == 3) {
        timeDataValue = new Date().getTime();
      } else if (timeType == 4 || timeType == 5) {
        const type = getTimeUnit(timeTarget);
        const method = timeType == 4 ? 'subtract' : 'add';
        timeDataValue = dayjs()[method](timeValue, type).valueOf();
      }
    }
    return timeDataValue;
  }

  function getRelationTime(timeRule, timeType, timeTarget, timeValue, formatType, dataValue) {
    let format = formatType == 'HH:mm' ? 'HH:mm:00' : formatType;
    let timeDataValue: any = null;
    if (timeRule) {
      if (timeType == 1) {
        timeDataValue = timeValue || '00:00:00';
        if (timeDataValue.split(':').length == 3) {
          timeDataValue = timeDataValue;
        } else {
          timeDataValue = timeDataValue + ':00';
        }
      } else if (timeType == 2) {
        timeDataValue = dataValue;
      } else if (timeType == 3) {
        timeDataValue = dayjs().format(format);
      } else if (timeType == 4 || timeType == 5) {
        const type = getTimeUnit(timeTarget + 3);
        const method = timeType == 4 ? 'subtract' : 'add';
        timeDataValue = dayjs()[method](timeValue, type).format(format);
      }
    }
    return timeDataValue;
  }
</script>
