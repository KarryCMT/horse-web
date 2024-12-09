import { jnpfApproverConfig } from './element/approver';
import { jnpfStartConfig } from './element/start';
import { jnpfEndConfig } from './element/end';
import { jnpfSubFlowConfig } from './element/subFlow';
import { jnpfTimerConfig } from './element/timer';
import { jnpfLabelConfig } from './element/label';
import { jnpfExclusiveConfig } from './element/gateway/exclusive';
import { jnpfInclusiveConfig } from './element/gateway/inclusive';
import { jnpfParallelConfig } from './element/gateway/parallel';
import {
  bpmnTask,
  bpmnStart,
  bpmnEnd,
  bpmnTimer,
  bpmnSubFlow,
  bpmnLabel,
  bpmnInclusive,
  bpmnParallel,
  bpmnExclusive,
  typeStart,
  typeEnd,
  typeSubFlow,
  typeTimer,
  typeLabel,
  typeGateway,
  typeTask,
  bpmnSequenceFlow,
} from './variableName';
import { jnpfSequenceFlow } from './element/sequenceFlow';

const hasLabelElements: any = ['bpmn:StartEvent', 'bpmn:EndEvent', 'bpmn:InclusiveGateway']; // 一开始就有label标签的元素类型
const BpmnBusinessObjectKey = {
  id: 'wnId',
};

const typeConfig: any = {
  [bpmnTask]: jnpfApproverConfig,
  [bpmnStart]: jnpfStartConfig,
  [bpmnEnd]: jnpfEndConfig,
  [bpmnSubFlow]: jnpfSubFlowConfig,
  [bpmnTimer]: jnpfTimerConfig,
  [bpmnLabel]: jnpfLabelConfig,
  [bpmnInclusive]: jnpfInclusiveConfig,
  [bpmnParallel]: jnpfParallelConfig,
  [bpmnExclusive]: jnpfExclusiveConfig,
  [bpmnSequenceFlow]: jnpfSequenceFlow,
};

// 默认wnType值
const conversionWnType: any = {
  [bpmnStart]: typeStart,
  [bpmnEnd]: typeEnd,
  [bpmnTask]: typeTask,
  [bpmnSubFlow]: typeSubFlow,
  [bpmnTimer]: typeTimer,
  [bpmnLabel]: typeLabel,
  [bpmnInclusive]: typeGateway,
  [bpmnParallel]: typeGateway,
  [bpmnExclusive]: typeGateway,
};

export { typeConfig, BpmnBusinessObjectKey, hasLabelElements, conversionWnType };
