/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import { ColumnsItem } from '../../../component/Table/EnhancedTableHead';
import { lang } from '../../../constants/zh-cn';

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
  label: lang.fundsSettlement.status
}, {
  id: 'settleCycle',
  label: lang.fundsSettlement.settleCycle
}, {
  id: 'totalAmount',
  label: lang.fundsSettlement.totalAmount
}, {
  id: 'settleAt',
  label: lang.fundsSettlement.settleAt
}, {
  id: 'createAt',
  label: lang.createAt
}, {
  id: 'update',
  label: lang.updateAt
}, {
  id: 'remark',
  label: lang.remark
}];
