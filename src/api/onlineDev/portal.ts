import { defHttp } from '@/utils/http/axios';
import cityJson from "@/api/json/city.json";
enum Api {
  Prefix = '/api/visualdev/Portal',
  AtlasPrefix = '/api/system/atlas',
  DashboardPrefix = '/api/visualdev/Dashboard',
  portalPrefix = '/api/system/PortalManage',
}

// 获取门户列表
export function getPortalList(data) {
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "list": [
            {
                "fullName": "流程门户",
                "enCode": "3534",
                "state": 1,
                "type": 0,
                "tables": null,
                "creatorTime": 1721725996000,
                "creatorUser": "管理员/admin",
                "creatorUserId": "349057407209541",
                "lastModifyTime": 1721731349000,
                "lastModifyUser": "管理员/admin",
                "lastModifyUserId": "349057407209541",
                "sortCode": 0,
                "category": "车辆管理",
                "id": "585481192002814853",
                "webType": null,
                "pcIsRelease": null,
                "appIsRelease": null,
                "isRelease": 1,
                "enableFlow": null,
                "enabledMark": 1,
                "enabledLock": 1,
                "hasPackage": false,
                "pcPortalIsRelease": null,
                "appPortalIsRelease": null,
                "pcReleaseName": null,
                "appReleaseName": null,
                "pcPortalReleaseName": null,
                "appPortalReleaseName": null,
                "platformRelease": "{\"pc\":1,\"app\":1,\"pcPortal\":1,\"appPortal\":1}"
            },
            {
                "fullName": "门户设计",
                "enCode": "ceshi1",
                "state": 2,
                "type": 0,
                "tables": null,
                "creatorTime": 1721446243000,
                "creatorUser": "管理员/admin",
                "creatorUserId": "349057407209541",
                "lastModifyTime": 1733900899000,
                "lastModifyUser": "管理员/admin",
                "lastModifyUserId": "349057407209541",
                "sortCode": 0,
                "category": "车辆管理",
                "id": "584307823228223493",
                "webType": null,
                "pcIsRelease": null,
                "appIsRelease": null,
                "isRelease": 2,
                "enableFlow": null,
                "enabledMark": 1,
                "enabledLock": 1,
                "hasPackage": false,
                "pcPortalIsRelease": null,
                "appPortalIsRelease": null,
                "pcReleaseName": null,
                "appReleaseName": null,
                "pcPortalReleaseName": null,
                "appPortalReleaseName": null,
                "platformRelease": "{\"pc\":1,\"app\":1,\"pcPortal\":1,\"appPortal\":1}"
            },
            {
                "fullName": "常规门户",
                "enCode": "ceshi",
                "state": 1,
                "type": 0,
                "tables": null,
                "creatorTime": 1721446085000,
                "creatorUser": "管理员/admin",
                "creatorUserId": "349057407209541",
                "lastModifyTime": 1721731373000,
                "lastModifyUser": "管理员/admin",
                "lastModifyUserId": "349057407209541",
                "sortCode": 0,
                "category": "CRM应用",
                "id": "584307160905678853",
                "webType": null,
                "pcIsRelease": null,
                "appIsRelease": null,
                "isRelease": 1,
                "enableFlow": null,
                "enabledMark": 1,
                "enabledLock": 1,
                "hasPackage": false,
                "pcPortalIsRelease": null,
                "appPortalIsRelease": null,
                "pcReleaseName": null,
                "appReleaseName": null,
                "pcPortalReleaseName": null,
                "appPortalReleaseName": null,
                "platformRelease": "{\"pc\":1,\"app\":1,\"pcPortal\":1,\"appPortal\":1}"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 20,
            "total": 3
        }
    }
});
}
// 获取门户信息
export function getInfo(id) {
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "fullName": "流程门户",
        "enCode": "3534",
        "enabledMark": 1,
        "description": null,
        "formData": "{\"layoutId\":104,\"layout\":[{\"icon\":\"icon-ym icon-ym-generator-todo\",\"label\":\"我的待办\",\"jnpfKey\":\"todo\",\"title\":\"我的待办\",\"renderKey\":\"\",\"visibility\":[\"pc\",\"app\"],\"card\":{\"titleFontSize\":14,\"titleFontWeight\":false,\"titleFontColor\":\"#303133\",\"titleLeft\":\"left\",\"titleBgColor\":\"\",\"cardIcon\":\"icon-ym icon-ym-generator-todo\",\"cardIconColor\":\"#606266\",\"linkType\":\"\",\"type\":\"\",\"moduleId\":\"\",\"urlAddress\":\"\",\"linkTarget\":\"_self\",\"appLinkType\":\"\",\"appType\":\"\",\"appModuleId\":\"\",\"appUrlAddress\":\"\"},\"option\":{\"styleType\":1,\"defaultValue\":[{\"fullName\":\"流程待签\",\"id\":\"flowToSign\",\"noShow\":false,\"num\":0,\"category\":[],\"urlAddress\":\"/workFlow/flowToSign\",\"icon\":\"icon-ym icon-ym-flowToSign\",\"iconBgColor\":\"#1997f4\",\"type\":2},{\"fullName\":\"流程待办\",\"id\":\"flowTodo\",\"noShow\":false,\"num\":0,\"category\":[],\"urlAddress\":\"/workFlow/flowTodo\",\"icon\":\"icon-ym icon-ym-flowTodo\",\"iconBgColor\":\"#f29700\",\"type\":2},{\"fullName\":\"流程在办\",\"id\":\"flowDoing\",\"noShow\":false,\"num\":0,\"category\":[],\"urlAddress\":\"/workFlow/flowDoing\",\"icon\":\"icon-ym icon-ym-flowDoing\",\"iconBgColor\":\"#495dfd\",\"type\":2},{\"fullName\":\"流程已办\",\"id\":\"flowDone\",\"noShow\":false,\"num\":0,\"category\":[],\"urlAddress\":\"/workFlow/flowDone\",\"icon\":\"icon-ym icon-ym-flowDone\",\"iconBgColor\":\"#7b1ae1\",\"type\":2},{\"fullName\":\"流程抄送\",\"id\":\"flowCirculate\",\"noShow\":false,\"num\":0,\"category\":[],\"urlAddress\":\"/workFlow/flowCirculate\",\"icon\":\"icon-ym icon-ym-flowCirculate\",\"iconBgColor\":\"#33b932\",\"type\":2}],\"rowNumber\":5,\"showBorder\":false,\"appRowNumber\":5,\"appShowBorder\":false,\"labelFontSize\":14,\"labelFontWeight\":false,\"labelFontColor\":\"#606266\",\"valueFontSize\":24,\"valueFontWeight\":true,\"valueFontColor\":\"#303133\",\"valueFontBgColor\":\"#FE433E\"},\"refresh\":{\"autoRefresh\":false,\"autoRefreshTime\":5},\"w\":12,\"h\":4,\"minW\":6,\"minH\":3,\"maxW\":12,\"maxH\":12,\"i\":100,\"x\":0,\"y\":0,\"moved\":false},{\"icon\":\"icon-ym icon-ym-flowToSign\",\"label\":\"待签事项\",\"jnpfKey\":\"todoList\",\"title\":\"待签事项\",\"visibility\":[\"pc\",\"app\"],\"type\":1,\"card\":{\"titleFontSize\":14,\"titleFontWeight\":false,\"titleFontColor\":\"#303133\",\"titleLeft\":\"left\",\"titleBgColor\":\"\",\"cardIcon\":\"icon-ym icon-ym-flowToSign\",\"cardIconColor\":\"#606266\",\"linkType\":\"\",\"type\":\"\",\"moduleId\":\"\",\"urlAddress\":\"\",\"linkTarget\":\"_self\",\"appLinkType\":\"\",\"appType\":\"\",\"appModuleId\":\"\",\"appUrlAddress\":\"\"},\"w\":6,\"h\":7,\"minW\":4,\"minH\":7,\"maxW\":12,\"maxH\":12,\"i\":101,\"x\":0,\"y\":4,\"moved\":false},{\"icon\":\"icon-ym icon-ym-flowTodo\",\"label\":\"待办事项\",\"jnpfKey\":\"todoList\",\"title\":\"待办事项\",\"visibility\":[\"pc\",\"app\"],\"type\":2,\"card\":{\"titleFontSize\":14,\"titleFontWeight\":false,\"titleFontColor\":\"#303133\",\"titleLeft\":\"left\",\"titleBgColor\":\"\",\"cardIcon\":\"icon-ym icon-ym-flowTodo\",\"cardIconColor\":\"#606266\",\"linkType\":\"\",\"type\":\"\",\"moduleId\":\"\",\"urlAddress\":\"\",\"linkTarget\":\"_self\",\"appLinkType\":\"\",\"appType\":\"\",\"appModuleId\":\"\",\"appUrlAddress\":\"\"},\"w\":6,\"h\":7,\"minW\":4,\"minH\":7,\"maxW\":12,\"maxH\":12,\"i\":102,\"x\":6,\"y\":4,\"moved\":false},{\"icon\":\"icon-ym icon-ym-flowDoing\",\"label\":\"在办事项\",\"jnpfKey\":\"todoList\",\"title\":\"在办事项\",\"type\":3,\"visibility\":[\"pc\",\"app\"],\"card\":{\"titleFontSize\":14,\"titleFontWeight\":false,\"titleFontColor\":\"#303133\",\"titleLeft\":\"left\",\"titleBgColor\":\"\",\"cardIcon\":\"icon-ym icon-ym-flowDoing\",\"cardIconColor\":\"#606266\",\"linkType\":\"\",\"type\":\"\",\"moduleId\":\"\",\"urlAddress\":\"\",\"linkTarget\":\"_self\",\"appLinkType\":\"\",\"appType\":\"\",\"appModuleId\":\"\",\"appUrlAddress\":\"\"},\"w\":6,\"h\":7,\"minW\":4,\"minH\":7,\"maxW\":12,\"maxH\":12,\"i\":103,\"x\":0,\"y\":11,\"moved\":false}],\"refresh\":{\"autoRefresh\":false,\"autoRefreshTime\":\"5\"}}",
        "category": "e17e977fe98e43d0baabb327f70e6549",
        "sortCode": 0,
        "type": 0,
        "customUrl": null,
        "appCustomUrl": null,
        "linkType": 0,
        "enabledLock": 1,
        "id": "585481192002814853",
        "pcIsRelease": 1,
        "appIsRelease": 1,
        "pcPortalIsRelease": 1,
        "appPortalIsRelease": 1,
        "pcReleaseName": "业务平台/门户示例/流程门户",
        "appReleaseName": "业务平台/门户示例/流程门户",
        "pcPortalReleaseName": "业务平台",
        "appPortalReleaseName": "业务平台",
        "platformRelease": "{\"pc\":1,\"app\":1,\"pcPortal\":1,\"appPortal\":1}"
    }
});
}
// 删除门户
export function delPortal(id) {
  return defHttp.delete({ url: Api.Prefix + `/${id}` });
}
// 修改门户
export function updatePortal(data) {
  // return defHttp.put({ url: Api.Prefix + `/${data.id}`, data });
  return Promise.resolve({"code":200,"msg":"更新成功"})
}
// 新建门户
export function createPortal(data) {
  return defHttp.post({ url: Api.Prefix, data });
}
// 复制门户
export function copyPortal(id) {
  return defHttp.post({ url: Api.Prefix + `/${id}/Actions/Copy` });
}
// 导出门户
export function exportPortal(id) {
  return defHttp.post({ url: Api.Prefix + `/${id}/Actions/Export` });
}
// 获取门户下拉框列表
export function getPortalSelector(type?, systemId?) {
  return defHttp.get({ url: Api.Prefix + '/Selector?platform=Web', data: { type, systemId } });
}
// 切换用户门户默认显示
export function setDefaultPortal(id) {
  return defHttp.put({ url: Api.Prefix + `/${id}/Actions/SetDefault?platform=Web` });
}
// 获取门户展示数据(权限)
export function getAuthPortal(id, data) {
  return defHttp.get({ url: Api.Prefix + `/${id}/auth`, data });
}
// 获取全国省市区
export function getAtlas() {
  // return defHttp.get({ url: Api.AtlasPrefix });
  return Promise.resolve(cityJson)
}
// 获取地图json
export function getMapData(data) {
  return defHttp.get({ url: Api.AtlasPrefix + '/geojson', data });
}
// 用户拖拽后更新
export function UpdateCustomPortal(id, data) {
  return defHttp.put({ url: Api.Prefix + `/Custom/Save/${id}`, data });
}
// 获取我的待办
export function getFlowTodoCount(data) {
  // return defHttp.post({ url: Api.DashboardPrefix + '/FlowTodoCount', data });
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "flowToSign": 0,
        "flowTodo": 0,
        "flowDoing": 0,
        "flowDone": 0,
        "flowCirculate": 0
    }
})
}
// 获取通知公告
export function getNoticeList(data) {
  // return defHttp.post({ url: Api.DashboardPrefix + '/Notice', data });
  return Promise.resolve({"code":200,"msg":"Success","data":{"list":[]}})
}
// 获取未读邮件
export function getEmailList() {
  return defHttp.get({ url: Api.DashboardPrefix + '/Email' });
}
// 获取待办事项
export function getFlowTodoList(type) {
  // return defHttp.get({ url: Api.DashboardPrefix + '/FlowTodo?type=' + type });
  return Promise.resolve({"code":200,"msg":"Success","data":{"list":[]}})
}
// 获取我的待办事项
export function getMyFlowTodoList(data) {
  return defHttp.get({ url: Api.DashboardPrefix + '/MyFlowTodo', data });
}
//发布
export function release(id, data) {
  return defHttp.put({ url: Api.Prefix + `/Actions/release/${id}`, data });
}
// 获取门户管理列表
export function getPortalManageList(data) {
  return defHttp.get({ url: Api.portalPrefix + `/list/${data.systemId}`, data });
}
// 获取门户名称列表
export function getPortalManageSelector(data) {
  return defHttp.get({ url: Api.Prefix + `/manage/Selector/${data.systemId}`, data });
}
// 获取门户管理详情
export function getPortalManageInfo(id) {
  return defHttp.get({ url: Api.portalPrefix + `/${id}` });
}
// 新建门户管理
export function createPortalManage(data) {
  return defHttp.post({ url: Api.portalPrefix, data });
}
// 编辑门户管理
export function updatePortalManage(data) {
  return defHttp.put({ url: Api.portalPrefix + `/${data.id}`, data });
}
// 删除门户管理
export function delPortalManage(id) {
  return defHttp.delete({ url: Api.portalPrefix + `/${id}` });
}

// 获取应用列表(发布过滤)
export function getSystemListFilter(data, id) {
  return defHttp.get({ url: Api.Prefix + `/systemFilter/${id}`, data });
}
