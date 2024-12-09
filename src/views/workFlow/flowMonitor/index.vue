<template>
  <div class="jnpf-content-wrapper">
    <div class="jnpf-content-wrapper-center">
      <div class="jnpf-content-wrapper-content">
        <BasicTable @register="registerTable">
          <template #tableTitle>
            <a-button type="error" preIcon="icon-ym icon-ym-delete" @click="handleDelete">{{ t('common.delText') }}</a-button>
          </template>
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'flowUrgent'">
              <JnpfTextTag :content="getUrgentText(record.flowUrgent)" :color="getUrgentTextColor(record.flowUrgent)" :showTag="false" showTextColor />
            </template>
            <template v-if="column.key === 'flowVersion'">
              <a-tag color="processing">V:{{ record.flowVersion }}</a-tag>
            </template>
            <template v-if="column.key === 'status'">
              <JnpfTextTag :content="getFlowStatusContent(record.status)" :color="getFlowStatusColor(record.status)" />
            </template>
            <template v-if="column.key === 'action'">
              <TableAction :actions="getTableActions(record)" />
            </template>
          </template>
        </BasicTable>
      </div>
    </div>
    <FlowParser @register="registerFlowParser" @reload="reload" />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { getFlowMonitorList, delMonitorList } from '@/api/workFlow/flowMonitor';
  import { getTreeList } from '@/api/workFlow/template';
  import { BasicTable, useTable, TableAction, BasicColumn, ActionItem } from '@/components/Table';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';
  import { usePopup } from '@/components/Popup';
  import { useBaseStore } from '@/store/modules/base';
  import FlowParser from '@/views/workFlow/components/FlowParser.vue';
  import { useDefineSetting } from '@/hooks/setting/useDefineSetting';
  import dayjs from 'dayjs';

  defineOptions({ name: 'workFlow-flowMonitor' });

  const { createMessage, createConfirm } = useMessage();
  const baseStore = useBaseStore();
  const { t } = useI18n();
  const { flowStatusList, flowUrgentList, getUrgentText, getUrgentTextColor, getFlowStatusContent, getFlowStatusColor } = useDefineSetting();
  const [registerFlowParser, { openPopup: openFlowParser }] = usePopup();

  const columns: BasicColumn[] = [
    { title: '流程标题', dataIndex: 'fullName', width: 200 },
    { title: '所属流程', dataIndex: 'flowName', width: 150 },
    { title: '发起时间', dataIndex: 'startTime', width: 150, format: 'date|YYYY-MM-DD HH:mm:ss' },
    { title: '发起人员', dataIndex: 'creatorUser', width: 120 },
    { title: '审批节点', dataIndex: 'currentNodeName', width: 150 },
    { title: '是否归档', dataIndex: 'isFile', width: 100, align: 'center' },
    { title: '紧急程度', dataIndex: 'flowUrgent', width: 100, align: 'center' },
    { title: '流程版本', dataIndex: 'flowVersion', width: 70, align: 'center' },
    { title: '流程状态', dataIndex: 'status', width: 120, align: 'center' },
  ];
  const isFileList = [
    { fullName: '是', id: 1 },
    { fullName: '否', id: 0 },
  ];

  const [registerTable, { reload, getForm, getSelectRowKeys }] = useTable({
    api: getFlowMonitorList,
    columns,
    searchInfo: { category: 1 },
    useSearchForm: true,
    formConfig: {
      schemas: [
        {
          field: 'keyword',
          label: t('common.keyword'),
          component: 'Input',
          componentProps: { placeholder: t('common.enterKeyword'), submitOnPressEnter: true },
        },
        {
          field: 'pickerVal',
          label: '发起时间',
          component: 'DateRange',
          componentProps: {
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: { defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')] },
            placeholder: ['开始时间', '结束时间'],
          },
        },
        {
          field: 'flowCategory',
          label: '分类',
          component: 'Select',
          componentProps: { showSearch: true },
        },
        {
          field: 'templateId',
          label: '所属流程',
          component: 'TreeSelect',
          componentProps: { lastLevel: true },
        },
        {
          field: 'creatorUserId',
          label: '发起人员',
          component: 'UserSelect',
        },
        {
          field: 'status',
          label: '流程状态',
          component: 'Select',
          componentProps: { showSearch: true, options: flowStatusList },
        },
        {
          field: 'flowUrgent',
          label: '紧急程度',
          component: 'Select',
          componentProps: { showSearch: true, options: flowUrgentList },
        },
        {
          field: 'isFile',
          label: '是否归档',
          component: 'Select',
          componentProps: { showSearch: true, options: isFileList },
        },
      ],
      fieldMapToTime: [['pickerVal', ['startTime', 'endTime']]],
    },
    actionColumn: {
      width: 60,
      title: '操作',
      dataIndex: 'action',
    },
    rowSelection: { type: 'checkbox' },
    clickToRowSelect: false,
    clearSelectOnPageChange: true,
  });

  function getTableActions(record): ActionItem[] {
    return [
      {
        label: t('common.detailText'),
        onClick: toDetail.bind(null, record),
      },
    ];
  }
  function handleDelete() {
    if (!getSelectRowKeys().length) return createMessage.error(t('common.selectDataTip'));
    createConfirm({
      iconType: 'warning',
      title: t('common.tipTitle'),
      content: t('common.batchDelTip'),
      onOk: () => {
        delMonitorList({ ids: getSelectRowKeys() }).then(res => {
          createMessage.success(res.msg);
          reload();
        });
      },
    });
  }
  function toDetail(record) {
    const data = {
      id: record.id,
      flowId: record.flowId,
      opType: 6,
    };
    openFlowParser(true, data);
  }
  function getFlowEngineList() {
    getTreeList().then(res => {
      getForm().updateSchema({ field: 'templateId', componentProps: { options: res.data.list || [] } });
    });
  }
  async function getOptions() {
    const res = await baseStore.getDictionaryData('businessType');
    getForm().updateSchema({ field: 'flowCategory', componentProps: { options: res } });
    getFlowEngineList();
  }
  onMounted(() => {
    getOptions();
  });
</script>
