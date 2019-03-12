/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-08
 */

export type businessType = 'array' | 'string';

let businessType = require('../businessType.json');

export const businessTypeOptions = businessType;

/**
 * 过滤业务类型
 * @param type     当前需要过滤的key
 * @param getType  获取过滤后数据的类型
 */
export const businessTypeDeepClone = (type, getType?: businessType) => {
  let businessTypes: any = [];
  Object.keys(businessTypeOptions).forEach(item => {
    // 过滤除all 跟选定type
    if ((item !== 'ALL') && (item !== type)) {
      businessTypes.push(item);
    }
  });
  // 转换成string
  if (getType === 'string') {
    return businessTypes.join();
  }
  return businessTypes;
};
