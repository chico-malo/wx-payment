import { FieldGroupItemProps } from '../../../component/Form';
import { lang } from '../../../constants/zh-cn';
import { merchantNoOptions } from '../../../constants/select/merchantNo';
import { businessTypeOptions } from '../../../constants/select/businessType';
import { tradeStatus } from '../../../constants/select/tradeStatus';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
export const searchTrade: Array<FieldGroupItemProps> = [{
  group: [{
    fields: [{
      label: lang.merchantNo,
      name: 'merchantNo',
      type: 'select',
      options: merchantNoOptions()
    }, {
      label: lang.businessType,
      name: 'businessTypes',
      type: 'select',
      options: businessTypeOptions
    }, {
      label: lang.fundsSettlement.startAmount,
      name: 'startAmount',
      type: 'number'
    }, {
      label: lang.fundsSettlement.endAmount,
      name: 'endAmount',
      type: 'number'
    }, {
      label: lang.fundsSettlement.auditNumber,
      name: 'auditNumber'
    }, {
      label: lang.fundsSettlement.settleAt,
      name: 'settleAt',
      type: 'date'
    }, {
      label: lang.fundsSettlement.status,
      name: 'status',
      type: 'select',
      options: tradeStatus
    }]
  }]
}];
