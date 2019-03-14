/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import ObjectPath from 'object-path';
import { error as SitbToastError, success as SitbToastSuccess } from '@sitb/wbs/mui/Toast';
import { requestMsg } from '../constants/zh-cn';

export interface RequestToastParams {
  /**
   * 成功是否弹出信息
   */
  successTip?: boolean;
  /**
   * 失败是否弹出信息
   */
  errorTip?: boolean;
  /**
   * 错误信息字段 前缀
   */
  prefix?: string;
}

/**
 * 根据后台状态 弹出信息
 * @param params
 */
export default (params: RequestToastParams = {}) => payload => {
  const {successTip = true, errorTip, prefix = ''} = params;
  const {status, success} = payload;
  // 获取错误信息 加错误前缀 | 常量错误 | 默认错误
  const msg = ObjectPath.get(requestMsg, `${prefix}.${status}`) || (status && ObjectPath.get(requestMsg, status)) || requestMsg.UNKNOWN;
  // 先判断成功，else是失败,一定要加上 success校验，不然 成功信息会以错误弹框显示
  if (status === '0000' && successTip) {
    SitbToastSuccess(msg);
  } else if (!success && (status === '3000' || errorTip)) {
    SitbToastError(msg);
  }
}
