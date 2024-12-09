<template>
  <BasicTable @register="registerTable" :columns="columns" :dataSource="getList">
    <template #bodyCell="{ column, record }">
      <template v-if="opType == '6' && column.key === 'nodeName'">
        <span class="recordList-nodeName" @click="handleNodeDetail(record)">{{ record.nodeName }}</span>
      </template>
      <template v-if="column.key === 'handleType'">
        <div class="handle-action" :title="record.statusText">
          <span class="spot" :style="{ background: getFlowStateColor(record.handleType || 0) }"></span>{{ record.statusText }}
        </div>
      </template>
      <template v-if="column.key === 'signImg' && record.signImg">
        <Image :width="80" :src="record.signImg" :preview="false" class="cursor-pointer" @click="handlePreview(record.signImg)" />
      </template>
      <template v-if="column.key === 'fileList'">
        <jnpf-upload-file v-model:value="record.fileJson" type="workFlow" detailed simple />
      </template>
    </template>
  </BasicTable>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { Image } from 'ant-design-vue';
  import { BasicTable, useTable, BasicColumn } from '@/components/Table';
  import { createImgPreview } from '@/components/Preview/index';
  import { useDefineSetting } from '@/hooks/setting/useDefineSetting';

  const props = defineProps({
    list: { type: Array, default: [] },
    endTime: { type: Number, default: 0 },
    opType: { default: '' },
  });
  const emit = defineEmits(['viewDetail']);
  const { getFlowStateContent, getFlowStateColor } = useDefineSetting();
  const columns: BasicColumn[] = [
    { title: '节点名称', dataIndex: 'nodeName', width: 200 },
    { title: '操作人员', dataIndex: 'userName', width: 120 },
    { title: '接收时间', dataIndex: 'creatorTime', width: 150, format: 'date|YYYY-MM-DD HH:mm:ss' },
    { title: '操作时间', dataIndex: 'handleTime', width: 150, format: 'date|YYYY-MM-DD HH:mm:ss' },
    { title: '执行动作', dataIndex: 'handleType', width: 200 },
    { title: '签名', dataIndex: 'signImg', width: 100, align: 'center', ellipsis: false },
    { title: '附件', dataIndex: 'fileList', width: 200 },
    { title: '备注', dataIndex: 'handleOpinion', width: 200 },
  ];
  const [registerTable] = useTable({
    showTableSetting: false,
    pagination: false,
  });

  const getList = computed<any[]>(() => {
    const list = (props.list as any[]).map(o => {
      const operator = [5, 7, 11, 13].includes(o.handleStatus) ? '：' + o.handleUserName : '';
      o.statusText = getFlowStateContent(o.handleType || 0) + operator;
      o.fileJson = o.fileList ? JSON.parse(o.fileList) : [];
      return o;
    });
    return list;
  });

  function handlePreview(img) {
    createImgPreview({ imageList: [img] });
  }
  function handleNodeDetail(record) {
    const data = {
      id: record.taskId,
      taskId: record.id,
      opType: 4,
      status: record.status,
      title: record.nodeName,
      disabled: true,
    };
    emit('viewDetail', data);
  }
</script>
<style lang="less">
  .recordList-nodeName {
    color: @primary-color;
    cursor: pointer;
  }
  .handle-action {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .spot {
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 5px;
      margin-bottom: 2px;
      border-radius: 50%;
    }
  }
</style>
