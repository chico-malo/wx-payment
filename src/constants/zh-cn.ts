/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
// 常量
export const lang = {
  previous: '上一页',
  next: '下一页',
  labelRowsPerPage: '每页条数',
  merchant: '所属商户',
  time: '时间节点',
  tradeState: '交易状态',
  amount: '金额范围',
  audioNumber: '交易流水号',
  totalFee: '全部手续费',
  businessType: '业务类型',
  createAt: '创建时间',
  updateAt: '修改时间',
  remark: '备注',

  untreated: '未处理',
  success: '成功',
  failure: '失败',
  waitPayment: '待支付',
  processing: '处理中',
  exception: '驳回',

  d0: 'D0',
  t0: 'T+0',
  t1: 'T+1',
  t7: 'T+7',
  t15: 'T+15',
  t30: 'T+30',
  t90: 'T+90',
  t180: 'T+180',
  t365: 'T+365',
  manual: '下游手动结算',

  merchantNo: '商户号',
  verifiedCode: '验证码',
  fundsSettlement: {
    realSettleAmount: '出款金额',
    settleCycle: '结算周期',
    totalAmount: '交易金额',
    status: '结算状态',
    startAmount: '结算金额区间开始',
    endAmount: '结算金额区间结束',
    auditNumber: '结算流水号',
    settleAt: '结算时间',
    startAt: '结算开始时间',
    endAt: '结算结束时间'
  },
  trade: {
    status: '交易状态',
    subAuditNumber: '商户流水号',
    refundAmount: '退货金额',
    paymentAt: '支付时间',
    close: '交易关闭',
    delete: '删除'
  }
};
//  菜单
export const menu = {
  dashboard: '仪表盘',
  login: '登录商户服务平台',
  business: '业务管理',
  tradeQuery: '交易查询',
  tradeQueryRefund: '交易退款',
  funds: '资金管理',
  fundsSettlement: '结算明细',
  reconciliation: '对账管理',
  reconciliationBillDown: '账单下载',
  reconciliationServiceBill: '服务费账单'
};

// 后台返回错误的错误信息
export const requestMsg = {
  UNKNOWN: '我也不知道发生了什么:(',
  '0000': '请求处理成功',
  login: {
    '3000': '商户号无效'
  },
  fundsSettlement: {
    '3000': '请选择商户号进行搜索'
  }
};
