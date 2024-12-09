<template>
  <div class="jnpf-content-wrapper">
    <div class="jnpf-content-wrapper-center">
      <div class="jnpf-content-wrapper-search-box">
        <BasicForm
          @register="registerSearchForm"
          :schemas="searchSchemas"
          @advanced-change="redoHeight"
          @submit="handleSearchSubmit"
          @reset="handleSearchReset"
          class="search-form">
        </BasicForm>
      </div>
      <div class="jnpf-content-wrapper-content bg-white">
        <BasicTable @register="registerTable" v-bind="getTableBindValue" ref="tableRef" @columns-change="handleColumnChange">
          <template #tableTitle>
            <a-button type="primary" preIcon="icon-ym icon-ym-btn-add" v-auth="'btn_add'" @click="addHandle()"> {{ t('common.add2Text', '新增') }} </a-button>
          </template>
          <template #toolbar>
            <a-tooltip placement="top">
              <template #title>
                <span>{{ t('common.superQuery') }}</span>
              </template>
              <filter-outlined @click="openSuperQuery(true, { columnOptions: superQueryJson })" />
            </a-tooltip>
          </template>
          <template #bodyCell="{ column, record, index }">
            <template v-for="(item, index) in childColumnList" v-if="childColumnList.length">
              <template v-if="column?.id?.includes('-') && item.children && item.children[0] && column.key === item.children[0]?.dataIndex">
                <ChildTableColumn
                  :data="record[item.prop]"
                  :head="item.children"
                  @toggleExpand="toggleExpand(record, item.prop + `Expand`)"
                  @toDetail="toDetail"
                  :expand="record[item.prop + `Expand`]"
                  :key="index"
                  :showOverflow="true" />
              </template>
            </template>
            <template v-if="!(record.top || column.id?.includes('-'))">
              <template v-if="column.jnpfKey === 'relationForm'">
                <p class="link-text" @click="toDetail(column.modelId, record[column.dataIndex + `_id`])"> {{ record[column.dataIndex] }}</p>
              </template>
              <template v-if="column.jnpfKey === 'inputNumber'">
                <jnpf-input-number v-model:value="record[column.prop]" :precision="column.precision" :thousands="column.thousands" disabled detailed />
              </template>
              <template v-if="column.jnpfKey === 'calculate'">
                <jnpf-calculate
                  v-model:value="record[column.prop]"
                  :isStorage="column.isStorage"
                  :precision="column.precision"
                  :thousands="column.thousands"
                  detailed />
              </template>
              <template v-if="column.jnpfKey === 'sign'">
                <jnpf-sign v-model:value="record[column.prop]" detailed />
              </template>
              <template v-if="column.jnpfKey === 'signature'">
                <jnpf-signature v-model:value="record[column.prop]" detailed />
              </template>
              <template v-if="column.jnpfKey === 'rate'">
                <jnpf-rate v-model:value="record[column.prop]" :count="column.count" :allowHalf="column.allowHalf" disabled />
              </template>
              <template v-if="column.jnpfKey === 'slider'">
                <jnpf-slider v-model:value="record[column.prop]" :min="column.min" :max="column.max" :step="column.step" disabled />
              </template>
              <template v-if="column.jnpfKey === 'uploadImg'">
                <jnpf-upload-img v-model:value="record[column.prop]" disabled detailed simple v-if="record[column.prop]?.length" />
              </template>
              <template v-if="column.jnpfKey === 'uploadFile'">
                <jnpf-upload-file v-model:value="record[column.prop]" disabled detailed simple v-if="record[column.prop]?.length" />
              </template>
              <template v-if="column.jnpfKey === 'input'">
                <jnpf-input v-model:value="record[column.prop]" :useMask="column.useMask" :maskConfig="column.maskConfig" :showOverflow="true" detailed />
              </template>
            </template>
            <template v-if="column.key === 'action' && !record.top">
              <TableAction :actions="getTableActions(record)" />
            </template>
          </template>
        </BasicTable>
      </div>
    </div>
    <Form ref="formRef" @reload="reload" />
    <Detail ref="detailRef" />
<!--    <ExportModal @register="registerExportModal" @download="handleDownload" />-->
    <ImportModal @register="registerImportModal" @reload="reload" />
