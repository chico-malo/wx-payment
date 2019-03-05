/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { getActions } from '../../core/store';
import { getQueryArgs } from '@sitb/wbs/utils/HttpUtil';

import { Login } from '../root/Login';

export class Index extends React.Component<any, any> {

  componentWillMount(): void {
    // 获取当前token，返回search object
    let {access_token} = getQueryArgs();
    if (!access_token) {
      // 根据& 切成数组
      let args = location.hash.split('&');
      args.forEach(item => {
        // 匹配到有access_token的item 并获取值
        if (item.includes('access_token')) {
          access_token = item.split('=')[1];
        }
      })
    }
    if (access_token) {
      // session 保存access token
      getActions().session.startSaveToken(access_token);

      // 截取掉access_token 并跳转
      location.href = location.origin;
    }
    // 如果浏览器没有缓存token，再加载当前用户信息
    getActions().session.startQuery();
  }

  render() {
    // return <Application/>;
    return <Login/>;
  }
}
