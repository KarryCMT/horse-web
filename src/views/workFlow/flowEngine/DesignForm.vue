<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    defaultFullscreen
    :footer="null"
    :closable="false"
    :keyboard="false"
    class="jnpf-full-modal full-modal designer-modal process-designer-modal">
    <template #title>
      <div class="jnpf-full-modal-header">
        <div class="header-title">
          <img src="../../../assets/images/jnpf.png" class="header-logo" />
          <a-tooltip :title="dataForm?.fullName">
            <p class="header-txt"> · {{ dataForm?.fullName }}</p>
          </a-tooltip>
          <a-popover
            v-model:open="versionVisible"
            trigger="click"
            placement="bottom"
            overlayClassName="jnpf-version-popover"
            arrow-point-at-center
            destroyTooltipOnHide
            v-if="currentVersion?.id">
            <template #content>
              <div class="w-250px">
                <div class="version-list">
                  <div v-for="item in versionList" class="version-item" @click="handleChangeVersion(item)">
                    <span class="version-badge" :style="{ background: getVersionColor(item.state) }"></span>
                    <span class="version-name">{{ item.fullName }}</span>
                    <span class="version-state" :style="{ background: getVersionColor(item.state) }">{{ getVersionState(item.state) }}</span>
                    <div class="version-delete">
                      <i class="icon-ym icon-ym-app-delete" @click.stop="handleDelVersion(item.id)" v-if="!item.state && versionList.length > 1" />
                    </div>
                  </div>
                </div>
                <div class="add-btn" @click="handleAddVersion">
                  <a-button type="link" preIcon="icon-ym icon-ym-btn-add">新增流程版本</a-button>
                </div>
              </div>
            </template>
            <a-button type="text" class="current-version">
              <span class="version-badge" :style="{ background: getVersionColor(currentVersion.state) }"></span>{{ currentVersion?.fullName }}
              <i class="icon-ym icon-ym-unfold ml-5px font text-10px" />
            </a-button>
          </a-popover>
        </div>
        <a-steps v-model:current="activeStep" type="navigation" size="small" class="header-steps tab-steps">
          <a-step title="流程建模" />
          <a-step title="流程设置" />
        </a-steps>
        <a-space class="options" :size="10">
          <a-popover
            v-model:open="visible"
            trigger="click"
            placement="bottom"
            overlayClassName="error-contain jnpf-flow-common-popover"
            :bordered="false"
            arrow-point-at-center
            v-if="errorList.length">
            <template #content>
              <div class="w-355px">
                <div class="error-title"><exclamation-circle-filled class="error-icon" />内容不完善，校验失败！</div>
                <div class="error-content">
                  <div class="error-item" v-for="item in errorList">
                    <div class="error-sub-item error-top">
                      <div class="title" :title="item.title">{{ item.title }}</div>
                      <div>
                        <span>{{ item.children.length }}</span>
                        项
                      </div>
                    </div>
                    <div class="error-sub-item error-bottom" v-for="child in item.children">
                      <div class="title" :title="child.errorMessage">{{ child.errorMessage }}</div>
                      <div class="write" v-if="item?.elementId" @click="handleSelectNode(item.elementId)">去填写</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <a-button shape="round" class="error-tips-button">
              {{ errorList.length || 0 }}项不完善<i class="icon-ym icon-ym-unfold ml-5px font text-10px" />
            </a-button>
          </a-popover>
          <a-button type="primary" shape="round" @click="handleSubmit(1)" :loading="releaseBtnLoading" :disabled="btnLoading" v-if="currentVersion.state != 1">
            {{ currentVersion.state == 2 ? '启用' : '发布' }}
          </a-button>
          <a-button type="primary" shape="round" @click="handleSubmit()" :loading="btnLoading" :disabled="releaseBtnLoading" v-if="currentVersion.state == 0">
            {{ t('common.saveText') }}
          </a-button>
          <a-button shape="round" @click="closeModal()">{{ t('common.closeText') }}</a-button>
        </a-space>
      </div>
    </template>
    <FlowProcess ref="processRef" v-bind="getBindValue" v-if="!loading && dataForm?.id" v-show="!activeStep" @addVersion="handleAddVersion" />
    <a-row type="flex" justify="center" align="middle" class="h-full" v-show="activeStep == 1">
      <a-col :span="12" :xxl="10" class="configuration-contain">
        <div class="title">发布范围</div>
        <a-alert message="设置流程发起人范围" type="warning" show-icon />
        <jnpf-radio class="mt-15px" v-model:value="flowConfig.visibleType" :options="launchPermissionOptions" />
      </a-col>
    </a-row>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, reactive, toRefs, unref, computed } from 'vue';
  import { getFlowInfo, getVersionList, saveFlow, copyVersion, delVersion } from '@/api/workFlow/template';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';
  import { FlowProcess } from '@/components/FlowProcess';
  import { ExclamationCircleFilled } from '@ant-design/icons-vue';

  interface State {
    loading: boolean;
    btnLoading: boolean;
    releaseBtnLoading: boolean;
    dataForm: Recordable;
    errorList: any[];
    visible: boolean;
    versionVisible: boolean;
    versionList: any[];
    currentVersion: any;
    key: number;
    activeStep: number;
    flowConfig: any;
  }
  interface ComType {
    getData: () => any;
    handleSelectNode: (elementId) => any;
  }

  const emit = defineEmits(['register', 'reload']);
  const [registerModal, { closeModal, changeLoading }] = useModalInner(init);
  const { createMessage } = useMessage();
  const { t } = useI18n();
  const state = reactive<State>({
    loading: false,
    btnLoading: false,
    releaseBtnLoading: false,
    dataForm: {},
    errorList: [],
    visible: false,
    versionVisible: false,
    versionList: [],
    currentVersion: {},
    key: +new Date(),
    activeStep: 0,
    flowConfig: {
      visibleType: 1, //发起设置权限  1：公开  2：权限设置
    },
  });
  const processRef = ref<Nullable<ComType>>(null);
  const { loading, btnLoading, releaseBtnLoading, dataForm, errorList, visible, versionVisible, versionList, currentVersion, activeStep, flowConfig } =
    toRefs(state);

  const launchPermissionOptions = [
    { fullName: '公开', id: 1 },
    { fullName: '权限设置', id: 2 },
  ];

  const getBindValue = computed(() => ({
    flowInfo: state.dataForm,
    flowState: state.currentVersion.state,
    versionList: state.versionList,
    type: state.dataForm.type || 0,
    key: state.key,
  }));

  function init(data) {
    state.activeStep = 0;
    state.loading = true;
    state.visible = false;
    state.errorList = [];
    changeLoading(true);
    state.dataForm.id = data.id || '';
    state.dataForm.fullName = data.fullName || '';
    initData();
  }
  function initData(update = true) {
    getVersionList(state.dataForm.id)
      .then(res => {
        state.versionList = res.data || [];
        if (!update) return;
        state.currentVersion = state.versionList[0];
        state.key = +new Date();
        initFlowData();
      })
      .catch(() => {
        state.loading = false;
        changeLoading(false);
      });
  }
  function initFlowData() {
    state.errorList = [];
    getFlowInfo(state.currentVersion.id)
      .then(res => {
        state.dataForm = { ...state.dataForm, ...res.data };
        state.flowConfig = !!state.dataForm.flowConfig ? JSON.parse(state.dataForm.flowConfig) : { visibleType: 1 };
        state.loading = false;
        changeLoading(false);
        state.key = +new Date();
      })
      .catch(() => {
        state.loading = false;
        changeLoading(false);
      });
  }
  async function handleSubmit(isRelease = 0) {
    state.visible = false;
    // 流程校验
    const res = (await (unref(processRef) as ComType)?.getData()) || [];
    state.errorList = res.errorList || [];
    if (state.errorList.length) {
      setTimeout(() => {
        state.visible = true;
      }, 10);
      return;
    }
    handleRequest({ ...res.data, type: isRelease });
  }
  function handleRequest(data) {
    const loading = data?.type == 1 ? 'releaseBtnLoading' : 'btnLoading';
    state[loading] = true;
    const query = {
      ...data,
      id: state.dataForm.id,
      flowId: state.currentVersion.id,
      flowConfig: state.flowConfig ? JSON.stringify(state.flowConfig) : null,
    };
    state.dataForm = { ...state.dataForm, ...query, type: state.dataForm.type };
    saveFlow(query)
      .then(res => {
        createMessage.success(res.msg);
        state.releaseBtnLoading = false;
        state.btnLoading = false;
        if (data?.type !== 1) return;
        state.currentVersion.state = 1;
        state.key = +new Date();
        initData(false);
        emit('reload');
      })
      .catch(() => {
        state.releaseBtnLoading = false;
        state.btnLoading = false;
      });
  }
  function getVersionColor(state) {
    return state == 0 ? 'rgba(247,171,51,0.9)' : state == 1 ? 'rgba(75, 222, 0, 0.9)' : 'rgba(152,158,178,0.9)';
  }
  function getVersionState(state) {
    return state == 0 ? '设计中' : state == 1 ? '启用中' : '已归档';
  }
  function handleAddVersion() {
    copyVersion(state.currentVersion.id).then(res => {
      const currentId = res.data;
      getVersionList(state.dataForm.id).then(res => {
        state.versionList = res.data || [];
        if (currentId) {
          const list = state.versionList.filter(o => o.id == currentId);
          state.currentVersion = list.length ? list[0] : state.versionList[0];
          initFlowData();
        }
      });
    });
  }
  function handleChangeVersion(item) {
    if (state.currentVersion.id == item.id) return;
    state.versionVisible = false;
    state.currentVersion = item;
    initFlowData();
  }
  function handleDelVersion(id) {
    delVersion(id).then(res => {
      createMessage.success(res.msg);
      initData(state.currentVersion.id === id);
    });
  }
  function handleSelectNode(elementId) {
    state.activeStep = 0;
    state.visible = false;
    (unref(processRef) as ComType).handleSelectNode(elementId);
  }
