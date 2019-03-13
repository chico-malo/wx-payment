/**
 * @author 田尘殇Sean(sean.snow@live.com) createAt 2018/4/19
 */
function create<T extends { [key: string]: string }>(type: string, actions: T): T {
  const result: any = {};
  Object.keys(actions).forEach(key => result[key] = `application_types@${type}@${key}`);
  return result;
}

// 结算类型
export const fundsSettlement: any = create('funds-settlement', {
  startQuery: '',
  queryComplete: ''
});

// 结算账单下载
export const reconciliation: any = create('reconciliation', {
  /**
   * 创建表单
   */
  startCreate: '',
  createComplete: '',
  /**
   * 查询文件是否创建成功
   */
  startQuery: '',
  queryComplete: '',
  /**
   * 下载文件
   */
  startDownload: '',
  downLoadComplete: ''
});


// 交易查询
export const trade: any = create('trade', {
  startQuery: '',
  queryComplete: ''
});

export const navigator: any = create('navigator', {
  navigate: '',
  back: '',
  replace: '',
  reset: ''
});

export const root: any = create('root', {
  start: ''
});

// session
export const session: any = create('session', {
  /**
   * 获取用户信息
   */
  startQuery: '',
  queryComplete: '',
  /**
   * 存储token
   */
  startSaveToken: '',
  /**
   * 发送验证码
   */
  startSend: '',
  sendComplete: '',
  /**
   * 绑定
   */
  startBind: '',
  bindComplete: ''
});
