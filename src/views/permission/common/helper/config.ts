import {
  templateDownload as userTemplateDownload,
  importPreview as userImportPreview,
  importData as userImportData,
  exportExceptionData as userExportExceptionData,
  exportExcel as userExportExcel,
} from '@/api/permission/user';
import {
  templateDownload as roleTemplateDownload,
  importPreview as roleImportPreview,
  importData as roleImportData,
  exportExceptionData as roleExportExceptionData,
  exportExcel as roleExportExcel,
} from '@/api/permission/role';
import {
  templateDownload as positionTemplateDownload,
  importPreview as positionImportPreview,
  importData as positionImportData,
  exportExceptionData as positionExportExceptionData,
  exportExcel as positionExportExcel,
} from '@/api/permission/position';
import {
  templateDownload as organizeTemplateDownload,
  importPreview as organizeImportPreview,
  importData as organizeImportData,
  exportExceptionData as organizeExportExceptionData,
  exportExcel as organizeExportExcel,
} from '@/api/permission/organize';

export const importInfo = {
  user: {
    templateDownload: userTemplateDownload,
    importPreview: userImportPreview,
    importData: userImportData,
    exportExceptionData: userExportExceptionData,
    exportExcel: userExportExcel,
    uploadUrl: '/api/permission/Users/Uploader',
    tableData: [
      { title: '*账户', dataIndex: 'account', width: 150 },
      { title: '*姓名', dataIndex: 'realName', width: 150 },
      { title: '*性别', dataIndex: 'gender', width: 150 },
      { title: '电子邮箱', dataIndex: 'email', width: 150 },
      { title: '*所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '直属主管', dataIndex: 'managerId', width: 150 },
      { title: '岗位', dataIndex: 'positionId', width: 150 },
      { title: '职级', dataIndex: 'ranks', width: 150 },
      { title: '角色', dataIndex: 'roleId', width: 150 },
      { title: '民族', dataIndex: 'nation', width: 150 },
      { title: '籍贯', dataIndex: 'nativePlace', width: 150 },
      { title: '入职时间', dataIndex: 'entryDate', width: 150 },
      { title: '证件类型', dataIndex: 'certificatesType', width: 150 },
      { title: '证件号码', dataIndex: 'certificatesNumber', width: 150 },
      { title: '文化程度', dataIndex: 'education', width: 150 },
      { title: '出生年月', dataIndex: 'birthday', width: 150 },
      { title: '办公电话', dataIndex: 'telePhone', width: 150 },
      { title: '办公座机', dataIndex: 'landline', width: 150 },
      { title: '手机号码', dataIndex: 'mobilePhone', width: 150 },
      { title: '紧急联系', dataIndex: 'urgentContacts', width: 150 },
      { title: '紧急电话', dataIndex: 'urgentTelePhone', width: 150 },
      { title: '通讯地址', dataIndex: 'postalAddress', width: 150 },
      { title: '*状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
    exportData: [
      { title: '账户', dataIndex: 'account', width: 150 },
      { title: '姓名', dataIndex: 'realName', width: 150 },
      { title: '性别', dataIndex: 'gender', width: 150 },
      { title: '电子邮箱', dataIndex: 'email', width: 150 },
      { title: '所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '直属主管', dataIndex: 'managerId', width: 150 },
      { title: '岗位', dataIndex: 'positionId', width: 150 },
      { title: '职级', dataIndex: 'ranks', width: 150 },
      { title: '角色', dataIndex: 'roleId', width: 150 },
      { title: '民族', dataIndex: 'nation', width: 150 },
      { title: '籍贯', dataIndex: 'nativePlace', width: 150 },
      { title: '入职时间', dataIndex: 'entryDate', width: 150 },
      { title: '证件类型', dataIndex: 'certificatesType', width: 150 },
      { title: '证件号码', dataIndex: 'certificatesNumber', width: 150 },
      { title: '文化程度', dataIndex: 'education', width: 150 },
      { title: '出生年月', dataIndex: 'birthday', width: 150 },
      { title: '办公电话', dataIndex: 'telePhone', width: 150 },
      { title: '办公座机', dataIndex: 'landline', width: 150 },
      { title: '手机号码', dataIndex: 'mobilePhone', width: 150 },
      { title: '紧急联系', dataIndex: 'urgentContacts', width: 150 },
      { title: '紧急电话', dataIndex: 'urgentTelePhone', width: 150 },
      { title: '通讯地址', dataIndex: 'postalAddress', width: 150 },
      { title: '状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
  },
  role: {
    templateDownload: roleTemplateDownload,
    importPreview: roleImportPreview,
    importData: roleImportData,
    exportExceptionData: roleExportExceptionData,
    exportExcel: roleExportExcel,
    uploadUrl: '/api/permission/Role/Uploader',
    tableData: [
      { title: '*角色名称', dataIndex: 'fullName', width: 150 },
      { title: '*角色编码', dataIndex: 'enCode', width: 150 },
      { title: '*角色类型', dataIndex: 'globalMark', width: 150 },
      { title: '所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '*状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
    exportData: [
      { title: '角色名称', dataIndex: 'fullName', width: 150 },
      { title: '角色编码', dataIndex: 'enCode', width: 150 },
      { title: '角色类型', dataIndex: 'globalMark', width: 150 },
      { title: '所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
  },
  position: {
    templateDownload: positionTemplateDownload,
    importPreview: positionImportPreview,
    importData: positionImportData,
    exportExceptionData: positionExportExceptionData,
    exportExcel: positionExportExcel,
    uploadUrl: '/api/permission/Position/Uploader',
    tableData: [
      { title: '*所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '*岗位名称', dataIndex: 'fullName', width: 150 },
      { title: '*岗位编码', dataIndex: 'enCode', width: 150 },
      { title: '*岗位类型', dataIndex: 'type', width: 150 },
      { title: '*状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
    exportData: [
      { title: '所属组织', dataIndex: 'organizeId', width: 150 },
      { title: '岗位名称', dataIndex: 'fullName', width: 150 },
      { title: '岗位编码', dataIndex: 'enCode', width: 150 },
      { title: '岗位类型', dataIndex: 'type', width: 150 },
      { title: '状态', dataIndex: 'enabledMark', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
  },
  company: {
    templateDownload: organizeTemplateDownload,
    importPreview: organizeImportPreview,
    importData: organizeImportData,
    exportExceptionData: organizeExportExceptionData,
    exportExcel: organizeExportExcel,
    uploadUrl: '/api/permission/Organize/Uploader',
    tableData: [
      { title: '*类型', dataIndex: 'category', width: 150 },
      { title: '*名称', dataIndex: 'fullName', width: 150 },
      { title: '*编码', dataIndex: 'enCode', width: 150 },
      { title: '公司简称', dataIndex: 'shortName', width: 150 },
      { title: '公司性质', dataIndex: 'enterpriseNature', width: 150 },
      { title: '所属行业', dataIndex: 'industry', width: 150 },
      { title: '成立时间', dataIndex: 'foundedTime', width: 150 },
      { title: '公司电话', dataIndex: 'telePhone', width: 150 },
      { title: '公司传真', dataIndex: 'fax', width: 150 },
      { title: '公司主页', dataIndex: 'webSite', width: 150 },
      { title: '公司地址', dataIndex: 'address', width: 150 },
      { title: '公司法人', dataIndex: 'managerName', width: 150 },
      { title: '联系电话', dataIndex: 'managerTelePhone', width: 150 },
      { title: '联系手机', dataIndex: 'managerMobilePhone', width: 150 },
      { title: '联系邮箱', dataIndex: 'manageEmail', width: 150 },
      { title: '开户银行', dataIndex: 'bankName', width: 150 },
      { title: '银行账户', dataIndex: 'bankAccount', width: 150 },
      { title: '经营范围', dataIndex: 'businessscope', width: 150 },
      { title: '部门主管', dataIndex: 'managerId', width: 150 },
      { title: '排序', dataIndex: 'sortCode', width: 150 },
      { title: '说明', dataIndex: 'description', width: 150 },
    ],
    exportData: [
      [
        { title: '类型', dataIndex: 'category', width: 150 },
        { title: '所属组织', dataIndex: 'parentId', width: 150 },
        { title: '名称', dataIndex: 'fullName', width: 150 },
        { title: '编码', dataIndex: 'enCode', width: 150 },
        { title: '公司简称', dataIndex: 'shortName', width: 150 },
        { title: '公司性质', dataIndex: 'enterpriseNature', width: 150 },
        { title: '所属行业', dataIndex: 'industry', width: 150 },
        { title: '成立时间', dataIndex: 'foundedTime', width: 150 },
        { title: '公司电话', dataIndex: 'telePhone', width: 150 },
        { title: '公司传真', dataIndex: 'fax', width: 150 },
        { title: '公司主页', dataIndex: 'webSite', width: 150 },
        { title: '公司地址', dataIndex: 'address', width: 150 },
        { title: '公司法人', dataIndex: 'managerName', width: 150 },
        { title: '联系电话', dataIndex: 'managerTelePhone', width: 150 },
        { title: '联系手机', dataIndex: 'managerMobilePhone', width: 150 },
        { title: '联系邮箱', dataIndex: 'manageEmail', width: 150 },
        { title: '开户银行', dataIndex: 'bankName', width: 150 },
        { title: '银行账户', dataIndex: 'bankAccount', width: 150 },
        { title: '经营范围', dataIndex: 'businessscope', width: 150 },
        { title: '部门主管', dataIndex: 'managerId', width: 150 },
        { title: '排序', dataIndex: 'sortCode', width: 150 },
        { title: '说明', dataIndex: 'description', width: 150 },
      ],
      [
        { title: '类型', dataIndex: 'category', width: 150 },
        { title: '上级公司', dataIndex: 'parentId', width: 150 },
        { title: '公司名称', dataIndex: 'fullName', width: 150 },
        { title: '公司编码', dataIndex: 'enCode', width: 150 },
        { title: '公司简称', dataIndex: 'shortName', width: 150 },
        { title: '公司性质', dataIndex: 'enterpriseNature', width: 150 },
        { title: '所属行业', dataIndex: 'industry', width: 150 },
        { title: '成立时间', dataIndex: 'foundedTime', width: 150 },
        { title: '公司电话', dataIndex: 'telePhone', width: 150 },
        { title: '公司传真', dataIndex: 'fax', width: 150 },
        { title: '公司主页', dataIndex: 'webSite', width: 150 },
        { title: '公司地址', dataIndex: 'address', width: 150 },
        { title: '公司法人', dataIndex: 'managerName', width: 150 },
        { title: '联系电话', dataIndex: 'managerTelePhone', width: 150 },
        { title: '联系手机', dataIndex: 'managerMobilePhone', width: 150 },
        { title: '联系邮箱', dataIndex: 'manageEmail', width: 150 },
        { title: '开户银行', dataIndex: 'bankName', width: 150 },
        { title: '银行账户', dataIndex: 'bankAccount', width: 150 },
        { title: '经营范围', dataIndex: 'businessscope', width: 150 },
        { title: '排序', dataIndex: 'sortCode', width: 150 },
        { title: '说明', dataIndex: 'description', width: 150 },
      ],
      [
        { title: '类型', dataIndex: 'category', width: 150 },
        { title: '所属组织', dataIndex: 'parentId', width: 150 },
        { title: '部门名称', dataIndex: 'fullName', width: 150 },
        { title: '部门编码', dataIndex: 'enCode', width: 150 },
        { title: '部门主管', dataIndex: 'managerId', width: 150 },
        { title: '排序', dataIndex: 'sortCode', width: 150 },
        { title: '说明', dataIndex: 'description', width: 150 },
      ],
    ],
  },
};
