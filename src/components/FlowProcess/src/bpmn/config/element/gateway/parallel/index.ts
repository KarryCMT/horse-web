import { jnpfConfigBpmnContextPad } from '../../../contextPad';
import { bpmnParallel, typeGateway } from '../../../variableName';
const { approver } = jnpfConfigBpmnContextPad;

const jnpfParallelConfig: any = {
  name: typeGateway,
  shapeType: bpmnParallel,
  element: {
    label: 'Task',
    actionName: 'replace-with-task',
    className: 'bpmn-icon-task',
    target: {
      type: typeGateway,
    },
  },
  palette: {
    name: 'create.jnpf-task',
    group: 'model',
    className: 'icon-jnpf-create icon-jnpf-task',
    title: '创建一个类型为jnpf-task的任务节点1',
  },
  renderer: {
    icon: 'icon-ym icon-ym-flow-node-approve',
    iconColor: '#1DACEB',
    titleColor: '#C0EDF8',
    background: '#ffffff',
    attr: { x: 0, y: 0, width: 90, rx: 16, height: 32 },
    rendererName: '并行分支',
    bodyDefaultText: '请设置审批人',
  },
  contextPad: {
    default: false, // contextPad 中的元素使用默认 否则遵循自定义
    customization: { approver }, // 自定义 只有default = false 开启
  },
  properties: {},
};

export { jnpfParallelConfig };
