/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
export const SessionKey = {
  login_user: 'MERCHANT_LOGIN_USER',
  accessToken: 'MERCHANT_ACCESS_TOKEN'
};

export class SessionServices {
  /**
   * 获取token
   */
  static getAccessToken() {
    return sessionStorage.getItem(SessionKey.accessToken) || '';
  }

  /**
   * 获取用户信息
   */
  static getUser() {
    let DEFAULT_user = sessionStorage.getItem(SessionKey.login_user);
    DEFAULT_user = DEFAULT_user && JSON.parse(DEFAULT_user);
    return DEFAULT_user;
  }

  /**
   * 保存token
   * @param accessToken
   */
  static setAccessToken(accessToken: string) {
    sessionStorage.setItem(SessionKey.accessToken, accessToken);
  }

  /**
   * 保存用户信息
   * @param user
   */
  static saveUser(user) {
    sessionStorage.setItem(SessionKey.login_user, JSON.stringify(user));
  }

  /**
   * 删除缓存
   */
  static resetStorage() {
    // 清除操作员信息
    sessionStorage.removeItem(SessionKey.login_user);
    // 清除access token
    sessionStorage.removeItem(SessionKey.accessToken);
  }
}
