import { defHttp } from '@/utils/http/axios';

enum Api {
  Prefix = '/api/system/DictionaryData',
  TypePrefix = '/api/system/DictionaryType',
}

// 获取数据字典分类
export function getDictionaryType() {
  return defHttp.get({ url: Api.TypePrefix });
}
// 获取字典分类下拉框列表
export function getDictionaryTypeSelector(id = '0') {
  return defHttp.get({ url: Api.TypePrefix + `/Selector/${id || '0'}` });
}
// 添加数据字典分类
export function createDictionaryType(data) {
  return defHttp.post({ url: Api.TypePrefix, data });
}
// 修改数据字典分类
export function updateDictionaryType(data) {
  return defHttp.put({ url: Api.TypePrefix + '/' + data.id, data });
}
// 获取数据字典分类信息
export function getDictionaryTypeInfo(id) {
  return defHttp.get({ url: Api.TypePrefix + '/' + id });
}
// 删除数据字典分类
export function delDictionaryType(id) {
  return defHttp.delete({ url: Api.TypePrefix + '/' + id });
}

// 获取数据字典分类
export function getDictionaryDataList(params) {
  return defHttp.get({ url: Api.Prefix + '/' + params.typeId, params });
}
// 获取数据字典列表(分类+内容)
export function getDictionaryAll() {
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "list": [
            {
                "enCode": "Rank",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "P5",
                        "id": "485719133245510"
                    },
                    {
                        "enCode": "2",
                        "fullName": "P6",
                        "id": "485719133245511"
                    },
                    {
                        "enCode": "3",
                        "fullName": "P7",
                        "id": "485719133245512"
                    },
                    {
                        "enCode": "4",
                        "fullName": "P8",
                        "id": "485719133245513"
                    },
                    {
                        "enCode": "5",
                        "fullName": "P9",
                        "id": "485719133245514"
                    },
                    {
                        "enCode": "6",
                        "fullName": "P10",
                        "id": "485719133245515"
                    },
                    {
                        "enCode": "7",
                        "fullName": "P11",
                        "id": "485719133245516"
                    }
                ],
                "id": "485719133245509"
            },
            {
                "enCode": "msgNoticeType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "2",
                        "fullName": "通知",
                        "id": "443670490607779781"
                    },
                    {
                        "enCode": "1",
                        "fullName": "公告",
                        "id": "443670455040081861"
                    }
                ],
                "id": "443670211682369477"
            },
            {
                "enCode": "msgSourceType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "公告",
                        "id": "443411297560787717"
                    },
                    {
                        "enCode": "2",
                        "fullName": "流程",
                        "id": "443411381677554437"
                    },
                    {
                        "enCode": "3",
                        "fullName": "系统",
                        "id": "443411412023343877"
                    },
                    {
                        "enCode": "4",
                        "fullName": "日程",
                        "id": "443411445292563205"
                    }
                ],
                "id": "443411165423434501"
            },
            {
                "enCode": "msgWebHookSendType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "钉钉",
                        "id": "443411520995556101"
                    },
                    {
                        "enCode": "2",
                        "fullName": "企业微信",
                        "id": "443411543825152773"
                    }
                ],
                "id": "443411036998040325"
            },
            {
                "enCode": "smsSendType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "阿里云",
                        "id": "443411666235915013"
                    },
                    {
                        "enCode": "2",
                        "fullName": "腾讯云",
                        "id": "443411687371012869"
                    }
                ],
                "id": "443410903564647173"
            },
            {
                "enCode": "msgSendType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "站内信",
                        "id": "443411727913155333"
                    },
                    {
                        "enCode": "2",
                        "fullName": "邮件",
                        "id": "443411749027281669"
                    },
                    {
                        "enCode": "3",
                        "fullName": "短信",
                        "id": "443411769252215557"
                    },
                    {
                        "enCode": "4",
                        "fullName": "钉钉",
                        "id": "443411789451983621"
                    },
                    {
                        "enCode": "5",
                        "fullName": "企业微信",
                        "id": "443411814521338629"
                    },
                    {
                        "enCode": "6",
                        "fullName": "webhook",
                        "id": "443411857466817285"
                    },
                    {
                        "enCode": "7",
                        "fullName": "微信公众号",
                        "id": "443411881844112133"
                    }
                ],
                "id": "443410821654084357"
            },
            {
                "enCode": "msgCenter",
                "isTree": 0,
                "dictionaryList": [],
                "id": "443409825091648261"
            },
            {
                "enCode": "NoticeType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "1",
                        "fullName": "公告",
                        "id": "402359881983605445"
                    },
                    {
                        "enCode": "2",
                        "fullName": "通知",
                        "id": "402359528080816837"
                    }
                ],
                "id": "402359292922968773"
            },
            {
                "enCode": "createModule",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "example",
                        "fullName": "example",
                        "id": "406725667942571077"
                    },
                    {
                        "enCode": "JNPF",
                        "fullName": "JNPF",
                        "id": "406726525522549829"
                    }
                ],
                "id": "400551621328643269"
            },
            {
                "enCode": "scheduleType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "work",
                        "fullName": "工作安排",
                        "id": "391233231405462789"
                    }
                ],
                "id": "391232953557988613"
            },
            {
                "enCode": "businessType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "EquipmentManagement",
                        "fullName": "设备管理",
                        "id": "620247168850068421"
                    },
                    {
                        "enCode": "cheliang",
                        "fullName": "车辆管理",
                        "id": "e17e977fe98e43d0baabb327f70e6549"
                    },
                    {
                        "enCode": "crm",
                        "fullName": "CRM应用",
                        "id": "fe72535365154b5f82fd7c2f984087f3"
                    },
                    {
                        "enCode": "warehouseManagement",
                        "fullName": "仓库管理",
                        "id": "8f65bbe3bce341c8b3625d93544a044a"
                    },
                    {
                        "enCode": "administrationManage",
                        "fullName": "行政管理",
                        "id": "e43a773b8a024d109dfb176e99f08a35"
                    },
                    {
                        "enCode": "projectManage",
                        "fullName": "项目管理",
                        "id": "9b077e268d4f44e6baa29bb40345f422"
                    },
                    {
                        "enCode": "saleManage",
                        "fullName": "销售管理",
                        "id": "9e9205fb43da4b88a24bb1eebd626ff0"
                    },
                    {
                        "enCode": "documentManage",
                        "fullName": "公文管理",
                        "id": "f8b87124ef2a45758426c7d76afa2c90"
                    },
                    {
                        "enCode": "assetsManage",
                        "fullName": "资产管理",
                        "id": "ce51233654ee4d1890c7c081a04da2be"
                    },
                    {
                        "enCode": "contractManage",
                        "fullName": "合同管理",
                        "id": "e8bfa8ac60d34361b815b48c494f3e06"
                    },
                    {
                        "enCode": "serviceSupport",
                        "fullName": "服务支持",
                        "id": "c92985dbcdd648c6a98b272a8f09698e"
                    },
                    {
                        "enCode": "routine",
                        "fullName": "日常工作",
                        "id": "be6b516477ed41dab4d0777336e58ddf"
                    },
                    {
                        "enCode": "costRelated",
                        "fullName": "费用相关",
                        "id": "802fb04ab5b84aa5bcc5dc53372a271d"
                    },
                    {
                        "enCode": "personnelManage",
                        "fullName": "人事管理",
                        "id": "972acb74d15e493aae4f471e16518bef"
                    }
                ],
                "id": "306427078100678661"
            },
            {
                "enCode": "groupType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "12",
                        "fullName": "考核组",
                        "id": "273361036822722373"
                    },
                    {
                        "enCode": "11",
                        "fullName": "管理组",
                        "id": "273360984238733125"
                    },
                    {
                        "enCode": "10",
                        "fullName": "决策组",
                        "id": "273360932820760389"
                    },
                    {
                        "enCode": "09",
                        "fullName": "财务组",
                        "id": "273360891834021701"
                    },
                    {
                        "enCode": "08",
                        "fullName": "运维组",
                        "id": "273360847932241733"
                    },
                    {
                        "enCode": "07",
                        "fullName": "技术组",
                        "id": "273360803795580741"
                    },
                    {
                        "enCode": "06",
                        "fullName": "后勤组",
                        "id": "273360752335664965"
                    },
                    {
                        "enCode": "05",
                        "fullName": "美工组",
                        "id": "273360692990457669"
                    },
                    {
                        "enCode": "04",
                        "fullName": "策划组",
                        "id": "273360647050245957"
                    },
                    {
                        "enCode": "03",
                        "fullName": "销售组",
                        "id": "273360608148076357"
                    },
                    {
                        "enCode": "02",
                        "fullName": "营销组",
                        "id": "273119289081345733"
                    },
                    {
                        "enCode": "01",
                        "fullName": "调研组",
                        "id": "273119250359531205"
                    }
                ],
                "id": "271905527003350725"
            },
            {
                "enCode": "dbType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "DM",
                        "fullName": "DM",
                        "id": "356823929035170373"
                    },
                    {
                        "enCode": "PostgreSQL",
                        "fullName": "PostgreSQL",
                        "id": "356823907753271877"
                    },
                    {
                        "enCode": "KingbaseES",
                        "fullName": "KingbaseES",
                        "id": "356823816648794693"
                    },
                    {
                        "enCode": "SQLServer",
                        "fullName": "SQLServer",
                        "id": "2f0784eccbfc4128b8b42fdf7e66eebf"
                    },
                    {
                        "enCode": "Oracle",
                        "fullName": "Oracle",
                        "id": "fbca06d126e1433a8a74181a83ac5a1a"
                    },
                    {
                        "enCode": "MySQL",
                        "fullName": "MySQL",
                        "id": "b71fb3fbd4824a7f98841dc33b861834"
                    }
                ],
                "id": "9e7b2d0c690f4562b13e1215e449c222"
            },
            {
                "enCode": "FunctionExample",
                "isTree": 0,
                "dictionaryList": [],
                "id": "821ddb80b4f14b918f32549f72a81473"
            },
            {
                "enCode": "kehuleixing",
                "isTree": 1,
                "dictionaryList": [
                    {
                        "id": "a38f2c7ea51b49e4ba3bcf9df8ea2394",
                        "fullName": "公海客户",
                        "parentId": "0",
                        "enCode": "4"
                    },
                    {
                        "id": "bcf16235c3a845ee89b77de0dc2d4e5e",
                        "fullName": "预签约客户",
                        "parentId": "0",
                        "enCode": "3"
                    },
                    {
                        "id": "06daee5aa4ce4c4595c654e37b0c1b0c",
                        "fullName": "新增意向客户",
                        "parentId": "0",
                        "enCode": "2"
                    },
                    {
                        "id": "25c403a66a7a43cab1f85f105e5ba394",
                        "fullName": "商机",
                        "parentId": "0",
                        "enCode": "1"
                    }
                ],
                "id": "038d293fca544c86afa3f2bc65421fd7"
            },
            {
                "enCode": "shenpi",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "7",
                        "fullName": "其他费用",
                        "id": "98471961858e4138b36d949d524e8ccd"
                    },
                    {
                        "enCode": "6",
                        "fullName": "市场费用",
                        "id": "7befdd0b52094700a029379f7f464c5d"
                    },
                    {
                        "enCode": "5",
                        "fullName": "薪酬费用",
                        "id": "0b5d86db35764ae593918b0d5c0dacc8"
                    },
                    {
                        "enCode": "1",
                        "fullName": "人事费用",
                        "id": "176a35a32f6847db9d6699b35e96b662"
                    },
                    {
                        "enCode": "2",
                        "fullName": "维修费用",
                        "id": "dbe0f98ce3bf42839d84e60bbb2b8c66"
                    },
                    {
                        "enCode": "3",
                        "fullName": "IT费用",
                        "id": "6704c7aed0bd4c7fba91e830dd7c5ffc"
                    },
                    {
                        "enCode": "4",
                        "fullName": "安全费用",
                        "id": "6b485ce9e4ee4790812b7c010ddf5d7e"
                    }
                ],
                "id": "3e2d33e54d554b4b8a33fc41b93f8a2d"
            },
            {
                "enCode": "codeGeneration",
                "isTree": 1,
                "dictionaryList": [],
                "id": "188f465964644e0f81b8ffc756eefa92"
            },
            {
                "enCode": "system",
                "isTree": 1,
                "dictionaryList": [],
                "id": "afcc3a0952df4d1bad7d83cc8eb20fbd"
            },
            {
                "enCode": "sex",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "3",
                        "fullName": "保密",
                        "id": "00027e3ecaf54f008a5d7e25c6d4f4c3"
                    },
                    {
                        "enCode": "2",
                        "fullName": "女",
                        "id": "d06778318f894c4b914050601897effe"
                    },
                    {
                        "enCode": "1",
                        "fullName": "男",
                        "id": "84ff10b322d74ac3a653e3176724f909"
                    }
                ],
                "id": "963255a34ea64a2584c5d1ba269c1fe6"
            },
            {
                "enCode": "certificateType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "7",
                        "fullName": "其他",
                        "id": "7a35330c6df54467bdae7f9f1cafe80d"
                    },
                    {
                        "enCode": "6",
                        "fullName": "台胞证",
                        "id": "4307b5cd9b7545faac4f927bd091e48f"
                    },
                    {
                        "enCode": "5",
                        "fullName": "港澳身份证",
                        "id": "5ad73824ec844c9683c0bf0d78b6bf6a"
                    },
                    {
                        "enCode": "4",
                        "fullName": "军人证",
                        "id": "49edcc083777443b92fe87bc4fa7b7e6"
                    },
                    {
                        "enCode": "3",
                        "fullName": "护照",
                        "id": "dc96b486bd724586814b37168c97beae"
                    },
                    {
                        "enCode": "2",
                        "fullName": "驾照证",
                        "id": "9b5ae7aa433f4cdf8045d467956b9ea6"
                    },
                    {
                        "enCode": "1",
                        "fullName": "身份证",
                        "id": "a745d425adbb4321880817661cae8910"
                    }
                ],
                "id": "7866376d5f694d4d851c7164bd00ebfc"
            },
            {
                "enCode": "DataInterfaceType",
                "isTree": 1,
                "dictionaryList": [
                    {
                        "id": "616669616264970885",
                        "fullName": "资产管理",
                        "parentId": "0",
                        "enCode": "oa"
                    },
                    {
                        "id": "418334283560747077",
                        "fullName": "门户",
                        "parentId": "0",
                        "enCode": "3"
                    },
                    {
                        "id": "decbf5a18cf74bae90b98b3fbe04ec8a",
                        "fullName": "大屏图表",
                        "parentId": "0",
                        "enCode": "2"
                    },
                    {
                        "id": "30be5ef4e3074dd89385ad6b4540c63d",
                        "fullName": "默认",
                        "parentId": "0",
                        "enCode": "1"
                    }
                ],
                "id": "9c43287481364d348c0ea0d0f64b38be"
            },
            {
                "enCode": "Email",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "@yahoo.com",
                        "fullName": "@yahoo",
                        "id": "7b8bd3d6fde74402b7b7fee048d9fc93"
                    },
                    {
                        "enCode": "@aliyun.com",
                        "fullName": "@aliyun",
                        "id": "a9eb48bfaa434e4ca542a88c3bca9e1d"
                    },
                    {
                        "enCode": "@188.com",
                        "fullName": "@188",
                        "id": "343165982f9d4cef80cc11f98c9b3b03"
                    },
                    {
                        "enCode": "@wo.cn",
                        "fullName": "@wo",
                        "id": "30177502e07d479ca6825121716639d9"
                    },
                    {
                        "enCode": "@tom.com",
                        "fullName": "@tom",
                        "id": "531fc6f823214c46b5348002690580be"
                    },
                    {
                        "enCode": "@foxmail.com",
                        "fullName": "@foxmail",
                        "id": "b28702767ac5415e97dea6ed57b63039"
                    },
                    {
                        "enCode": "@2980.com",
                        "fullName": "@2980",
                        "id": "0d181414d82442a296473cac4fa357ec"
                    },
                    {
                        "enCode": "@263.net",
                        "fullName": "@263",
                        "id": "6f408478f4e84521b5529ff4cd03c26c"
                    },
                    {
                        "enCode": "@126.com",
                        "fullName": "@126",
                        "id": "4d3328b99ca54c2fbceeb3fa02c8ae35"
                    },
                    {
                        "enCode": "@outlook.com",
                        "fullName": "@outlook",
                        "id": "950e9a55f1db43ada961d8fb622d22d1"
                    },
                    {
                        "enCode": "@yeah.net",
                        "fullName": "@yeah",
                        "id": "3d1f4cf346524fdcbdee0b523b006eae"
                    },
                    {
                        "enCode": "@21cn.com",
                        "fullName": "@21cn",
                        "id": "ca46924df4a14a89bdec649262c646de"
                    },
                    {
                        "enCode": "@hotmail.com",
                        "fullName": "@hotmail",
                        "id": "fda8b268e91244eeb70435ed5f4676da"
                    },
                    {
                        "enCode": "@sohu.com",
                        "fullName": "@sohu",
                        "id": "a6312e14b9da4f3ba7d28630f3bfbbb0"
                    },
                    {
                        "enCode": "@sina.com",
                        "fullName": "@sina",
                        "id": "ecf667b572144b068788eaa2f5643376"
                    },
                    {
                        "enCode": "@qq.com",
                        "fullName": "@qq",
                        "id": "a1ba2c0db7d44bd7902ffc508e70e3bf"
                    },
                    {
                        "enCode": "@189.cn",
                        "fullName": "@189",
                        "id": "7dfaa025d5b949268082bfec2b4be2c8"
                    },
                    {
                        "enCode": "@139.com",
                        "fullName": "@139",
                        "id": "355f047f3e7540b8b55b168eec41ea5a"
                    },
                    {
                        "enCode": "@163.com",
                        "fullName": "@163",
                        "id": "d57025879a6f46fab1578bd325daa3a0"
                    }
                ],
                "id": "55d7666d74df4bb4b36aed08a3a5bad1"
            },
            {
                "enCode": "WFSettlementMethod",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "Other",
                        "fullName": "其他",
                        "id": "df251cf8fc464377b11650cbece4eb88"
                    },
                    {
                        "enCode": "Checksettlement",
                        "fullName": "支票结算",
                        "id": "ed7b686972904272af15dc096cf54c9d"
                    },
                    {
                        "enCode": "Transferpayment",
                        "fullName": "转账支付",
                        "id": "d44854b5cf304c41badd6afd5cd3f7dd"
                    },
                    {
                        "enCode": "Cashpayment",
                        "fullName": "现金支付",
                        "id": "4b33cdb3fda840e5998bc283e3bc37b5"
                    },
                    {
                        "enCode": "Onlinepayment",
                        "fullName": "网银支付",
                        "id": "06cf989b086a432c9e507e88117e37f5"
                    },
                    {
                        "enCode": "Oneyear'sknot",
                        "fullName": "一年结算",
                        "id": "3f626c31a97b48a7934603665ab22533"
                    },
                    {
                        "enCode": "Halfyearknot",
                        "fullName": "半年结算",
                        "id": "1b5fc8800abc468ca6af903149caa5a4"
                    },
                    {
                        "enCode": "Quarterlyknot",
                        "fullName": "季度结算",
                        "id": "2af8606d2e184e29a287b2774aa6d46a"
                    },
                    {
                        "enCode": "Monthlyknot",
                        "fullName": "月结",
                        "id": "3722d977cbb54806abe2fed651547d01"
                    }
                ],
                "id": "1143c18426014419a35aa1fa97685c9c"
            },
            {
                "enCode": "RoleType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "DefaultRole",
                        "fullName": "默认角色",
                        "id": "2876ae29ce5d4a41baa007f2977cfc85"
                    },
                    {
                        "enCode": "ApplicationRole",
                        "fullName": "业务角色",
                        "id": "7a4efb0cc3eb4afabf0c00990193ecd6"
                    },
                    {
                        "enCode": "SystemRole",
                        "fullName": "系统角色",
                        "id": "d59e91fd78194596812ac84a09943de8"
                    }
                ],
                "id": "4501f6f26a384757bce12d4c4b03342c"
            },
            {
                "enCode": "PositionType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "3",
                        "fullName": "工勤岗位",
                        "id": "31a6e874c82045c9aa598508d58ea586"
                    },
                    {
                        "enCode": "2",
                        "fullName": "专技岗位",
                        "id": "da85ed8ca991457bb6b019969ba4adc8"
                    },
                    {
                        "enCode": "1",
                        "fullName": "管理岗位",
                        "id": "eb8ff4dc825b4cbe8ca212757f35a1b0"
                    }
                ],
                "id": "dae93f2fd7cd4df999d32f8750fa6a1e"
            },
            {
                "enCode": "EnterpriseNature",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "5",
                        "fullName": "个体户",
                        "id": "2a3fa24dcace4a7aafeddb3d8c0ec65a"
                    },
                    {
                        "enCode": "4",
                        "fullName": "合伙企业",
                        "id": "cf5b616c15ed40c3bfbf59d4f6e8b7fb"
                    },
                    {
                        "enCode": "3",
                        "fullName": "集体企业",
                        "id": "82d9060f011a42dd8488a9feaaef376e"
                    },
                    {
                        "enCode": "2",
                        "fullName": "私营企业",
                        "id": "f4a0897d4f2d4e748a8f55ec7d85a82a"
                    },
                    {
                        "enCode": "1",
                        "fullName": "国有企业",
                        "id": "074a2706adc84abe8832b0b6a9f20229"
                    }
                ],
                "id": "9b542177a477488994ce09fff3c93901"
            },
            {
                "enCode": "Language",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "zh-TW",
                        "fullName": "繁体中文",
                        "id": "091f83fedfa3424d93f47c6845c342dc"
                    },
                    {
                        "enCode": "zh-CN",
                        "fullName": "简体中文",
                        "id": "097a648ca21943c8ab775d169b893725"
                    },
                    {
                        "enCode": "en-US",
                        "fullName": "English",
                        "id": "e73047ef52f44d11b5326bf340981ed1"
                    }
                ],
                "id": "dc6b2542d94b407cac61ec1d59592901"
            },
            {
                "enCode": "Comparison",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "4",
                        "fullName": "小于",
                        "id": "1ae0d5056618489f941edc485c2ae772"
                    },
                    {
                        "enCode": "1",
                        "fullName": "等于",
                        "id": "66fe49eb250c4f1e822685c9ef520cf8"
                    },
                    {
                        "enCode": "5",
                        "fullName": "小于等于",
                        "id": "6e72a28ad00b4698b6d58dead6e0b277"
                    },
                    {
                        "enCode": "7",
                        "fullName": "包含",
                        "id": "b6d9b734543d469c973759bea4fe4de0"
                    },
                    {
                        "enCode": "2",
                        "fullName": "大于",
                        "id": "d16ec06fe05d423b839ae341f5326053"
                    },
                    {
                        "enCode": "6",
                        "fullName": "不等于",
                        "id": "d8df5892e057411ca96f7ad5f7fe7099"
                    },
                    {
                        "enCode": "3",
                        "fullName": "大于等于",
                        "id": "f64035085f6f4f50864c3aab0fe42d99"
                    },
                    {
                        "enCode": "8",
                        "fullName": "不包含",
                        "id": "f913416000a14ed7b66726cc352219d9"
                    }
                ],
                "id": "237446e245ce403d8062995ea33711cf"
            },
            {
                "enCode": "IndustryType",
                "isTree": 1,
                "dictionaryList": [
                    {
                        "id": "00C3CCB3-47E1-4FA3-8F8E-3AF6EA6D808A",
                        "fullName": "文艺演出",
                        "parentId": "0",
                        "enCode": "文艺演出"
                    },
                    {
                        "id": "02C0A09B-1FD7-4B1A-BCD1-9F368AEE9066",
                        "fullName": "景区/公园/游乐",
                        "parentId": "0",
                        "enCode": "景区/公园/游乐"
                    },
                    {
                        "id": "06DBA3B3-B7E5-4631-9718-8B3160EE289C",
                        "fullName": "兴趣辅导/特长教育",
                        "parentId": "0",
                        "enCode": "兴趣辅导/特长教育"
                    },
                    {
                        "id": "07F0018A-897A-4D27-BBF5-9567D8F78A7B",
                        "fullName": "水/电/暖/气",
                        "parentId": "0",
                        "enCode": "水/电/暖/气"
                    },
                    {
                        "id": "0A5B92DD-3236-45E7-BD1B-CC92EE212135",
                        "fullName": "商务中介/外贸报关代理",
                        "parentId": "0",
                        "enCode": "商务中介/外贸报关代理"
                    },
                    {
                        "id": "0A5BECDA-4840-4DAA-94A6-3564B744B35E",
                        "fullName": "养生/按摩",
                        "parentId": "0",
                        "enCode": "养生/按摩"
                    },
                    {
                        "id": "0DB2D286-D299-4490-808B-A94A217E45DD",
                        "fullName": "政府",
                        "parentId": "0",
                        "enCode": "政府"
                    },
                    {
                        "id": "0F2C0CD7-D2ED-4119-8E06-80D928B6F6DD",
                        "fullName": "洗浴",
                        "parentId": "0",
                        "enCode": "洗浴"
                    },
                    {
                        "id": "0F3966B0-63A5-47B1-A88B-D8CDFE65563E",
                        "fullName": "货物运输/大宗物流",
                        "parentId": "0",
                        "enCode": "货物运输/大宗物流"
                    },
                    {
                        "id": "0fcc751d-9ceb-4767-8755-f0189b239468",
                        "fullName": "房产/装修/租售",
                        "parentId": "0",
                        "enCode": "房产/装修/租售"
                    },
                    {
                        "id": "128ACB5A-3619-4D41-86A6-9CC8CE44F0C9",
                        "fullName": "留学/移民",
                        "parentId": "0",
                        "enCode": "留学/移民"
                    },
                    {
                        "id": "1b82cfae-98f1-4b54-a3ae-1d1c6ad3f3f6",
                        "fullName": "手机数码/通讯服务",
                        "parentId": "0",
                        "enCode": "手机数码/通讯服务"
                    },
                    {
                        "id": "1CCFE5C7-9448-44C1-A7A0-206DA6095868",
                        "fullName": "维修/保养/改装",
                        "parentId": "0",
                        "enCode": "维修/保养/改装"
                    },
                    {
                        "id": "1E8757B0-9572-43B7-B5B0-CE15FDC9AAF2",
                        "fullName": "安防/监控器材",
                        "parentId": "0",
                        "enCode": "安防/监控器材"
                    },
                    {
                        "id": "2112FC39-0B0C-4D4D-87CB-A48843674083",
                        "fullName": "开发商",
                        "parentId": "0",
                        "enCode": "开发商"
                    },
                    {
                        "id": "22DF536C-B5FF-44BA-A53E-66DD314055E0",
                        "fullName": "客运/票务",
                        "parentId": "0",
                        "enCode": "客运/票务"
                    },
                    {
                        "id": "2716A909-1CAC-4A72-8749-28206D3326E0",
                        "fullName": "电影院",
                        "parentId": "0",
                        "enCode": "电影院"
                    },
                    {
                        "id": "2745E89F-AA85-49EB-943C-9037D7B73535",
                        "fullName": "家具/家居",
                        "parentId": "0",
                        "enCode": "家具/家居"
                    },
                    {
                        "id": "27c38cf2-dc0a-4449-ab87-7eb68f7e425b",
                        "fullName": "教育/出国",
                        "parentId": "0",
                        "enCode": "教育/出国"
                    },
                    {
                        "id": "27d8cf5a-22e8-4e05-b4d6-5684a564418a",
                        "fullName": "计算机/互联网",
                        "parentId": "0",
                        "enCode": "计算机/互联网"
                    },
                    {
                        "id": "28C182AE-BCD2-48DA-97FC-C45383A58C68",
                        "fullName": "农家乐/度假村",
                        "parentId": "0",
                        "enCode": "农家乐/度假村"
                    },
                    {
                        "id": "2FD33FE4-D636-4BC0-8A66-984D71387428",
                        "fullName": "职业培训/企业管理",
                        "parentId": "0",
                        "enCode": "职业培训/企业管理"
                    },
                    {
                        "id": "2FE19FDC-6308-441D-A10A-C1B2E33FBE87",
                        "fullName": "电子/IC/集成电路",
                        "parentId": "0",
                        "enCode": "电子/IC/集成电路"
                    },
                    {
                        "id": "3206B717-97FC-4249-8AAA-4743992C7538",
                        "fullName": "行业组织",
                        "parentId": "0",
                        "enCode": "行业组织"
                    },
                    {
                        "id": "33311B5D-5566-4E8B-A367-5BB23D32553B",
                        "fullName": "计算机硬件",
                        "parentId": "0",
                        "enCode": "计算机硬件"
                    },
                    {
                        "id": "33859881-6714-470C-9CAC-F2B4C34FB0A9",
                        "fullName": "中式美食",
                        "parentId": "0",
                        "enCode": "中式美食"
                    },
                    {
                        "id": "33A0777B-51C0-4A71-B99F-2CBB081FF93F",
                        "fullName": "小吃快餐",
                        "parentId": "0",
                        "enCode": "小吃快餐"
                    },
                    {
                        "id": "38B8C27D-7AEF-4B30-95A6-7B3472E12F99",
                        "fullName": "医疗/护理/卫生",
                        "parentId": "0",
                        "enCode": "医疗/护理/卫生"
                    },
                    {
                        "id": "39AEC832-D76F-4635-AF3C-1F249C22010B",
                        "fullName": "宠物",
                        "parentId": "0",
                        "enCode": "宠物"
                    },
                    {
                        "id": "3F9F5BF6-99B8-4342-933A-5A36528D9A3D",
                        "fullName": "户外/拓展",
                        "parentId": "0",
                        "enCode": "户外/拓展"
                    },
                    {
                        "id": "44338471-6e77-4dd0-899d-ea0355c03277",
                        "fullName": "美食餐饮",
                        "parentId": "0",
                        "enCode": "美食餐饮"
                    },
                    {
                        "id": "44D8F7B7-3BD7-4C0E-B694-0191E49568E8",
                        "fullName": "非赢利性组织",
                        "parentId": "0",
                        "enCode": "非赢利性组织"
                    },
                    {
                        "id": "48EA619A-6B6C-4185-9C9E-67A0AE4D15CF",
                        "fullName": "甜品饮品",
                        "parentId": "0",
                        "enCode": "甜品饮品"
                    },
                    {
                        "id": "4A2F85F0-C2CD-4F90-83CF-06ABD9A1975C",
                        "fullName": "工程机械/行业设备/仪器仪表",
                        "parentId": "0",
                        "enCode": "工程机械/行业设备/仪器仪表"
                    },
                    {
                        "id": "4B00983C-2994-446C-9D4D-8C7D20624D0A",
                        "fullName": "婚庆摄影",
                        "parentId": "0",
                        "enCode": "婚庆摄影"
                    },
                    {
                        "id": "4d885793-2fbd-49ce-9b0e-aa709a71b2d0",
                        "fullName": "旅游/出行",
                        "parentId": "0",
                        "enCode": "旅游/出行"
                    },
                    {
                        "id": "4EF041F9-A5DA-4120-AC7C-95468EACBF1F",
                        "fullName": "食品饮料",
                        "parentId": "0",
                        "enCode": "食品饮料"
                    },
                    {
                        "id": "52D968DF-1B38-4FE4-AC9E-D9958A9D3DD8",
                        "fullName": "网络游戏",
                        "parentId": "0",
                        "enCode": "网络游戏"
                    },
                    {
                        "id": "548323F5-70A1-4979-9EE7-F30642B0821D",
                        "fullName": "房屋中介",
                        "parentId": "0",
                        "enCode": "房屋中介"
                    },
                    {
                        "id": "5996617D-23EC-4691-B119-C3270ED1645F",
                        "fullName": "互联网服务",
                        "parentId": "0",
                        "enCode": "互联网服务"
                    },
                    {
                        "id": "59B7E4C7-B888-4DA1-8A68-E23F0E25E5C3",
                        "fullName": "咖啡厅/茶馆",
                        "parentId": "0",
                        "enCode": "咖啡厅/茶馆"
                    },
                    {
                        "id": "5bf517bb-f45b-491b-93c0-25849ffa0a5c",
                        "fullName": "金融/保险",
                        "parentId": "0",
                        "enCode": "金融/保险"
                    },
                    {
                        "id": "5BFA882E-B4DB-43D5-9950-1AAAB021F0BA",
                        "fullName": "点卡/虚拟币",
                        "parentId": "0",
                        "enCode": "点卡/虚拟币"
                    },
                    {
                        "id": "5D1066AB-F366-42D0-B5BB-4BDB86738C3F",
                        "fullName": "公关/市场推广",
                        "parentId": "0",
                        "enCode": "公关/市场推广"
                    },
                    {
                        "id": "5E43C907-A735-45AD-81E4-DA078F49D27C",
                        "fullName": "公共事业",
                        "parentId": "0",
                        "enCode": "公共事业"
                    },
                    {
                        "id": "5E51C077-025C-40CC-84D3-40DD426AD19B",
                        "fullName": "能源/电力/水利",
                        "parentId": "0",
                        "enCode": "能源/电力/水利"
                    },
                    {
                        "id": "614ecab4-845f-4cbc-9ff7-a9968aca6eeb",
                        "fullName": "工业/工业品",
                        "parentId": "0",
                        "enCode": "工业/工业品"
                    },
                    {
                        "id": "619A02B0-1FC7-4899-9E35-21179AD897B3",
                        "fullName": "新闻媒体/报刊杂志",
                        "parentId": "0",
                        "enCode": "新闻媒体/报刊杂志"
                    },
                    {
                        "id": "6454738D-DCDF-4A3F-AA4A-4E88AE3C04BB",
                        "fullName": "加盟招商",
                        "parentId": "0",
                        "enCode": "加盟招商"
                    },
                    {
                        "id": "689DCC5B-5CCC-402F-8054-83D1EE93BE7B",
                        "fullName": "工商注册/代理代办",
                        "parentId": "0",
                        "enCode": "工商注册/代理代办"
                    },
                    {
                        "id": "68A6864E-D2D5-4547-AF89-374E511ECB5F",
                        "fullName": "固话/宽带",
                        "parentId": "0",
                        "enCode": "固话/宽带"
                    },
                    {
                        "id": "6FEB335E-C083-41B7-B094-69A5C837EE7E",
                        "fullName": "洗衣房",
                        "parentId": "0",
                        "enCode": "洗衣房"
                    },
                    {
                        "id": "74E80DA6-85AA-4595-9A4A-DEAFA4B78EBA",
                        "fullName": "美容/护理",
                        "parentId": "0",
                        "enCode": "美容/护理"
                    },
                    {
                        "id": "7592795B-5241-4ADA-8A1F-22192DF432CF",
                        "fullName": "文化/广电/影视",
                        "parentId": "0",
                        "enCode": "文化/广电/影视"
                    },
                    {
                        "id": "75f1eb60-1258-4747-bfbc-ac66c1724b49",
                        "fullName": "商业服务",
                        "parentId": "0",
                        "enCode": "商业服务"
                    },
                    {
                        "id": "76A68CC8-7C7C-4E5A-8270-2C937CF5207D",
                        "fullName": "会展服务",
                        "parentId": "0",
                        "enCode": "会展服务"
                    },
                    {
                        "id": "7A5CCD49-9C2E-45D4-A400-CC55874BD591",
                        "fullName": "鲜花速递",
                        "parentId": "0",
                        "enCode": "鲜花速递"
                    },
                    {
                        "id": "7c7d4ae2-455c-439b-b8a8-eb484014aa75",
                        "fullName": "汽车/汽配/租赁",
                        "parentId": "0",
                        "enCode": "汽车/汽配/租赁"
                    },
                    {
                        "id": "7d7dd051-6e57-499b-ac88-c019d7c663da",
                        "fullName": "医疗/整形整容",
                        "parentId": "0",
                        "enCode": "医疗/整形整容"
                    },
                    {
                        "id": "81499648-7139-4C49-8E73-E68085B07524",
                        "fullName": "话费充值",
                        "parentId": "0",
                        "enCode": "话费充值"
                    },
                    {
                        "id": "84158383-A0D0-45B5-ADF4-8C7AC1A6E042",
                        "fullName": "奢侈品/收藏品",
                        "parentId": "0",
                        "enCode": "奢侈品/收藏品"
                    },
                    {
                        "id": "85D701EB-9B95-42CC-99D0-C0026DB5EF4B",
                        "fullName": "旅行社",
                        "parentId": "0",
                        "enCode": "旅行社"
                    },
                    {
                        "id": "85F898D1-D467-4DAF-8846-A3307A2EEA53",
                        "fullName": "印刷/包装/平面设计",
                        "parentId": "0",
                        "enCode": "印刷/包装/平面设计"
                    },
                    {
                        "id": "895BF6CB-479D-4A3C-9FDE-06CDEA600464",
                        "fullName": "西餐/日韩料理/异国美食",
                        "parentId": "0",
                        "enCode": "西餐/日韩料理/异国美食"
                    },
                    {
                        "id": "8CFC9EED-68FD-46B8-B67B-58AEFD9F45AB",
                        "fullName": "电信增值业务",
                        "parentId": "0",
                        "enCode": "电信增值业务"
                    },
                    {
                        "id": "8e63a940-4e88-461f-b80d-fd3db065bfef",
                        "fullName": "生活服务",
                        "parentId": "0",
                        "enCode": "生活服务"
                    },
                    {
                        "id": "90F0F95F-007B-400D-8146-92665AC3B515",
                        "fullName": "搬家/搬运",
                        "parentId": "0",
                        "enCode": "搬家/搬运"
                    },
                    {
                        "id": "926023bb-0b74-4bca-8d67-5d7657d0bca7",
                        "fullName": "媒体/广告/出版",
                        "parentId": "0",
                        "enCode": "媒体/广告/出版"
                    },
                    {
                        "id": "94D20938-8724-40CE-806A-FB61DDAB3FBC",
                        "fullName": "投资/证券",
                        "parentId": "0",
                        "enCode": "投资/证券"
                    },
                    {
                        "id": "97337AB5-E9FF-41E6-B963-0A4768B32611",
                        "fullName": "会馆会所",
                        "parentId": "0",
                        "enCode": "会馆会所"
                    },
                    {
                        "id": "9C7AA17D-4682-40C9-A9B6-AC14EE7D8A54",
                        "fullName": "典当/抵押/信贷",
                        "parentId": "0",
                        "enCode": "典当/抵押/信贷"
                    },
                    {
                        "id": "9D8266BD-10A3-4A88-8131-51D2C57C3519",
                        "fullName": "工艺品/玩具/珠宝",
                        "parentId": "0",
                        "enCode": "工艺品/玩具/珠宝"
                    },
                    {
                        "id": "A99C5405-DC2A-440D-A5E3-6B0A8C6026DB",
                        "fullName": "宾馆/酒店",
                        "parentId": "0",
                        "enCode": "宾馆/酒店"
                    },
                    {
                        "id": "ABA8D38C-7B37-4C32-A7C9-4DBB33A4B413",
                        "fullName": "环保/废料回收",
                        "parentId": "0",
                        "enCode": "环保/废料回收"
                    },
                    {
                        "id": "ABE7D855-FA7A-4FF3-B39A-B4999B99C59E",
                        "fullName": "计算机服务/维修",
                        "parentId": "0",
                        "enCode": "计算机服务/维修"
                    },
                    {
                        "id": "ADF3DA95-2674-4830-BD9B-14043451C09F",
                        "fullName": "化工/肥料/农药",
                        "parentId": "0",
                        "enCode": "化工/肥料/农药"
                    },
                    {
                        "id": "AEF24D19-1B7A-4ADB-85FF-7B974C8B0297",
                        "fullName": "电工/电气/开关/线缆",
                        "parentId": "0",
                        "enCode": "电工/电气/开关/线缆"
                    },
                    {
                        "id": "AF6172C8-DA14-419D-84F9-6CB1D1A5B231",
                        "fullName": "五金/工具",
                        "parentId": "0",
                        "enCode": "五金/工具"
                    },
                    {
                        "id": "B1F6AE91-F128-4E3D-9D5D-4FF08420682D",
                        "fullName": "化妆品/护肤品",
                        "parentId": "0",
                        "enCode": "化妆品/护肤品"
                    },
                    {
                        "id": "B2630C4A-ED8C-4147-BAED-5BD0BCA4E5F1",
                        "fullName": "家政服务",
                        "parentId": "0",
                        "enCode": "家政服务"
                    },
                    {
                        "id": "B4A01EC3-8EB3-479D-AB60-FBB2A9E13BA8",
                        "fullName": "建材/工程",
                        "parentId": "0",
                        "enCode": "建材/工程"
                    },
                    {
                        "id": "b5dc651f-1125-4c6c-8114-24e2ef85ed73",
                        "fullName": "美容/保健",
                        "parentId": "0",
                        "enCode": "美容/保健"
                    },
                    {
                        "id": "B5F754A5-9598-41E1-AA17-B6223DC144BE",
                        "fullName": "人力资源/财会",
                        "parentId": "0",
                        "enCode": "人力资源/财会"
                    },
                    {
                        "id": "BCA3C4EB-9545-4A2D-94CF-CFFADC2B4EE3",
                        "fullName": "图书/音像",
                        "parentId": "0",
                        "enCode": "图书/音像"
                    },
                    {
                        "id": "BCAC8366-A51D-4595-B50F-59DBC552CECD",
                        "fullName": "照明工业",
                        "parentId": "0",
                        "enCode": "照明工业"
                    },
                    {
                        "id": "C48852B0-CE48-49C3-82FB-3267F513E91B",
                        "fullName": "服装服饰",
                        "parentId": "0",
                        "enCode": "服装服饰"
                    },
                    {
                        "id": "C4BD8743-ADCF-42EC-901D-44485F1B242A",
                        "fullName": "美发",
                        "parentId": "0",
                        "enCode": "美发"
                    },
                    {
                        "id": "c6edee1e-ae57-4b1e-84e5-4837e24978b8",
                        "fullName": "政府机关/社会组织",
                        "parentId": "0",
                        "enCode": "政府机关/社会组织"
                    },
                    {
                        "id": "C7469619-5331-42D8-B625-2D75BA69A59C",
                        "fullName": "银行/保险",
                        "parentId": "0",
                        "enCode": "银行/保险"
                    },
                    {
                        "id": "CC83B3E0-4E70-4910-B39D-4758A89C858F",
                        "fullName": "4S店/汽车经销商",
                        "parentId": "0",
                        "enCode": "4S店/汽车经销商"
                    },
                    {
                        "id": "CEDE4DDD-B946-46E7-87CF-59A393DCED36",
                        "fullName": "采掘/冶炼/金属",
                        "parentId": "0",
                        "enCode": "采掘/冶炼/金属"
                    },
                    {
                        "id": "D13F172E-080E-4362-862D-088BE89C0B65",
                        "fullName": "大中小学",
                        "parentId": "0",
                        "enCode": "大中小学"
                    },
                    {
                        "id": "D416CE11-E6A5-4778-AB42-3BDB6262D6AE",
                        "fullName": "移动通讯",
                        "parentId": "0",
                        "enCode": "移动通讯"
                    },
                    {
                        "id": "D4427F85-09BD-4572-BEC0-5297DB690184",
                        "fullName": "医疗整形",
                        "parentId": "0",
                        "enCode": "医疗整形"
                    },
                    {
                        "id": "D4C26AA6-8B40-4DD5-BE0B-4EB027958184",
                        "fullName": "计算机软件",
                        "parentId": "0",
                        "enCode": "计算机软件"
                    },
                    {
                        "id": "D967E161-32D3-4A32-9F99-86A69ECA894E",
                        "fullName": "其他",
                        "parentId": "0",
                        "enCode": "其他"
                    },
                    {
                        "id": "d9b969ed-9122-4861-9035-c631acf99378",
                        "fullName": "休闲娱乐",
                        "parentId": "0",
                        "enCode": "休闲娱乐"
                    },
                    {
                        "id": "DF326EC3-AD05-41E0-B4D3-3382748C700C",
                        "fullName": "生活用品",
                        "parentId": "0",
                        "enCode": "生活用品"
                    },
                    {
                        "id": "E6C0D972-0A2A-48B6-85E8-55F80200C503",
                        "fullName": "数码产品",
                        "parentId": "0",
                        "enCode": "数码产品"
                    },
                    {
                        "id": "E86D955D-8E32-4D9E-AF66-87E0D30C5555",
                        "fullName": "楼盘/物业",
                        "parentId": "0",
                        "enCode": "楼盘/物业"
                    },
                    {
                        "id": "E8802412-74A7-42BB-B892-F8AAAB779783",
                        "fullName": "室内设计/装潢",
                        "parentId": "0",
                        "enCode": "室内设计/装潢"
                    },
                    {
                        "id": "EA8E6EF5-76CA-4E2C-B2B0-D6BAF4ED7F08",
                        "fullName": "语言培训",
                        "parentId": "0",
                        "enCode": "语言培训"
                    },
                    {
                        "id": "EB53529F-71C0-4136-A27B-73A533434D87",
                        "fullName": "外包服务",
                        "parentId": "0",
                        "enCode": "外包服务"
                    },
                    {
                        "id": "EC84E1BB-4DEB-4E71-BEA0-76FB939DFD34",
                        "fullName": "烟酒",
                        "parentId": "0",
                        "enCode": "烟酒"
                    },
                    {
                        "id": "ECB00494-3C58-43FF-BA93-8505FB568AB5",
                        "fullName": "快递/物流/速运",
                        "parentId": "0",
                        "enCode": "快递/物流/速运"
                    },
                    {
                        "id": "EECBF1B0-C175-4BAB-A189-5E7DE1632F23",
                        "fullName": "保健品",
                        "parentId": "0",
                        "enCode": "保健品"
                    },
                    {
                        "id": "F18D5175-4200-47C4-B299-3AFBF8216AF9",
                        "fullName": "广告",
                        "parentId": "0",
                        "enCode": "广告"
                    },
                    {
                        "id": "f2acc9ef-ce0d-4ef1-a17e-c0cc32c7e678",
                        "fullName": "日用杂货/家电",
                        "parentId": "0",
                        "enCode": "日用杂货/家电"
                    },
                    {
                        "id": "F463A7BE-F5BC-4C9F-8A89-F744C1E1A88E",
                        "fullName": "制药/生物",
                        "parentId": "0",
                        "enCode": "制药/生物"
                    },
                    {
                        "id": "F61115F6-A7A1-4B04-858E-E976721AAF30",
                        "fullName": "办公用品及设备",
                        "parentId": "0",
                        "enCode": "办公用品及设备"
                    },
                    {
                        "id": "F6D5FE02-A217-4F90-A820-D5BD710B4FF7",
                        "fullName": "医疗设备/器械",
                        "parentId": "0",
                        "enCode": "医疗设备/器械"
                    },
                    {
                        "id": "FB03EBBE-AE85-4394-91EF-DB6D6DC0BBCB",
                        "fullName": "孕前/婴幼儿教育",
                        "parentId": "0",
                        "enCode": "孕前/婴幼儿教育"
                    },
                    {
                        "id": "FBA08D44-765D-4462-9782-E4AADB4E8AE3",
                        "fullName": "租车/代驾",
                        "parentId": "0",
                        "enCode": "租车/代驾"
                    },
                    {
                        "id": "FBE677DD-AB1D-43D0-AF5F-460B2610F58A",
                        "fullName": "咨询/顾问",
                        "parentId": "0",
                        "enCode": "咨询/顾问"
                    },
                    {
                        "id": "fc4a08ce-9804-4cb1-a4c6-9440ca614b5d",
                        "fullName": "鞋服/工艺品/奢侈品",
                        "parentId": "0",
                        "enCode": "鞋服/工艺品/奢侈品"
                    },
                    {
                        "id": "FCAD0103-FAA2-4D5C-96AA-D113F307225D",
                        "fullName": "家电/小家电/厨卫用具",
                        "parentId": "0",
                        "enCode": "家电/小家电/厨卫用具"
                    },
                    {
                        "id": "FD32473F-9151-4A9F-85FF-B1FE95D5B9D4",
                        "fullName": "维修/疏通",
                        "parentId": "0",
                        "enCode": "维修/疏通"
                    },
                    {
                        "id": "FE7F43BF-75C7-492B-8898-72A40FDDBB95",
                        "fullName": "KTV/酒吧/夜店",
                        "parentId": "0",
                        "enCode": "KTV/酒吧/夜店"
                    }
                ],
                "id": "d59a3cf65f9847dbb08be449e3feae16"
            },
            {
                "enCode": "OrganizeType",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "department",
                        "fullName": "部门",
                        "id": "a03a50843fac42fe971d0c3f3a1d4d45"
                    },
                    {
                        "enCode": "company",
                        "fullName": "公司",
                        "id": "f043454be068470180756c50596e47dd"
                    }
                ],
                "id": "9aba44dfc8dc481a9346b9ce38a0735e"
            },
            {
                "enCode": "Nation",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "土族",
                        "fullName": "土族",
                        "id": "9828f30dd8b5488a968ac048836dcb77"
                    },
                    {
                        "enCode": "门巴族",
                        "fullName": "门巴族",
                        "id": "43347e3055f2498d83e7201be5a243f8"
                    },
                    {
                        "enCode": "高山族",
                        "fullName": "高山族",
                        "id": "49d97d47a68e4787b8e46ae41fc2e9fa"
                    },
                    {
                        "enCode": "仫佬族",
                        "fullName": "仫佬族",
                        "id": "5b6759fbcd9247f4b00a1cafb8e39c1b"
                    },
                    {
                        "enCode": "基诺族",
                        "fullName": "基诺族",
                        "id": "696babc2ceaf4f5bae3705e2b7e6dee9"
                    },
                    {
                        "enCode": "保安族",
                        "fullName": "保安族",
                        "id": "7584cef8439241a6a06121f655225715"
                    },
                    {
                        "enCode": "塔塔尔族",
                        "fullName": "塔塔尔族",
                        "id": "7eee315f771a4282838e168603315eb1"
                    },
                    {
                        "enCode": "柯尔克孜族",
                        "fullName": "柯尔克孜族",
                        "id": "803a14a1ba33425da9d3141ffee7f203"
                    },
                    {
                        "enCode": "独龙族",
                        "fullName": "独龙族",
                        "id": "8a9f47d9f51e454fb36fce55fb7a63a6"
                    },
                    {
                        "enCode": "羌族",
                        "fullName": "羌族",
                        "id": "907cbdba92344967a148a374528dee75"
                    },
                    {
                        "enCode": "佤族",
                        "fullName": "佤族",
                        "id": "908f94c264a64c31a1fecccb811179c6"
                    },
                    {
                        "enCode": "锡伯族",
                        "fullName": "锡伯族",
                        "id": "059275f8dc94475d82efd6780d2f67b6"
                    },
                    {
                        "enCode": "阿昌族",
                        "fullName": "阿昌族",
                        "id": "a13874e5d3924b7e8270f1487cd04fe1"
                    },
                    {
                        "enCode": "乌孜别克族",
                        "fullName": "乌孜别克族",
                        "id": "b0f9f27b34d54ccea3bb5c7e4b5e5f34"
                    },
                    {
                        "enCode": "德昂族",
                        "fullName": "德昂族",
                        "id": "b16664b364414793b310b4cc56dacd5a"
                    },
                    {
                        "enCode": "珞巴族",
                        "fullName": "珞巴族",
                        "id": "c7199f50afaa46069be39644a7b602c1"
                    },
                    {
                        "enCode": "布朗族",
                        "fullName": "布朗族",
                        "id": "d68614ec2be944b0b48be4c5edb9a83f"
                    },
                    {
                        "enCode": "纳西族",
                        "fullName": "纳西族",
                        "id": "e669a5d1545e4c39805e22da6df6dfd0"
                    },
                    {
                        "enCode": "赫哲族",
                        "fullName": "赫哲族",
                        "id": "f5ebba6dbf47453687b6a10694694aaf"
                    },
                    {
                        "enCode": "鄂伦春族",
                        "fullName": "鄂伦春族",
                        "id": "f8be14c58efe48d5adc66cbea176bfcd"
                    },
                    {
                        "enCode": "塔吉克族",
                        "fullName": "塔吉克族",
                        "id": "fb096124a2564dcc84eafc92b771e667"
                    },
                    {
                        "enCode": "水族",
                        "fullName": "水族",
                        "id": "3b6c150a092e44bda357cfb1a0d51461"
                    },
                    {
                        "enCode": "达斡尔族",
                        "fullName": "达斡尔族",
                        "id": "01ba59c5d9a44d71ab0284cb48525813"
                    },
                    {
                        "enCode": "俄罗斯族",
                        "fullName": "俄罗斯族",
                        "id": "07f10a73a43942969e7b75a6d14c4e17"
                    },
                    {
                        "enCode": "景颇族",
                        "fullName": "景颇族",
                        "id": "0bb8dce3cd934b5da4c31be379fdb962"
                    },
                    {
                        "enCode": "京族",
                        "fullName": "京族",
                        "id": "12f83c695e104710933f9d713ac68b32"
                    },
                    {
                        "enCode": "普米族",
                        "fullName": "普米族",
                        "id": "1b6da0db9c8f4054ac5225d32ac2607a"
                    },
                    {
                        "enCode": "撒拉族",
                        "fullName": "撒拉族",
                        "id": "1db9a7c7c88a4dc7a5f61ae3aed723ae"
                    },
                    {
                        "enCode": "裕固族",
                        "fullName": "裕固族",
                        "id": "25b952c507b148f98d50762a2e90419a"
                    },
                    {
                        "enCode": "毛南族",
                        "fullName": "毛南族",
                        "id": "287ac847ef2a4f4b9198300477e8c4d9"
                    },
                    {
                        "enCode": "鄂温克族",
                        "fullName": "鄂温克族",
                        "id": "2aa6c64c8875401fa2ab862e3ac6f0e2"
                    },
                    {
                        "enCode": "怒族",
                        "fullName": "怒族",
                        "id": "33cf9894fe3f415086796946acde9a21"
                    },
                    {
                        "enCode": "哈萨克族",
                        "fullName": "哈萨克族",
                        "id": "1d53970d6da94c6ca648311399122a02"
                    },
                    {
                        "enCode": "彝族",
                        "fullName": "彝族",
                        "id": "40472c04faa9498bba7b4e11851cf6df"
                    },
                    {
                        "enCode": "汉族",
                        "fullName": "汉族",
                        "id": "54bad287aa084f81b40c6bc35c7f2545"
                    },
                    {
                        "enCode": "回族",
                        "fullName": "回族",
                        "id": "5509d55ae8ee43bc8c25ad93eef90d98"
                    },
                    {
                        "enCode": "壮族",
                        "fullName": "壮族",
                        "id": "113779bb677d4021b54b10eb8c29145a"
                    },
                    {
                        "enCode": "傣族",
                        "fullName": "傣族",
                        "id": "dd961d9d30a5492682a462bd282e8158"
                    },
                    {
                        "enCode": "苗族",
                        "fullName": "苗族",
                        "id": "588b2b6c0fa349a79992d011c7c47a62"
                    },
                    {
                        "enCode": "黎族",
                        "fullName": "黎族",
                        "id": "134d1bdae57e4d6c898e0d2ee72f2164"
                    },
                    {
                        "enCode": "傈僳族",
                        "fullName": "傈僳族",
                        "id": "bcf56b39e6bd4e31ae1621f839fa8b6c"
                    },
                    {
                        "enCode": "瑶族",
                        "fullName": "瑶族",
                        "id": "37bf7db5a5c94dc6a3485ccccb1c6447"
                    },
                    {
                        "enCode": "蒙古族",
                        "fullName": "蒙古族",
                        "id": "b12b07c35a1f4591b64015c012aa0129"
                    },
                    {
                        "enCode": "东乡族",
                        "fullName": "东乡族",
                        "id": "1c8bc07c65214f7ca842d8504cea4067"
                    },
                    {
                        "enCode": "土家族",
                        "fullName": "土家族",
                        "id": "ad4039ce0d4e4017ae7c917c53ffbcc8"
                    },
                    {
                        "enCode": "畲族",
                        "fullName": "畲族",
                        "id": "9d9c76c1bbb44fea9402e1c90801191f"
                    },
                    {
                        "enCode": "布依族",
                        "fullName": "布依族",
                        "id": "998ce700fa2449b9a34ff07097e0798b"
                    },
                    {
                        "enCode": "满族",
                        "fullName": "满族",
                        "id": "61fe8b6156a743d685d0509226e7a70b"
                    },
                    {
                        "enCode": "白族",
                        "fullName": "白族",
                        "id": "93667ec1069c492082fb60dde3ce8d1c"
                    },
                    {
                        "enCode": "朝鲜族",
                        "fullName": "朝鲜族",
                        "id": "20720625593343e39676654e73a6a39a"
                    },
                    {
                        "enCode": "拉祜族",
                        "fullName": "拉祜族",
                        "id": "65704bad82ac4984bb93968333393590"
                    },
                    {
                        "enCode": "哈尼族",
                        "fullName": "哈尼族",
                        "id": "2835dcf61cf04a0e97bc4b117b08e3cb"
                    },
                    {
                        "enCode": "仡佬族",
                        "fullName": "仡佬族",
                        "id": "84992f0eab4742ea81a541e2e8789cab"
                    },
                    {
                        "enCode": "藏族",
                        "fullName": "藏族",
                        "id": "828eaef66cb14adda9c5c1997dd7bbe2"
                    },
                    {
                        "enCode": "侗族",
                        "fullName": "侗族",
                        "id": "3676319f3e0b444e9f754a1691de696c"
                    },
                    {
                        "enCode": "维吾尔族",
                        "fullName": "维吾尔族",
                        "id": "7501989f1ba94623b44159c9d630858a"
                    }
                ],
                "id": "b6cd65a763fa45eb9fe98e5057693e40"
            },
            {
                "enCode": "Education",
                "isTree": 0,
                "dictionaryList": [
                    {
                        "enCode": "7",
                        "fullName": "研究生",
                        "id": "1128f7a50cc64c6db6eed4696fdbee80"
                    },
                    {
                        "enCode": "1",
                        "fullName": "小学",
                        "id": "3547c4e289194e92854fec4cd84836b2"
                    },
                    {
                        "enCode": "3",
                        "fullName": "高中",
                        "id": "6410a712cd144e2c8ce5e0f153d88c0d"
                    },
                    {
                        "enCode": "2",
                        "fullName": "初中",
                        "id": "8eea678c942145f99d7878ace0d8657e"
                    },
                    {
                        "enCode": "5",
                        "fullName": "高职",
                        "id": "9b78f178da8448b298bc534e229386b5"
                    },
                    {
                        "enCode": "8",
                        "fullName": "博士及以上",
                        "id": "a38b8d5c43294b7e97c04d06a7e904ff"
                    },
                    {
                        "enCode": "6",
                        "fullName": "本科",
                        "id": "b620b397f3ec44f083b0df9fbc2f3ba7"
                    },
                    {
                        "enCode": "4",
                        "fullName": "中专",
                        "id": "df721d25cb9b4502afb4fe9796f71ac7"
                    }
                ],
                "id": "6a6d6fb541b742fbae7e8888528baa16"
            }
        ]
    }
});
}
// 获取字典分类下拉框(项目上级)
export function getDictionaryDataTypeSelector(typeId, isTree, id = '0') {
  return defHttp.get({ url: Api.Prefix + `/${typeId}/Selector/${id || '0'}`, params: { isTree } });
}
// 获取字典数据下拉框列表
export function getDictionaryDataSelector(typeId) {
  return defHttp.get({ url: Api.Prefix + `/${typeId}/Data/Selector` });
}
// 添加数据字典
export function createDictionaryData(data) {
  return defHttp.post({ url: Api.Prefix, data });
}
// 修改数据字典
export function updateDictionaryData(data) {
  return defHttp.put({ url: Api.Prefix + '/' + data.id, data });
}
// 获取数据字典信息
export function getDictionaryDataInfo(id) {
  return defHttp.get({ url: Api.Prefix + `/${id}/Info` });
}
// 删除数据字典信息
export function delDictionaryData(id) {
  return defHttp.delete({ url: Api.Prefix + '/' + id });
}
// 导出数据字典数据
export function exportData(id) {
  return defHttp.get({ url: Api.Prefix + `/${id}/Actions/Export` });
}
