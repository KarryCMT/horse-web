<template>
  <BasicPopup
    v-bind="$attrs"
    @register="registerPopup"
    :showCancelBtn="false"
    title="流程图"
    destroyOnClose
    :defaultFullscreen="defaultFullscreen"
    class="full-popup basic-flow-parser">
    <div class="jnpf-common-form-wrapper">
      <div class="jnpf-common-form-wrapper__main">
        <FlowProcessMain
          class="p-10px"
          :flowInfo="state.flowInfo"
          :nodeList="state.nodeList"
          :isPreview="true"
          :key="state.key"
          v-if="state.flowInfo.id"
          @viewSubFlow="viewSubFlow" />
      </div>
    </div>
  </BasicPopup>
  <SubFlowParser :defaultFullscreen="defaultFullscreen" @register="registerSubFlowParser" />
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicPopup, usePopupInner, usePopup } from '@/components/Popup';
  import SubFlowParser from './SubFlowParser.vue';
  import FlowProcessMain from '@/components/FlowProcess/src/Main.vue';

  const [registerPopup] = usePopupInner(init);
  const [registerSubFlowParser, { openPopup: openSubFlowParserPopup }] = usePopup();

  interface State {
    flowInfo: any;
    nodeList: any[];
    opType: string;
    taskId: string;
    key: number;
  }

  const state = reactive<State>({
    flowInfo: {},
    nodeList: [],
    opType: '-1',
    taskId: '',
    key: +new Date(),
  });
  defineProps({
    defaultFullscreen: { type: Boolean, default: false },
  });

  function init(data) {
    state.flowInfo = data.flowInfo;
    state.nodeList = data.nodeList;
    state.opType = data.opType;
    state.taskId = data.taskId;
    state.key = +new Date();
  }
  function viewSubFlow(nodeCode) {
    const data = {
      opType: state.opType,
      nodeCode: nodeCode,
      taskId: state.taskId,
    };
    openSubFlowParserPopup(true, data);
  }
</script>
