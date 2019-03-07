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
      if (!item.merchantName || !item.storageMerchant) {
        console.warn('select storageMerchant Build failed！');
      }
      DEFAULT_OPTIONS.push({label: item.merchantName, value: item.storageMerchant});
    });
  }
  return DEFAULT_OPTIONS;
};
