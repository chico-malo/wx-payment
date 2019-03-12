/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
import { SessionServices } from '../../core/SessionServices';
import { SelectItemProps } from '../../component/Form/FormItem/Select';

/**
 * 遍历生成商户号select数组
 */
export const merchantNoOptions = (): Array<SelectItemProps> => {
  // 获取缓存的商户信息
  const storageMerchant = SessionServices.getUser();
  const DEFAULT_OPTIONS: any = [];
  // 校验
  if (storageMerchant && Array.isArray(storageMerchant)) {
    storageMerchant.forEach((item: any) => {
      // 打印错误logo
      if (!item.merchantName || !item.merchantNo) {
        console.warn('select storageMerchant Build failed！');
      }
      DEFAULT_OPTIONS.push({label: item.merchantName, value: item.merchantNo});
    });
  }
  return DEFAULT_OPTIONS;
};

/**
 * 获取第一个绑定的商户号
 */
export const firstMerchantNo = (): string => {
  // 获取缓存的商户信息
  const storageMerchant: any = SessionServices.getUser();
  if (storageMerchant && Array.isArray(storageMerchant)) {
    const merchant = storageMerchant[0];
    // 打印错误logo
    if (!merchant || (merchant && (!merchant.merchantNo || !merchant.merchantNo))) {
      console.warn('first storageMerchant Build failed！');
    }
    return merchant.merchantNo;
  }
  return '';
};
