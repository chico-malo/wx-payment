/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import Request from '@sitb/wbs/utils/Request';
import { SessionServices } from './SessionServices';
import { urlArgs } from '@sitb/wbs/utils/HttpUtil';

export interface RequestParams {
  // 请求url
  url: string;
  // get请求参数 object
  params?: any;
  // 请求方式
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  // 请求方式除get 以外的方式都能用到
  body?: any;
  // rxjs需要的结束流动作
  type?: string;
  // 支持下载
  upload?: boolean;
}

/**
 * 请求封装
 * @param RequestParams
 */
export async function execute(RequestParams: RequestParams) {
  const {method, url, params} = RequestParams;
  let newUrl = url;
  // 身份凭证
  const DEFAULT_header = {
    authorization: `Bearer ${SessionServices.getAccessToken()}`
  };
  // 统一处理请求参数，追加size sort排序
  if (params && !method || method === 'GET') {
    let newParams: any = Object.assign(params, {
      size: params.size || 10,
      sort: params.sort || 'id,desc'
    });
    newUrl = `${url}?${urlArgs(newParams)}`;
  }
  return await Request.execute({
    ...RequestParams,
    url: newUrl,
    credentials: 'include',
    headers: DEFAULT_header
  });
}
