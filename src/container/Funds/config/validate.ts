/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */
import { lang } from '../../../constants/zh-cn';

// 表单验证
export const validate = values => {
  const errors: any = {};
  // 校验商户号
  if (!values.merchantNo) {
    errors.merchantNo = lang.pleaseInput(lang.merchantNo);
  }
  // 结束金额 跟开始金额为成对出现
  if ((values.startAmount && !values.endAmount) || (!values.startAmount && values.endAmount)) {
    errors.startAmount = lang.pleaseInput('开始区间或结束区间');
    errors.endAmount = lang.pleaseInput('开始区间或结束区间');
  }
  // 判断开始金额是否 大于 结束金额
  if (Number(values.startAmount) > Number(values.endAmount)) {
    errors.startAmount = '开始区间不能大于结束区间';
    errors.endAmount = '开始区间不能大于结束区间';
  }
  return errors;
};
