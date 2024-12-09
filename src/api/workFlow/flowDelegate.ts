import { defHttp } from '@/utils/http/axios';

enum Api {
  Prefix = '/api/workflow/delegate',
}

// 获取流程委托列表
export function getFlowDelegateList(data) {
  return defHttp.get({ url: Api.Prefix, data });
}
// 新建流程委托
export function create(data) {
  return defHttp.post({ url: Api.Prefix, data });
}
// 修改流程委托
export function update(data) {
  return defHttp.put({ url: Api.Prefix + '/' + data.id, data });
}
// 获取流程委托信息
export function getInfo(id) {
  return defHttp.get({ url: Api.Prefix + '/' + id });
}
// 删除流程委托
export function delFlowDelegate(id) {
  return defHttp.delete({ url: Api.Prefix + '/' + id });
}
// 获取我的委托发起流程
export function getDelegateFlow(data) {
  return defHttp.get({ url: Api.Prefix + '/GetFlow', data });
}
// 获取流程的所有委托人
export function getDelegateUser() {
  return defHttp.get({ url: Api.Prefix + '/UserList' });
}
// 结束流程委托
export function stop(id) {
  return defHttp.put({ url: Api.Prefix + `/Stop/${id}` });
}
