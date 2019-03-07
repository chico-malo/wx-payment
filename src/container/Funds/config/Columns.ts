/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { ColumnsItem } from '../../../component/Table/EnhancedTableHead';
import { lang } from '../../../constants/zh-cn';
import { settleStatus } from '../../../constants/select/settleStatus';
import { SettleCycleOptions } from '../../../constants/select/settleCycle';
import { momentUtils } from '../../../utils/momentFormat';

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
  render: (settleAt) => momentUtils.formatDate(settleAt)
}, {
  id: 'createAt',
  label: lang.createAt,
  render: (createAt) => momentUtils.formatDate(createAt)
}, {
  id: 'updateAt',
  label: lang.updateAt,
  render: (updateAt) => momentUtils.formatDate(updateAt)
}, {
  id: 'remark',
  label: lang.remark
}];
