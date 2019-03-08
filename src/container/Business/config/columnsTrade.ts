/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
import { ColumnsItem } from '../../../component/Table/EnhancedTableHead';
import { lang } from '../../../constants/zh-cn';
import { settleStatus } from '../../../constants/select/settleStatus';
import { momentUtils } from '../../../utils/momentFormat';

export const columnsTrade: Array<ColumnsItem> = [{
  id: 'merchantNo',
  label: lang.merchantNo
}, {
  id: 'auditNumber',
  label: lang.audioNumber
}, {
  id: 'subAuditNumber',
  label: lang.trade.subAuditNumber
}, {
  id: 'refundAmount',
  label: lang.trade.refundAmount
}, {
  id: 'status',
  label: lang.trade.status,
  mappingSource: settleStatus
}, {
  id: 'totalAmount',
  label: lang.fundsSettlement.totalAmount
}, {
  id: 'paymentAt',
  label: lang.trade.paymentAt,
  render: (paymentAt) => momentUtils.formatDate(paymentAt)
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