</script>
<style lang="less" scoped>
  .error-tips-button {
    display: flex;
    align-items: center;
    &:hover i {
      color: @primary-color;
    }
    i {
      color: @text-color-label;
    }
  }
  .error-contain {
    .ant-popover-arrow::before {
      background: #fdc6c6 !important;
    }
    .error-title {
      background: linear-gradient(26deg, #fceaea 0%, #fdc6c6 100%);
      height: 46px;
      font-size: 16px;
      font-weight: bold;
      color: @text-color-base;
      display: flex;
      align-items: center;
      padding: 0 26px;
      .error-icon {
        margin-right: 4px;
        color: #e85959;
      }
    }
    .error-content {
      padding: 8px 26px;
      max-height: 300px;
      overflow: auto;
      .error-item {
        display: flex;
        flex-direction: column;
        .error-sub-item {
          display: flex;
          justify-content: space-between;
          line-height: 35px;
          .title {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .error-top {
          .title {
            font-weight: bold;
          }
          span {
            color: @error-color;
          }
        }
        .error-bottom {
          .title {
            color: @text-color-label;
          }
          .write {
            color: @primary-color;
            flex-shrink: 0;
            margin-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .configuration-contain {
    height: 100%;
    background-color: @component-background;
    padding: 20px;
    border-radius: 8px;
    overflow-y: auto;
    .title {
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
  .process-designer-modal {
    .header-title {
      display: flex;
      align-items: center;
    }
  }
</style>
<style lang="less">
  .error-contain {
    .ant-popover-arrow::before {
      background: #fdd5d5 !important;
    }
  }
</style>
