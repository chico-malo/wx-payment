/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { lang } from '../../../constants/zh-cn';
import { FieldGroupItemProps } from '../../../component/Form';
import { merchantNoOptions } from '../../../constants/select/merchantNo';

// 结算模块 搜索表单
export const settleSearch: Array<FieldGroupItemProps> = [{
  group: [{
    fields: [{
      label: lang.merchantNo,
      name: 'merchantNo',
      required: true,
      missText: '商户号不能为空',
      type: 'select',
      options: merchantNoOptions()
    }, {
      label: lang.fundsSettlement.startAmount,
      name: 'startAmount',
      type: 'number'
    }, {
      label: lang.fundsSettlement.endAmount,
      name: 'endAmount'
    }, {
      label: lang.fundsSettlement.auditNumber,
      name: 'auditNumber'
    }, {
      label: lang.fundsSettlement.startAt,
      name: 'startAt',
      type: 'date'
    }, {
      label: lang.fundsSettlement.endAt,
      name: 'endAt',
      type: 'time'
    }, {
      label: lang.fundsSettlement.status,
      name: 'status'
    }]
  }]
}];
