import { defHttp } from '@/utils/http/axios';

// 获取列表
export function getList(data) {
  return defHttp.post({ url: '/api/subdev/Test_purchase/getList', data });
}
// 新建
export function create(data) {
  return defHttp.post({ url:'/api/subdev/Test_purchase', data });
}
// 修改
export function update(data) {
  return defHttp.put({ url: '/api/subdev/Test_purchase/'+ data.id, data });
}
// 详情(无转换数据)
export function getInfo(id) {
  return defHttp.get({ url: '/api/subdev/Test_purchase/' + id });
}
// 获取(转换数据)
export function getDetailInfo(id) {
  return defHttp.get({ url: '/api/subdev/Test_purchase/detail/' + id });
}
// 删除
export function del(id) {
  return defHttp.delete({ url: '/api/subdev/Test_purchase/' + id });
}
// 批量删除数据
export function batchDelete(data) {
  return defHttp.delete({ url: '/api/subdev/Test_purchase/batchRemove', data });
}
// 导出
export function exportData(data) {
  return defHttp.post({ url: '/api/subdev/Test_purchase/Actions/Export', data });
}
