<template>
  <div class="jnpf-content-wrapper">
    <div class="jnpf-content-wrapper-center">
      <div class="jnpf-content-wrapper-content">
        <BasicTable @register="registerTable">
          <template #tableTitle>
            <a-dropdown>
              <template #overlay>
                <a-menu @click="handleAdd">
                  <a-menu-item :key="0">标准流程</a-menu-item>
                  <a-menu-item :key="1">简单流程</a-menu-item>
                </a-menu>
              </template>
              <a-button type="primary" preIcon="icon-ym icon-ym-btn-add">{{ t('common.addText') }}<DownOutlined /></a-button>
            </a-dropdown>
            <jnpf-upload-btn url="/api/workflow/template/Actions/Import" accept=".ffe" @on-success="reload"></jnpf-upload-btn>
          </template>
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'enabledMark'">
              <a-tag :color="record.enabledMark == 1 ? 'success' : ''">{{ record.enabledMark == 1 ? '已发布' : '未发布' }}</a-tag>
            </template>
            <template v-if="column.key === 'action'">
              <TableAction :actions="getTableActions(record)" :dropDownActions="getDropDownActions(record)" />
            </template>
          </template>
        </BasicTable>
      </div>
    </div>
    <Form @register="registerForm" @reload="reload" @design="handleDesign" />
    <DesignForm @register="registerDesignForm" @reload="reload" />
    <AuthModal @register="registerAuth" />
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getList, delFlow, copy, exportData, changeType } from '@/api/workFlow/template';
  import { BasicTable, useTable, TableAction, BasicColumn, ActionItem } from '@/components/Table';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useModal } from '@/components/Modal';
  import { downloadByUrl } from '@/utils/file/download';
  import { useBaseStore } from '@/store/modules/base';
  import { DownOutlined } from '@ant-design/icons-vue';
  import Form from './Form.vue';
  import DesignForm from './DesignForm.vue';
  import AuthModal from './AuthModal.vue';

  defineOptions({ name: 'workFlow-flowEngine' });

  const { createMessage } = useMessage();
  const baseStore = useBaseStore();
  const { t } = useI18n();
  const [registerForm, { openModal: openFormModal }] = useModal();
  const [registerDesignForm, { openModal: openDesignFormModal }] = useModal();
  const [registerAuth, { openModal: openAuthModal }] = useModal();

  const columns: BasicColumn[] = [
    { title: '流程名称', dataIndex: 'fullName' },
    { title: '流程编码', dataIndex: 'enCode', width: 200 },
    { title: '流程分类', dataIndex: 'category', width: 150 },
    { title: '流程类型', dataIndex: 'type', width: 100, align: 'center', customRender: ({ record }) => (record.type === 1 ? '简单流程' : '标准流程') },
    { title: '创建人', dataIndex: 'creatorUser', width: 120 },
    { title: '创建时间', dataIndex: 'creatorTime', width: 150, format: 'date|YYYY-MM-DD HH:mm:ss' },
    { title: '排序', dataIndex: 'sortCode', width: 70, align: 'center' },
    { title: '状态', dataIndex: 'enabledMark', width: 80, align: 'center' },
  ];
  const categoryList = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    api: getList,
    columns,
    useSearchForm: true,
    formConfig: {
      schemas: [
        {
          field: 'keyword',
          label: t('common.keyword'),
          component: 'Input',
          componentProps: {
            placeholder: t('common.enterKeyword'),
            submitOnPressEnter: true,
          },
        },
        {
          field: 'category',
          label: '流程分类',
          component: 'Select',
          componentProps: {
            placeholder: '请选择',
            showSearch: true,
          },
        },
      ],
    },
    actionColumn: {
      width: 150,
      title: '操作',
      dataIndex: 'action',
    },
  });

  function getTableActions(record): ActionItem[] {
    return [
      {
        label: t('common.editText'),
        onClick: addOrUpdateHandle.bind(null, record.id, record.type),
      },
      {
        label: '设计',
        color: 'error',
        onClick: handleDesign.bind(null, record),
      },
    ];
  }
  function getDropDownActions(record): ActionItem[] {
    return [
      {
        label: '复制',
        ifShow: !!record.enabledMark,
        modelConfirm: {
          content: '您确定要复制该流程, 是否继续?',
          onOk: handleCopy.bind(null, record.id),
        },
      },
      {
        label: '导出',
        ifShow: !!record.enabledMark,
        modelConfirm: {
          content: '您确定要导出该流程, 是否继续?',
          onOk: handleExport.bind(null, record.id),
        },
      },
      {
        label: '切换',
        ifShow: !!record.type,
        modelConfirm: {
          content: '您确定要切换为标准流程, 是否继续?',
          onOk: handleChangeType.bind(null, record.id),
        },
      },
      {
        label: '权限',
        ifShow: record.visibleType == 2,
        onClick: handlePermission.bind(null, record.id),
      },
      {
        label: t('common.delText'),
        modelConfirm: {
          content: t('common.delTip'),
          onOk: handleDelete.bind(null, record.id),
        },
      },
    ];
  }
  function addOrUpdateHandle(id = '', type) {
    openFormModal(true, { id, type, categoryList });
  }
  function handleDesign(record) {
    openDesignFormModal(true, { id: record.id, fullName: record.fullName });
  }
  function handleDelete(id) {
    delFlow(id).then(res => {
      createMessage.success(res.msg);
      reload();
    });
  }
  function handleCopy(id) {
    copy(id).then(res => {
      createMessage.success(res.msg);
      reload();
    });
  }
  function handleExport(id) {
    exportData(id).then(res => {
      downloadByUrl({ url: res.data.url });
    });
  }
  function handleChangeType(id) {
    changeType(id).then(res => {
      createMessage.success(res.msg);
      reload();
    });
  }
  function handlePermission(id) {
    openAuthModal(true, { id });
  }
  function handleAdd(e) {
    addOrUpdateHandle('', e.key);
  }
  async function getOptions() {
    const res = await baseStore.getDictionaryData('businessType');
    categoryList.value = res as any[];
    getForm().updateSchema({ field: 'category', componentProps: { options: res } });
  }

  onMounted(() => {
    getOptions();
  });
</script>
