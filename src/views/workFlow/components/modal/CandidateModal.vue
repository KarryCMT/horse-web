<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="提交审核" @ok="handleSubmit" :minHeight="52" destroyOnClose @cancel="onClose">
    <a-form :colon="false" :labelCol="{ style: { width: dataForm.candidateList.length ? '130px' : '80px' } }" :model="dataForm" ref="formElRef" v-if="!loading">
      <a-form-item
        :label="item.nodeName + item.label"
        :name="['candidateList', i, 'value']"
        v-for="(item, i) in dataForm.candidateList"
        :key="i"
        :rules="item.rules">
        <candidate-user-select v-model:value="item.value" multiple :formData="state.formData" :nodeCode="item.nodeCode" v-if="item.hasCandidates" />
        <jnpf-user-select v-model:value="item.value" multiple placeholder="请选择" modalTitle="候选人员" v-else />
      </a-form-item>
      <a-form-item label="抄送人员" name="copyIds" v-if="isCustomCopy">
        <jnpf-user-select v-model:value="dataForm.copyIds" multiple allowClear />
      </a-form-item>
    </a-form>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { reactive, ref, toRefs, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import type { FormInstance } from 'ant-design-vue';
  import CandidateUserSelect from './CandidateUserSelect.vue';

  interface State {
    dataForm: any;
    defaultCandidateList: any[];
    isCustomCopy: boolean;
    formData: any;
    eventType: string;
    loading: boolean;
  }

  const emit = defineEmits(['register', 'confirm']);

  const formElRef = ref<FormInstance>();
  const state = reactive<State>({
    dataForm: {
      copyIds: [],
      candidateList: [],
    },
    defaultCandidateList: [],
    isCustomCopy: false,
    formData: {},
    eventType: '',
    loading: false,
  });
  const { dataForm, isCustomCopy, loading } = toRefs(state);
  const [registerModal, { changeOkLoading }] = useModalInner(init);

  function init(data) {
    changeOkLoading(false);
    state.loading = true;
    state.isCustomCopy = data.isCustomCopy;
    state.eventType = data.eventType;
    state.formData = data.formData;
    state.dataForm.copyIds = [];
    state.dataForm.candidateList = [];
    state.defaultCandidateList = data.candidateList.map(o => ({
      ...o,
      label: '审批人',
      value: [],
      rules: [{ required: true, message: `必填`, trigger: 'change', type: 'array' }],
    }));
    state.dataForm.candidateList = state.defaultCandidateList;
    nextTick(() => {
      state.loading = false;
      formElRef.value?.clearValidate();
    });
  }
  async function handleSubmit() {
    try {
      const values = await formElRef.value?.validate();
      if (!values) return;
      let candidateList = {};
      for (let i = 0; i < state.dataForm.candidateList.length; i++) {
        candidateList[state.dataForm.candidateList[i].nodeCode] = state.dataForm.candidateList[i].value;
      }
      changeOkLoading(true);
      emit('confirm', {
        candidateList,
        copyIds: state.dataForm.copyIds.join(','),
        eventType: state.eventType,
      });
    } catch (_) {}
  }
  function onClose() {
    state.dataForm.copyIds = [];
    state.dataForm.candidateList = [];
  }
</script>