<!--    <PrintSelect @register="registerPrintSelect" @change="handleShowBrowse" />-->
<!--    <PrintBrowse @register="registerPrintBrowse" />-->
    <RelationDetail ref="relationDetailRef" />
    <SuperQueryModal @register="registerSuperQueryModal" @superQuery="handleSuperQuery" />
  </div>
</template>

<script lang="ts" setup>
  import { getList, del, exportData, batchDelete } from './helper/api';
  import { getConfigData } from '@/api/onlineDev/visualDev';
  import { getDictionaryDataSelector } from '@/api/systemData/dictionary';
  import { getDataInterfaceRes } from '@/api/systemData/dataInterface';
  import { getOrgByOrganizeCondition, getDepartmentSelectAsyncList } from '@/api/permission/organize';
  import { ref, reactive, onMounted, toRefs, computed, unref, nextTick, toRaw, provide } from 'vue';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useOrganizeStore } from '@/store/modules/organize';
  import { useUserStore } from '@/store/modules/user';
  import { BasicModal, useModal } from '@/components/Modal';
  import { usePopup } from '@/components/Popup';
  import { ScrollContainer } from '@/components/Container';
  import { BasicLeftTree, TreeActionType } from '@/components/Tree';
  import { BasicForm, useForm } from '@/components/Form';
  import { BasicTable, useTable, TableAction, ActionItem, TableActionType, SorterResult } from '@/components/Table';
  import { SuperQueryModal } from '@/components/CommonModal';
  import Form from './Form.vue';
  import Detail from './Detail.vue';
  // 有关联表单详情：开始
  import RelationDetail from '@/views/common/dynamicModel/list/detail/index.vue';
  // 有关联表单详情：结束
  import ChildTableColumn from '@/views/common/dynamicModel/list/ChildTableColumn.vue';
  import { ExportModal } from '@/components/CommonModal';
  import { downloadByUrl } from '@/utils/file/download';
  import { ImportModal } from '@/components/CommonModal';
  // 打印模板多条生成PrintSelect
  import PrintSelect from '@/components/PrintDesign/printSelect/index.vue';
  import PrintBrowse from '@/components/PrintDesign/printBrowse/index.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { FilterOutlined } from '@ant-design/icons-vue';
  import { getSearchFormSchemas } from '@/components/FormGenerator/src/helper/transform';
  import { cloneDeep } from 'lodash-es';
  import columnList from './helper/columnList';
  import searchList from './helper/searchList';
  import superQueryJson from './helper/superQueryJson';
  import { dyOptionsList, systemComponentsList } from '@/components/FormGenerator/src/helper/config';
  import { thousandsFormat, getParamList } from '@/utils/jnpf';
  import { usePermission } from '@/hooks/web/usePermission';

  interface State {
    config: any;
    columnList: any[];
    printListOptions: any[];
    columnBtnsList: any[];
    customBtnsList: any[];
    treeFieldNames: any;
    leftTreeData: any[];
    leftTreeLoading: boolean;
    treeActiveId: string;
    treeActiveNodePath: any;
    columns: any[];
    complexColumns: any[];
    childColumnList: any[];
    exportList: any[];
    cacheList: any[];
    currFlow: any;
    isCustomCopy: boolean;
    candidateType: number;
    currRow: any;
    workFlowFormData: any;
    expandObj: any;
    columnSettingList: any[];
    searchSchemas: any[];
    treeRelationObj: any;
    treeQueryJson: any;
    leftTreeActiveInfo: any;
    keyword: string;
  }

  const route = useRoute();
  const { hasBtnP } = usePermission();
  const { createMessage, createConfirm } = useMessage();
  const { t } = useI18n();
  const organizeStore = useOrganizeStore();
  const userStore = useUserStore();
  const userInfo = userStore.getUserInfo;

  const [registerExportModal, { openModal: openExportModal, closeModal: closeExportModal, setModalProps: setExportModalProps }] = useModal();
  const [registerImportModal, { openModal: openImportModal }] = useModal();
  const [registerSuperQueryModal, { openModal: openSuperQuery }] = useModal();
  const formRef = ref<any>(null);
  const tableRef = ref<Nullable<TableActionType>>(null);
  const detailRef = ref<any>(null);
  const relationDetailRef = ref<any>(null);

  const state = reactive<State>({
    config: {},
    columnList: [],
    printListOptions: [],
    columnBtnsList: [],
    customBtnsList: [],
    treeFieldNames: {
      children: 'children',
      title: 'fullName',
      key: 'id',
      isLeaf: 'isLeaf',
    },
    leftTreeData: [],
    leftTreeLoading: false,
    treeActiveId: '',
    treeActiveNodePath: [],
    columns: [],
    complexColumns: [], // 复杂表头
    childColumnList: [],
    exportList: [],
    cacheList: [],
    currFlow: {},
    isCustomCopy: false,
    candidateType: 1,
    currRow: {},
    workFlowFormData: {},
    expandObj: {},
    columnSettingList: [],
    searchSchemas: [],
    treeRelationObj: null,
    treeQueryJson: {},
    leftTreeActiveInfo: {},
    keyword: '',
  });
  const defaultSearchInfo = {
    menuId: route.meta.modelId as string,
    moduleId: '601390047719064965',
    superQueryJson: '',
    dataType: 0,
  };
  const searchInfo = reactive({
    ...cloneDeep(defaultSearchInfo),
  });
  const { childColumnList, searchSchemas } = toRefs(state);
  const [registerSearchForm, { updateSchema, resetFields, submit: searchFormSubmit, setFieldsValue }] = useForm({
    baseColProps: { span: 6 },
    showActionButtonGroup: true,
    showAdvancedButton: true,
    compact: true,
  });
  const [registerTable, { reload, setLoading, getFetchParams, getSelectRows, getSelectRowKeys, redoHeight, clearSelectedRowKeys }] = useTable({
    api: getList,
    immediate: false,
    clickToRowSelect: false,
    afterFetch: data => {
      const list = data.map(o => ({
        ...o,
        ...state.expandObj,
      }));
      state.cacheList = cloneDeep(list);
      return list;
    },
  });
  const [registerChildTable] = useTable({
    pagination: false,
    canResize: false,
    showTableSetting: false,
  });

  provide('getLeftTreeActiveInfo', () => state.leftTreeActiveInfo);

  const getHasBatchBtn = computed(() => {
    let btnsList = [];
    btnsList = btnsList.filter(o => hasBtnP('btn_' + o));
    return !!btnsList.length;
  });

  const getTableBindValue = computed(() => {
    let columns = state.complexColumns;
    const defaultSortConfig = [];
    const sortField = defaultSortConfig.map(o => (o.sort === 'desc' ? '-' : '') + o.field);
    const data: any = {
      pagination: { pageSize: 20 }, //有分页
      searchInfo: unref(searchInfo),
      defSort: { sidx: sortField.join(',') },
      sortFn: (sortInfo: SorterResult | SorterResult[]) => {
        if (Array.isArray(sortInfo)) {
          const sortList = sortInfo.map(o => (o.order === 'descend' ? '-' : '') + o.field);
          return { sidx: sortList.join(',') };
        } else {
          const { field, order } = sortInfo;
          if (field && order) {
            // 排序字段
            return { sidx: (order === 'descend' ? '-' : '') + field };
          } else {
            return {};
          }
        }
      },
      ellipsis: true,
      columns,
      bordered: true,
      actionColumn: {
        width: 150,
        title: t('component.table.action'),
        dataIndex: 'action',
      },
    };
    if (unref(getHasBatchBtn)) {
      const rowSelection: any = { type: 'checkbox' };
      data.rowSelection = rowSelection;
    }
    return data;
  });

  function init() {
    state.config = {};
    searchInfo.menuId = route.meta.modelId as string;
    state.columnList = columnList;
    setLoading(true);
    getSearchSchemas();
    getColumnList();
    nextTick(() => {
      // 有搜索列表
      searchFormSubmit();
    });
  }

  function getSearchSchemas() {
    const schemas = getSearchFormSchemas(searchList);
    state.searchSchemas = schemas;
    schemas.forEach(cur => {
      const config = cur.__config__;
      if (dyOptionsList.includes(config.jnpfKey)) {
        if (config.dataType === 'dictionary') {
          if (!config.dictionaryType) return;
          getDictionaryDataSelector(config.dictionaryType).then(res => {
            updateSchema([{ field: cur.field, componentProps: { options: res.data.list } }]);
          });
        }
        if (config.dataType === 'dynamic') {
          if (!config.propsUrl) return;
          const query = { paramList: getParamList(config.templateJson) };
          getDataInterfaceRes(config.propsUrl, query).then(res => {
            const data = Array.isArray(res.data) ? res.data : [];
            updateSchema([{ field: cur.field, componentProps: { options: data } }]);
          });
        }
      }
      cur.defaultValue = cur.value;
    });
  }

  function getColumnList() {
    // 开启列表过滤权限
    let columnList: any[] = [];
    const permissionList = userStore.getPermissionList;
    const list = permissionList.filter(o => o.modelId === searchInfo.menuId);
    const perColumnList = list[0] && list[0].column ? list[0].column : [];
    for (let i = 0; i < state.columnList.length; i++) {
      inner: for (let j = 0; j < perColumnList.length; j++) {
        if (state.columnList[i].prop === perColumnList[j].enCode) {
          columnList.push(state.columnList[i]);
          break inner;
        }
      }
    }
    state.exportList = columnList;
    let columns = columnList.map(o => ({
      ...o,
      title: o.labelI18nCode ? t(o.labelI18nCode, o.label) : o.label,
      dataIndex: o.prop,
      align: o.align,
      fixed: o.fixed == 'none' ? false : o.fixed,
      sorter: o.sortable ? { multiple: 1 } : o.sortable,
      width: o.width || 100,
    }));
    //添加复杂表头
    columns = getComplexColumns(columns);
    state.columns = columns.filter(o => o.prop.indexOf('-') < 0);
    //子表表头
    getChildComplexColumns(columns);
  }

  //复杂表头
  function getComplexColumns(columns) {
    //这里生成复杂表头的配置
    let complexHeaderList: any[] = [];
    if (!complexHeaderList.length) return columns;
    let childColumns: any[] = [];
    let firstChildColumns: string[] = [];
    for (let i = 0; i < complexHeaderList.length; i++) {
      const e = complexHeaderList[i];
      e.label = e.fullName;
      e.labelI18nCode = e.fullNameI18nCode;
      e.title = e.fullNameI18nCode ? t(e.fullNameI18nCode, e.fullName) : e.fullName;
      e.align = e.align;
      e.dataIndex = e.id;
      e.prop = e.id;
      e.children = [];
      e.jnpfKey = 'complexHeader';
      if (e.childColumns?.length) {
        childColumns.push(...e.childColumns);
        for (let k = 0; k < e.childColumns.length; k++) {
          const item = e.childColumns[k];
          for (let j = 0; j < columns.length; j++) {
            const o = columns[j];
            if (o.prop == item && o.fixed !== 'left' && o.fixed !== 'right') e.children.push({ ...o });
          }
        }
      }
      if (e.children.length) firstChildColumns.push(e.children[0].prop);
    }
    complexHeaderList = complexHeaderList.filter(o => o.children.length);
    let list: any[] = [];
    for (let i = 0; i < columns.length; i++) {
      const e = columns[i];
      if (!childColumns.includes(e.prop)) {
        list.push(e);
      } else {
        if (firstChildColumns.includes(e.prop)) {
          const item = complexHeaderList.find(o => o.childColumns.includes(e.prop));
          list.push(item);
        }
      }
    }
    return list;
  }

  //子表表头
  function getChildComplexColumns(columnList) {
    let list: any[] = [];
    for (let i = 0; i < columnList.length; i++) {
      const e = columnList[i];
      if (!e.prop.includes('-')) {
        list.push(e);
      } else {
        let prop = e.prop.split('-')[0];
        let vModel = e.prop.split('-')[1];
        let label = e.label.split('-')[0];
        let childLabel = e.label.replace(label + '-', '');
        if (e.fullNameI18nCode && Array.isArray(e.fullNameI18nCode) && e.fullNameI18nCode[0]) label = t(e.fullNameI18nCode[0], label);
        let newItem = {
          align: 'center',
          jnpfKey: 'table',
          prop,
          label,
          title: label,
          dataIndex: prop,
          children: [],
        };
        e.dataIndex = vModel;
        e.title = e.labelI18nCode ? t(e.labelI18nCode, childLabel) : childLabel;
        if (!state.expandObj.hasOwnProperty(prop + `Expand`)) state.expandObj[prop + `Expand`] = false;
        if (!list.some(o => o.prop === prop)) list.push(newItem);
        for (let i = 0; i < list.length; i++) {
          if (list[i].prop === prop) {
            list[i].children.push(e);
            break;
          }
        }
      }
    }
    // 行内分组展示
    getMergeList(list);

    state.complexColumns = list;
    state.childColumnList = list.filter(o => o.jnpfKey === 'table');

    // 子表分组展示宽度取100
    for (let i = 0; i < state.childColumnList.length; i++) {
      const e = state.childColumnList[i];
      if (e.children?.length) e.children = e.children.map(o => ({ ...o, width: 100 }));
    }
  }

  function getMergeList(list) {
    list.forEach(item => {
      if (item.jnpfKey === 'table' && item.children && item.children.length) {
        item.children.forEach((child, index) => {
          if (index == 0) {
            child.customCell = () => ({
              rowspan: 1,
              colspan: item.children.length,
              class: 'child-table-box',
            });
          } else {
            child.customCell = () => ({
              rowspan: 0,
              colspan: 0,
            });
          }
        });
      }
    });
  }

  function toggleExpand(row, field) {
    row[field] = !row[field];
  }

  // 关联表单查看详情
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

  function handleColumnChange(data) {
    state.columnSettingList = data;
  }

  function getTableActions(record): ActionItem[] {
    return [
      {
        label: t('common.editText', '编辑'),
        onClick: updateHandle.bind(null, record),
        auth: 'btn_edit', //有按钮权限
      },
      {
        label: t('common.delText', '删除'),
        color: 'error',
        modelConfirm: {
          onOk: handleDelete.bind(null, record.id),
        },
        auth: 'btn_remove', //有按钮权限
      },
      {
        label: t('common.detailText', '详情'),
        onClick: goDetail.bind(null, record),
        auth: 'btn_detail', //有按钮权限
      },
    ];
  }

  // 编辑
  function updateHandle(record) {
    // 不带工作流
    const data = {
      id: record.id,
      menuId: searchInfo.menuId,
      allList: state.cacheList,
    };
    formRef.value?.init(data);
  }

  // 删除
  function handleDelete(id) {
    const query = { ids: [id] };
    batchDelete(query).then(res => {
      createMessage.success(res.msg);
      clearSelectedRowKeys();
      reload();
    });
  }

  // 查看详情
  function goDetail(record) {
    // 不带流程
    const data = {
      id: record.id,
    };
    detailRef.value?.init(data);
  }

  // 新增
  function addHandle() {
    // 不带流程新增
    const data = {
      id: '',
      menuId: searchInfo.menuId,
      allList: state.cacheList,
    };
    formRef.value?.init(data);
  }

  // 高级查询
  function handleSuperQuery(superQueryJson) {
    searchInfo.superQueryJson = superQueryJson;
    reload({ page: 1 });
  }

  function handleSearchReset() {
    clearSelectedRowKeys();
    if (!state.resetFromTree) updateSearchFormValue();
    if (state.resetFromTree) state.resetFromTree = false;
  }

  function handleSearchSubmit(data) {
    clearSelectedRowKeys();
    let obj = {
      ...defaultSearchInfo,
      superQueryJson: searchInfo.superQueryJson,
      ...data,
    };
    Object.keys(searchInfo).map(key => {
      delete searchInfo[key];
    });
    for (let [key, value] of Object.entries(obj)) {
      searchInfo[key.replaceAll('-', '_')] = value;
    }
    console.log(searchInfo);
    reload({ page: 1 });
  }

  function updateSearchFormValue() {
    if (!state.treeActiveId) return searchFormSubmit();
    let queryJson: any = {};
    let leftTreeActiveInfo: any = {};
    const isMultiple = !state.treeRelationObj ? false : state.treeRelationObj.searchMultiple;
    //多级左侧树，需要拼父级->转为查询参数
    if (state.treeRelationObj && state.treeRelationObj.jnpfKey && ['organizeSelect', 'cascader', 'areaSelect'].includes(state.treeRelationObj.jnpfKey)) {
      let currValue = [];
      currValue = state.treeActiveNodePath.map(o => o[state.treeFieldNames.key]);
      queryJson = { '': isMultiple ? [currValue] : currValue };
      leftTreeActiveInfo = { '': state.treeRelationObj.multiple ? [currValue] : currValue };
    } else {
      queryJson = { '': isMultiple ? [state.treeActiveId] : state.treeActiveId };
      leftTreeActiveInfo = { '': state.treeRelationObj.multiple ? [state.treeActiveId] : state.treeActiveId };
    }
    state.leftTreeActiveInfo = leftTreeActiveInfo;
    // 有搜索列表
    setFieldsValue(queryJson);
    searchFormSubmit();
  }

  onMounted(() => {
    init();
  });
</script>
