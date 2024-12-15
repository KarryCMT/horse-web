import { defHttp } from '@/utils/http/axios';

enum Api {
  Prefix = '/api/system/SysConfig',
  SynPrefix = '/api/system/SynThirdInfo',
}

// 获取系统配置
export function getSysConfig() {
  return Promise.resolve({
    "code": 200,
    "msg": "Success",
    "data": {
        "sysName": "软件开发平台 - 产品体验",
        "sysDescription": "如果您是企业，是否感到找一款真正适合您的现成软件不容易，而定制开发太贵，自己开发又没有专业人才； 如果您是软件公司，是否感到开发人员工资太高，留住人才太难，人才走了，产品完了，就算开发好的产品，个性化修改太累并易导致BUG； 如果您是个人，是否有将自己多年管理经验和突然间的创意变成软件带来收益的冲动。引迈软件开发平台可以帮助你们解决这一切。引迈软件开发平台是一款配置型软件快速开发框架，一次开发，同时生成WEB、CS客户端、移动APP客户端、微信端。",
        "sysVersion": "V5.1.4",
        "copyright": "Copyright @ 2024  引迈信息技术有限公司版权所有",
        "companyName": "引迈信息技术有限公司",
        "companyCode": "yinmaisoft",
        "companyAddress": "上海市青浦区",
        "companyContacts": "黄林",
        "companyTelePhone": "021-88888888",
        "companyEmail": "support@yinmaisoft.com",
        "loginIcon": null,
        "navigationIcon": null,
        "logoIcon": null,
        "appIcon": null,
        "singleLogin": 2,
        "passwordErrorsNumber": 3,
        "lockType": 1,
        "lockTime": 10,
        "enableVerificationCode": 0,
        "verificationCodeNumber": 3,
        "tokenTimeout": "900",
        "lastLoginTimeSwitch": 0,
        "whitelistSwitch": 0,
        "whiteListIp": "192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5,192.168.0.6",
        "emailPop3Host": "pop3.sina.com.cn",
        "emailPop3Port": "110",
        "emailSmtpHost": "",
        "emailSmtpPort": "587",
        "emailSenderName": "JNPF软件开发",
        "emailAccount": "support@yinmaisoft.com",
        "emailPassword": "333",
        "emailSsl": null,
        "registerKey": "",
        "lastLoginTime": "1",
        "pageSize": "30",
        "sysTheme": "1",
        "isLog": "1",
        "aliAccessKey": null,
        "aliSecret": null,
        "tencentSecretId": null,
        "tencentSecretKey": null,
        "tencentAppId": null,
        "tencentAppKey": null,
        "qyhCorpId": "",
        "qyhAgentId": "",
        "qyhAgentSecret": "",
        "qyhCorpSecret": "",
        "qyhIsSynOrg": 0,
        "qyhIsSynUser": 0,
        "dingSynAppKey": "",
        "dingSynAppSecret": "",
        "dingAgentId": "1175831637",
        "dingSynIsSynOrg": 0,
        "dingSynIsSynUser": 0,
        "linkTime": "24",
        "isClick": 0,
        "unClickNum": 1,
        "passwordIsUpdatedRegularly": 0,
        "updateCycle": 2,
        "updateInAdvance": 2,
        "passwordStrengthLimit": 1,
        "passwordLengthMin": 1,
        "passwordLengthMinNumber": 6,
        "containsNumbers": 1,
        "includeLowercaseLetters": 1,
        "includeUppercaseLetters": 1,
        "containsCharacters": 1,
        "disableOldPassword": 1,
        "disableTheNumberOfOldPasswords": 3,
        "mandatoryModificationOfInitialPassword": 0,
        "title": "JNPF快速开发平台",
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
});
}
// 更新系统配置
export function update(data) {
  return defHttp.put({ url: Api.Prefix, data });
}
// 测试企业微信配置的连接
export function testQy(data, type) {
  return defHttp.post({ url: Api.Prefix + '/' + type + '/testQyWebChatConnect', data });
}
// 测试企业微信配置的连接
export function testDing(data) {
  return defHttp.post({ url: Api.Prefix + '/testDingTalkConnect', data });
}
// 获取系统管理员
export function getAdminList() {
  return defHttp.get({ url: Api.Prefix + '/getAdminList' });
}
// 设置系统管理员
export function setAdminList(data) {
  return defHttp.put({ url: Api.Prefix + '/setAdminList', data });
}
//本地所有组织信息(包含公司和部门)同步到钉钉
export function synAllOrganizeSysToDing(type) {
  return defHttp.get({ url: Api.SynPrefix + '/synAllOrganizeSysToDing?type=' + type });
}
// 本地所有用户信息同步到钉钉
export function synAllUserSysToDing(type) {
  return defHttp.get({ url: Api.SynPrefix + '/synAllUserSysToDing?type=' + type });
}
// 本地所有组织信息(包含公司和部门)同步到企业微信
export function synAllOrganizeSysToQy(type) {
  return defHttp.get({ url: Api.SynPrefix + '/synAllOrganizeSysToQy?type=' + type });
}
// 本地所有用户信息同步到企业微信
export function synAllUserSysToQy(type) {
  return defHttp.get({ url: Api.SynPrefix + '/synAllUserSysToQy?type=' + type });
}
// 获取第三方(如：企业微信、钉钉)的组织与用户同步统计信息
// thirdType: 1-企业微信; 2-钉钉
export function getSynData(type) {
  return defHttp.get({ url: Api.SynPrefix + '/getSynThirdTotal/' + type });
}
