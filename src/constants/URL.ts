/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
const {api, authApi} = (global as any).config;

export default {
  tradeQuery: `${api}/payments`,

  session: `${api}/session`,
  settles: `${api}/settles`,
  send: `${api}/merchant-check-value`,

  login: `${authApi}/oauth/authorize`
}
