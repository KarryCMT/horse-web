import { defHttp } from '@/utils/http/axios';

enum Api {
  Prefix = '/api/system/DataSet',
}

// 根据数据集配置获取字段列表
export function getFields(data) {
  return defHttp.post({ url: Api.Prefix + '/fields', data });
}
