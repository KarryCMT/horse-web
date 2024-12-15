import { defHttp } from '@/utils/http/axios';
import { LoginParams } from './model/userModel';
import { ContentTypeEnum } from '@/enums/httpEnum';
import { getJnpfAppId } from '@/utils/jnpf';

enum Api {
  Prefix = '/api/oauth',
  Login = '/api/oauth/Login',
  Logout = '/api/oauth/Logout',
  GetUserInfo = '/api/oauth/CurrentUser',
  Unlock = '/api/oauth/LockScreen',
}

// 用户登录
export function loginApi(params: LoginParams) {
  return defHttp.post({ url: Api.Login, params, headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED } });
}
// 获取当前用户信息
export function getUserInfo() {
  const systemCode = getJnpfAppId() ? getJnpfAppId().replace('JNPF_APP_', '') : '';
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "menuList": [
            {
                "id": "7234458129814e0c9c42bc89652b1fa0",
                "fullName": "在线开发",
                "enCode": "onlineDev",
                "parentId": "-1",
                "icon": "icon-ym icon-ym-onlineDevelopment",
                "hasChildren": true,
                "urlAddress": "",
                "linkTarget": "_self",
                "children": [
                    {
                        "id": "232d7226f00446d882e1e1bd999f7b2d",
                        "fullName": "门户设计",
                        "enCode": "onlineDev.visualPortal",
                        "parentId": "7234458129814e0c9c42bc89652b1fa0",
                        "icon": "icon-ym icon-ym-portalDesign",
                        "hasChildren": false,
                        "urlAddress": "onlineDev/visualPortal",
                        "linkTarget": "_self",
                        "children": null,
                        "type": 2,
                        "propertyJson": "{\"iconBackgroundColor\":\"#33B932\",\"moduleId\":\"\"}",
                        "sortCode": 14,
                        "systemId": "309228585019769285",
                        "isData": null
                    },
                ],
                "type": 1,
                "propertyJson": "{\"iconBackgroundColor\":\"\",\"moduleId\":\"\"}",
                "sortCode": 1,
                "systemId": "309228585019769285",
                "isData": null
            },
        ],
        "permissionList": [
            {
                "modelId": "623512684335202757",
                "moduleName": "各部门学历薪资统计（交叉和图表）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623500652768657861",
                "moduleName": "各部门学历性别分布（交叉报表）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623500526666908101",
                "moduleName": "各部门学历薪资分布（交叉报表）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623500336274866629",
                "moduleName": "各部门学历薪资分布（分组合计）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623499341226574277",
                "moduleName": "人员花名册(行列)",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623499192811127237",
                "moduleName": "人员花名册(分组)",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "623485654872883589",
                "moduleName": "人员花名册(列表)",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621394686245864581",
                "moduleName": "资产归还",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621385984109446277",
                "moduleName": "资产转移",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621376839398458501",
                "moduleName": "资产盘点",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621332940604834949",
                "moduleName": "资产申领",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621238940862514309",
                "moduleName": "资产存储",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621043442142676037",
                "moduleName": "仓库位置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "621022368998884421",
                "moduleName": "资产分类",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620669624605737989",
                "moduleName": "巡检计划",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620657614535001093",
                "moduleName": "报废申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620634249665446917",
                "moduleName": "设备维修",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620621608591033349",
                "moduleName": "设备报修",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620598432783926277",
                "moduleName": "设备归还",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620587711224349701",
                "moduleName": "设备申领",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620527335002604549",
                "moduleName": "设备信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620279118784627653",
                "moduleName": "设备入库",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620266936474796997",
                "moduleName": "设备请购",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620257772432262085",
                "moduleName": "故障类型",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620254535226491845",
                "moduleName": "设备分类",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620250929840522181",
                "moduleName": "仓库信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620244589671875525",
                "moduleName": "厂商信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620235596127798213",
                "moduleName": "物资请购",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620226814438015941",
                "moduleName": "物资详情",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620189803404592069",
                "moduleName": "车辆维修",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620174762085188549",
                "moduleName": "车辆加油",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "620162082100216773",
                "moduleName": "还车申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619918592099484549",
                "moduleName": "用车申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619904986259653509",
                "moduleName": "车辆信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619885713793483653",
                "moduleName": "请假类型",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619882749389439877",
                "moduleName": "公告发文",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619871815975568261",
                "moduleName": "外勤打卡",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619825889194017669",
                "moduleName": "出差申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619816199261258629",
                "moduleName": "加班申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619596474245710661",
                "moduleName": "请假申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619580481251312453",
                "moduleName": "离职申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619572697889768261",
                "moduleName": "调岗申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619558974722671429",
                "moduleName": "员工档案",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619538374927057733",
                "moduleName": "转正申请",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619516252016083781",
                "moduleName": "合同管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "619494916099146565",
                "moduleName": "入职审批",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "616968661575402245",
                "moduleName": "面试流程含子表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "616921494479438597",
                "moduleName": "面试评价",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "616561133389611653",
                "moduleName": "面试人员登记",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "616283945083863621",
                "moduleName": "应聘者登记表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "616171435764744773",
                "moduleName": "面试流程",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "615940098420113861",
                "moduleName": "招聘需求",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585506116079715205",
                "moduleName": "数据大屏模板54",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585504638438998917",
                "moduleName": "数据大屏模板74",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585504283588297605",
                "moduleName": "数据大屏模板87",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585473951841387397",
                "moduleName": "物资申请（简单）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585473797822350213",
                "moduleName": "付款申请（简单）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585473652871398277",
                "moduleName": "物资申请（标准）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585473461611135877",
                "moduleName": "付款申请（标准）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "9b17839e49d54f3f899e30ce1de699ca",
                "moduleName": "用户列表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "8c5df94a7af84f26846d719b6e27c765",
                "moduleName": "同比报表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "1720be09dd2f4b789e400216ab476bad",
                "moduleName": "行列表报表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "7b251971ebc64ee283b5ee221930d751",
                "moduleName": "图表报表示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "450e82f2add943bb9f3e02ce1a35342d",
                "moduleName": "环比报表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "95160c525bd44caa9a5ea6170c052f86",
                "moduleName": "分层列表报表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "381460546165177989",
                "moduleName": "审批常用语",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "355609021702473413",
                "moduleName": "微信公众号配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329633709172986117",
                "moduleName": "消息监控",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329633407585751301",
                "moduleName": "发送配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329633072767045893",
                "moduleName": "消息模板",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329627984967264133",
                "moduleName": "webhook配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329627419180820357",
                "moduleName": "短信配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "329627156860659589",
                "moduleName": "邮箱配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "343010259779981061",
                "moduleName": "系统表单",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "301261447164357509",
                "moduleName": "管理员",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "9057d797550e4457b7ddf2456ce45882",
                "moduleName": "权限组",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "85cd7bca426e49ce83a061bf461b1447",
                "moduleName": "表单设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "606398076113912901",
                "moduleName": "报表设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "6bc2d4f16bad4e6897ba837a5c515f16",
                "moduleName": "大屏设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "232d7226f00446d882e1e1bd999f7b2d",
                "moduleName": "门户设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "459975970967790725",
                "moduleName": "集成助手",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "1899916f1cef483f8d0d9a8fcbb9c144",
                "moduleName": "打印设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "223DD382-E2C4-475C-B733-50EFF06D7A54",
                "moduleName": "系统配置",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "97310591eada49f7920d73b554c59212",
                "moduleName": "系统公告",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "1e27a0ad83e44c2a83a2a0954eb4f1cb",
                "moduleName": "系统调度",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "3c0370e4f96f4e6282ed691744235d37",
                "moduleName": "系统缓存",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "0BF2E270-E214-4D3B-9F7C-D5B000068202",
                "moduleName": "系统日志",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "8cab8cfc402a45339975e1b58809cb4a",
                "moduleName": "系统监控",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "69ED1FAC-A672-4AEC-822B-FF2615D5CADF",
                "moduleName": "系统图标",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "C9998351-03E7-449D-B911-666E83F8549E",
                "moduleName": "应用菜单",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "573490296898200581",
                "moduleName": "翻译管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "d1d4cce0e6bd4346a4de288d8ea560b1",
                "moduleName": "单据模板",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "531754430018636805",
                "moduleName": "签章管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "596308536158346309",
                "moduleName": "表单模板",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "ef96d397af964fb7a4363c516270a4f4",
                "moduleName": "数据连接",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "c50f18d0568244a5b85878050bbc5a40",
                "moduleName": "数据建模",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "3F1554C1-4F09-49E7-AC6A-06641BD246CD",
                "moduleName": "数据字典",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "c2122f82fc9c40fca0eb0392d7337e6b",
                "moduleName": "数据接口",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "304171492382407173",
                "moduleName": "接口认证",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "7147a8c641534b3db0bad7c6852017f4",
                "moduleName": "行政区划",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "380C9373-8BB8-4A86-822C-5C09031800C9",
                "moduleName": "组织管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "E5AA0952-44FB-4FB9-B888-C6B78EF96836",
                "moduleName": "岗位管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "4DDA6A84-A432-421C-9CE9-DB7A56033B02",
                "moduleName": "用户管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "07029F61-993A-4A46-BF56-20DE382F4F66",
                "moduleName": "角色管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "271645145269540421",
                "moduleName": "分组管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "fe0150960dd542ec9328067e4495074b",
                "moduleName": "流程设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "856131bc6e2b4b16aa79d35ba5234e78",
                "moduleName": "流程监控",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "B32CD790-FDC8-47BD-A53C-6C1E690F999A",
                "moduleName": "百万数据",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "6de2f14ac37d46e9baa67d0ad4c3bbb1",
                "moduleName": "导入导出",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "fb4ae524555448ddadfbe514134e7bb6",
                "moduleName": "电子签名",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "68960e1d00a04843b375afcceed9ad7e",
                "moduleName": "电子签章",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "BFA48A1E-2957-4B67-B432-C409DCA4FD29",
                "moduleName": "邮件收发",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "4aee7255d083470294970b4643444be0",
                "moduleName": "文档预览",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "0307f1a3b09041a18f7b893cbdef802e",
                "moduleName": "条码示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "388fdf0920834e7c8cf68d1919e0e6b7",
                "moduleName": "地图示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "e04dda1d369e40008fb02c8311f95c4e",
                "moduleName": "订单示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "F4FCA43A-B563-4149-AB16-486589CFC154",
                "moduleName": "订单管理",
                "button": [
                    {
                        "id": "400899518142355973",
                        "fullName": "详情",
                        "enCode": "btn_flowDetail"
                    },
                    {
                        "id": "362606805475396165",
                        "fullName": "删除",
                        "enCode": "btn_remove"
                    },
                    {
                        "id": "362606788446521925",
                        "fullName": "详情",
                        "enCode": "btn_detail"
                    },
                    {
                        "id": "362606773422524997",
                        "fullName": "编辑",
                        "enCode": "btn_edit"
                    },
                    {
                        "id": "362606759103171141",
                        "fullName": "新增",
                        "enCode": "btn_add"
                    }
                ],
                "column": [],
                "resource": [
                    {
                        "id": "ba3a0db808b048569a6e57b13f63c2a9",
                        "fullName": "【我新建的/我下属的】数据",
                        "enCode": "【我新建的/我下属的】数据"
                    }
                ],
                "form": []
            },
            {
                "modelId": "15349f4c8b6e4ea697b522ffe0b7f360",
                "moduleName": "项目管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "c7159f97177b420d9fc8ec8c74ae541b",
                "moduleName": "报表设计(原)",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "12945eb913e6481ea6e4f2e31f4a5b53",
                "moduleName": "E-柱状图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "14af4eaec21445d0933bffd47f6627c8",
                "moduleName": "E-饼状图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "c1c32d3aa7ee4aaa9a0ac6c293ef9f14",
                "moduleName": "E-横状条形图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "1e969a7794784103ae6f058e13ce4723",
                "moduleName": "E-仪表图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "4ebe5d2b23f94571912cee9795f3685f",
                "moduleName": "E-线形图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "81aa106174b34632963d8bb2f34016c4",
                "moduleName": "E-散点图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "138aaa96871945999dff4c34a105724d",
                "moduleName": "E-K线图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "95e276c7abf44476b888fda46989756c",
                "moduleName": "E-折柱混合图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "8a9db01a5c394d889b7cd3d30a043982",
                "moduleName": "E-树形图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "373cc344eb984e5db06b3d3caa97dc82",
                "moduleName": "E-漏斗图",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "A62AB009-57F1-4FF5-9198-B31F17E88231",
                "moduleName": "在线用户",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "b7bd4892751a496ba4f37df6346e6dfb",
                "moduleName": "普通表格",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "6a64fc19cf9b4fbd898cb229cff3e3ea",
                "moduleName": "表格统计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "608a3b5bef3841c4935e8ec59beef600",
                "moduleName": "表格锁定",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "ec49d03e8ca24a2f81d2804350f01f2a",
                "moduleName": "表格分组",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "b7c9307cdb0c49b7923787382d006061",
                "moduleName": "表格编辑",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "73456c27d01b4416a330b011296c0f58",
                "moduleName": "复杂表头",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "853613e7d0aa46e383501b60af3bb440",
                "moduleName": "表格合并",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "854702f9d9c1413f8fe8c66bac8b726c",
                "moduleName": "表格打印",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "bc8957e2c98b4bb682109d003780f2d4",
                "moduleName": "延伸扩展",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "3fc07aa08d96496d9b69c7030dfcb9e4",
                "moduleName": "树形表格",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "11ea9e587d144e30a59c1630e2fedfdb",
                "moduleName": "表格批注",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "dfd43d14ee7e4a4fb8e60c00677df3b9",
                "moduleName": "表格标记",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "6af73de0ad5a44c780045b719d61124f",
                "moduleName": "表格树形",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "2c959b399cd44235a77b4285c6ff0511",
                "moduleName": "表单验证",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "f49c10a5a05e4844a16530486efd974b",
                "moduleName": "表单验证1",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "4c365b56b24c4328b65474f13269b739",
                "moduleName": "表单字段1",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "1ac0131079194d2297717df63ac97f18",
                "moduleName": "表单字段2",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "e26bfab3770b470cab442e5d9ff37cb8",
                "moduleName": "表单字段3",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "5e13fdc479bb4b4f802f2ed4317bb82d",
                "moduleName": "表单字段4",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "4fc39a35638d45868211f0289d9a559d",
                "moduleName": "表单字段5",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "731efce64d334b498e49f63497e76b03",
                "moduleName": "表单字段6",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585825646379271301",
                "moduleName": "列表标签面板",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585824430186300549",
                "moduleName": "列表行内编辑",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585806442619995269",
                "moduleName": "列表左侧树",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585503744251134853",
                "moduleName": "常规门户",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585503699426608005",
                "moduleName": "门户设计",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585503643579450245",
                "moduleName": "流程门户",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585388650867458629",
                "moduleName": "套打示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585151526566101509",
                "moduleName": "采购合同",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585151503455486469",
                "moduleName": "个人信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585151472124035589",
                "moduleName": "报价信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585151439777563141",
                "moduleName": "水电费用",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585020278854124293",
                "moduleName": "数据接口调用字段示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585020219466973957",
                "moduleName": "高级控件和默认查询",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585020121039241989",
                "moduleName": "复杂表头（主子表）示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585020042471539461",
                "moduleName": "行政区划联动",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019885524878085",
                "moduleName": "列表树形表格",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019733963703045",
                "moduleName": "订单示例",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019511900472069",
                "moduleName": "预算管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019427561407237",
                "moduleName": "出差管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019395336569605",
                "moduleName": "事件管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019349425718021",
                "moduleName": "设备巡检管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019299010183941",
                "moduleName": "OKR管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019250733744901",
                "moduleName": "工资条管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019199361909509",
                "moduleName": "隔离管控",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019157448229637",
                "moduleName": "人才管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585019105669546757",
                "moduleName": "用车管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018987910267653",
                "moduleName": "产品管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018906091979525",
                "moduleName": "核酸检测",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018775485547269",
                "moduleName": "药房管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018702269776645",
                "moduleName": "报名管理外链",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018625966998277",
                "moduleName": "大客户信息",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585018554374423301",
                "moduleName": "应收费用",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "585017425158734597",
                "moduleName": "采购管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "584305368570527749",
                "moduleName": "客户管理",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "584304870585008133",
                "moduleName": "集成助手写入数据表",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            },
            {
                "modelId": "584304020277952517",
                "moduleName": "客户管理记录表（集成助手）",
                "button": [],
                "column": [],
                "resource": [],
                "form": []
            }
        ],
        "userInfo": {
            "userId": "349057407209541",
            "userAccount": "admin",
            "userName": "管理员",
            "headIcon": "/api/file/Image/userAvatar/207.jpg",
            "organizeId": "17BEBDCB-248D-4668-B6CD-BF22A446BBD4",
            "organizeIdList": [
                "96240625-934F-490B-8AA6-0BC775B18468",
                "17BEBDCB-248D-4668-B6CD-BF22A446BBD4"
            ],
            "organizeName": "引迈信息技术有限公司/技术部",
            "positionIds": [],
            "systemIds": [
                {
                    "id": "620680603271955461",
                    "name": "资产管理",
                    "icon": "ym-custom ym-custom-square-inc-cash",
                    "enCode": "AMC",
                    "currentSystem": false,
                    "currentStanding": false
                },
                {
                    "id": "620244042344563653",
                    "name": "设备管理",
                    "icon": "icon-ym icon-ym-workFlow",
                    "enCode": "EM",
                    "currentSystem": false,
                    "currentStanding": false
                },
                {
                    "id": "615828443388445125",
                    "name": "人事OA管理",
                    "icon": "ym-custom ym-custom-developer-board",
                    "enCode": "OA",
                    "currentSystem": false,
                    "currentStanding": false
                },
                {
                    "id": "423160212987973",
                    "name": "业务平台",
                    "icon": "icon-ym icon-ym-signature",
                    "enCode": "workSystem",
                    "currentSystem": false,
                    "currentStanding": false
                },
                {
                    "id": "309228585019769285",
                    "name": "开发平台",
                    "icon": "icon-ym icon-ym-signature",
                    "enCode": "mainSystem",
                    "currentSystem": true,
                    "currentStanding": false
                }
            ],
            "positionId": "",
            "positionName": "",
            "prevLogin": 0,
            "prevLoginTime": 1734052583000,
            "prevLoginIPAddress": "210.21.226.222",
            "prevLoginIPAddressName": "广东省深圳市 联通",
            "portalId": "",
            "appPortalId": "585481192002814853",
            "roleIds": [],
            "roleName": null,
            "manager": null,
            "mobilePhone": "18588888888",
            "email": "323",
            "birthday": null,
            "departmentId": "17BEBDCB-248D-4668-B6CD-BF22A446BBD4",
            "departmentName": "技术部",
            "isAdministrator": true,
            "signImg": "",
            "signId": "",
            "changePasswordDate": 1602731493000,
            "systemId": "309228585019769285",
            "appSystemId": null,
            "groupIds": [],
            "groupNames": [],
            "workflowEnabled": 1,
            "standingList": []
        },
        "sysConfigInfo": {
            "sysName": "软件开发平台 - 产品体验",
            "sysVersion": "V5.1.4",
            "loginIcon": null,
            "copyright": "Copyright @ 2024  引迈信息技术有限公司版权所有",
            "companyName": "引迈信息技术有限公司",
            "navigationIcon": null,
            "workLogoIcon": null,
            "logoIcon": null,
            "appIcon": null,
            "title": "JNPF快速开发平台",
            "jnpfDomain": "https://java.jnpfsoft.com",
            "newUserDefaultPassword": "0000",
            "defaultView": "dayGridMonth",
            "showLunarCalendar": true,
            "firstDay": 0,
            "duration": 60,
            "flowSign": 1,
            "delegateScope": 2,
            "delegateAck": 1,
            "proxyScope": 2,
            "proxyAck": 1
        }
    }
});
}
// 退出登陆
export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
// 锁屏解锁登录
export function unlock(data: LoginParams) {
  return defHttp.post({ url: Api.Unlock, data });
}
// 获取系统默认配置
export function getConfig(account) {
  return defHttp.get({ url: Api.Prefix + `/getConfig/${account}` });
}
// 修改密码信息发送
export function updatePasswordMessage() {
  return Promise.resolve({"code":200,"msg":"Success"});
}
// 获取登录配置
export function getLoginConfig() {
  return defHttp.get({ url: Api.Prefix + `/getLoginConfig` });
}
// 获取登录票据
export function getTicket() {
  return defHttp.get({ url: Api.Prefix + `/getTicket` });
}
// 根据票据获取登录状态
export function getTicketStatus(ticket) {
  return defHttp.get({ url: Api.Prefix + `/getTicketStatus/${ticket}` });
}
// 第三方登录回调列表后点击登录
export function socialsLogin(params) {
  return defHttp.post({ url: Api.Prefix + `/Login/socials`, params, headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED } });
}
// 扫码登陆获取凭证
export function getCodeCertificate() {
  return defHttp.get({ url: Api.Prefix + `/codeCertificate` });
}
// 扫码登陆获取凭证状态
export function getCodeCertificateStatus(ticket) {
  return defHttp.get({ url: Api.Prefix + `/codeCertificateStatus/${ticket}` });
}
// 扫码登陆设置凭证状态
export function setCodeCertificateStatus(ticket, status) {
  return defHttp.get({ url: Api.Prefix + `/setCodeCertificateStatus/${ticket}/${status}` });
}
