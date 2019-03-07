/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { FieldGroupItemProps } from '../../../component/Form/FieldGroup';
import { lang } from '../../../constants/zh-cn';

// 结算模块 搜索表单
export const settleSearch: Array<FieldGroupItemProps> = [{
  fieldGroup: [{
    fields: [{
      label: lang.merchantNo,
      name: 'merchantNo',
      required: true,
      missText: '商户号不能为空',
      type: 'select',
      options: [{
        label: '月',
        value: 'yue'
      }, {
        label: '李月',
        value: 'l'
      }]
    }, {
      label: lang.fundsSettlement.startAmount,
      name: 'startAmount'
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
