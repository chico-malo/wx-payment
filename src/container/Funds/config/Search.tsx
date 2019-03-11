/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { lang } from '../../../constants/zh-cn';
import { FieldGroupItemProps } from '../../../component/Form';
import { merchantNoOptions } from '../../../constants/select/merchantNo';
import { settleStatus } from '../../../constants/select/settleStatus';

// 结算模块 搜索表单
export const settleSearch: Array<FieldGroupItemProps> = [{
  group: [{
    fields: [{
      label: lang.merchantNo,
      name: 'merchantNo',
      type: 'select',
      options: merchantNoOptions()
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
      name: 'auditNumber',
      type: 'number'
    }, {
      label: lang.fundsSettlement.settleAt,
      name: 'settleAt',
      type: 'date'
    }, {
      label: lang.fundsSettlement.status,
      name: 'status',
      type: 'select',
      options: settleStatus
    }]
  }]
}];
