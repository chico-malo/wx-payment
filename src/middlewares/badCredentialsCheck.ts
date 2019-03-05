/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */

import URL from '../constants/URL';
import { SessionServices } from '../core/SessionServices';

export default () => next => action => {
  const {status} = action;
  console.log(action);
  // 1000状态码
  if (status === '1000') {
    console.log('用户授权不正确');
    // redirectUri目前平台地址
    location.href = `${URL.login}?response_type=token&client_id=${(window as any).config.clientId}&redirect_uri=${encodeURIComponent(location.href)}`;
    // 清空浏览器缓存
    SessionServices.resetStorage();

    return next({
      type: 'clear'
    });
  }
  return next(action);
};
