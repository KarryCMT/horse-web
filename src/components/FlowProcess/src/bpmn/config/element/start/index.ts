import { jnpfConfigBpmnContextPad } from '../../contextPad';
import { bpmnStart, typeStart } from '../../variableName';

const { approver, subFlow, connect } = jnpfConfigBpmnContextPad;

const jnpfStartConfig: any = {
  name: typeStart,
  shapeType: bpmnStart,
  palette: {
    name: 'create.jnpf-task',
    group: 'model',
    className: 'icon-jnpf-create icon-jnpf-task',
    title: '创建一个类型为jnpf-task的任务节点1',
  },
  renderer: {
    icon: 'icon-ym icon-ym-flow-node-start',
    iconColor: '#4cd823',
    titleColor: '#f0f5ff',
    background: '#ffffff',
    attr: { x: 0, y: 0, width: 90, rx: 16, height: 32 },
    rendererName: '流程发起',
    bodyDefaultText: '暂未选择表单',
  },
  contextPad: {
    default: false, // contextPad 中的元素使用默认 否则遵循自定义
    customization: { approver, subFlow, connect }, // 自定义 只有default = false 开启
  },
  properties: {},
};

export { jnpfStartConfig };
