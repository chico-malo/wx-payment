/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import Request from '@sitb/wbs/utils/Request';
import { SessionServices } from './SessionServices';

export interface Params {
  url: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: any;
  type?: string;
}

export async function execute(params: Params) {
  const DEFAULT_header = {
    authorization: `Bearer ${SessionServices.getAccessToken()}`
  };
  return await Request.execute({
    ...params,
    credentials: 'include',
    headers: DEFAULT_header
  });
}
