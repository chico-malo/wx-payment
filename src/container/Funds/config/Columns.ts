/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { ColumnsItem } from '../../../component/Table/EnhancedTableHead';
import { lang } from '../../../constants/zh-cn';
import { settleStatus } from '../../../constants/select/settleStatus';
import { SettleCycleOptions } from '../../../constants/select/settleCycle';
import moment from 'moment';

export const settleColumns: Array<ColumnsItem> = [{
  id: 'auditNumber',
  label: lang.audioNumber
}, {
  id: 'totalFee',
  label: lang.totalFee
}, {
  id: 'realSettleAmount',
  label: lang.fundsSettlement.realSettleAmount
}, {
  id: 'status',
  label: lang.fundsSettlement.status,
  render: status => status && settleStatus[status]
}, {
  id: 'settleCycle',
  label: lang.fundsSettlement.settleCycle,
  render: settleCycle => settleCycle && SettleCycleOptions[settleCycle]
}, {
  id: 'totalAmount',
  label: lang.fundsSettlement.totalAmount
}, {
  id: 'settleAt',
  label: lang.fundsSettlement.settleAt,
  render: (settleAt) => settleAt && moment(settleAt).format('YYYY-MM-DD')
}, {
  id: 'createAt',
  label: lang.createAt,
  render: (createAt) => createAt && moment(createAt).format('YYYY-MM-DD')
}, {
  id: 'updateAt',
  label: lang.updateAt,
  render: (updateAt) => updateAt && moment(updateAt).format('YYYY-MM-DD')
}, {
  id: 'remark',
  label: lang.remark
}];
