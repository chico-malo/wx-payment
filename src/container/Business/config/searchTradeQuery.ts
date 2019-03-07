import { FieldGroupItemProps } from '../../../component/Form';
import { lang } from '../../../constants/zh-cn';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
export const searchTradeQuery: Array<FieldGroupItemProps> = [{
  group: [{
    fields: [{
      label: lang.merchant,
      name: 'merchantNo',
      missText: '2222',
      required: true
    }, {
      label: lang.time,
      name: 'time'
    }, {
      label: lang.tradeState,
      name: 'tradeState'
    }, {
      label: lang.amount,
      name: 'amount'
    }, {
      label: lang.audioNumber,
      name: 'audioNumber'
    }, {
      label: lang.businessType,
      name: 'businessType'
    }]
  }]
}];
