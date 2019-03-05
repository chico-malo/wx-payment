/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
export const SessionKey = {
  loginOperator: 'MERCHANT_LOGIN_USER',
  accessToken: 'MERCHANT_ACCESS_TOKEN'
};

export class SessionServices {

  static getAccessToken() {
    return sessionStorage.getItem(SessionKey.accessToken) || '';
  }

  static setAccessToken(accessToken: string) {
    sessionStorage.setItem(SessionKey.accessToken, accessToken);
  }

  static resetStorage() {
    // 清除操作员信息
    sessionStorage.removeItem(SessionKey.loginOperator);
    // 清除access token
    sessionStorage.removeItem(SessionKey.accessToken);
  }
}
