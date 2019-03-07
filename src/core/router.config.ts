import { Dashboard } from '../container/root/Dashboard';
import { Login } from '../container/root/Login';

import { TradeQuery } from '../container/Business/TradeQuery';
import { TradeRefund } from '../container/Business/TradeRefund';

import { FundsSettlement } from '../container/Funds/FundsSettlement';

import { ReconciliationServiceBill } from '../container/Reconciliation/ReconciliationServiceBill';
import { ReconciliationBillDown } from '../container/Reconciliation/ReconciliationBillDown';

import { menu } from '../constants/zh-cn';

// 路由路径
export const routerPath: any = {
  dashboard: '/dashboard',
  login: '/login',

  business: '/business',
  businessTradeQuery: '/business/tradeQuery',
  businessTradeRefund: '/business/tradeQuery-refund',

  funds: '/funds',
  fundsSettlement: '/funds/settlement',

  reconciliation: '/reconciliation',
  reconciliationBillDown: '/reconciliation/bill-down',
  reconciliationServiceBill: '/reconciliation/service-bill'
};

export default [{
  path: routerPath.dashboard,
  title: menu.dashboard,
  component: Dashboard
}, {
  path: routerPath.login,
  title: menu.login,
  component: Login
}, {
  path: routerPath.businessTradeQuery,
  title: menu.tradeQuery,
  component: TradeQuery
}, {
  path: routerPath.businessTradeRefund,
  title: menu.tradeQueryRefund,
  component: TradeRefund
}, {
  path: routerPath.fundsSettlement,
  title: menu.fundsSettlement,
  component: FundsSettlement
}, {
  path: routerPath.reconciliationBillDown,
  title: menu.reconciliationBillDown,
  component: ReconciliationBillDown
}, {
  path: routerPath.reconciliationServiceBill,
  title: menu.reconciliationServiceBill,
  component: ReconciliationServiceBill
}];
