import { Dashboard } from '../container/root/Dashboard';
import { Login } from '../container/root/Login';

import { TradeQuery } from '../container/Business/TradeQuery';
import { TradeRefund } from '../container/Business/TradeRefund';

import { FundsSettlement } from '../container/Funds/FundsSettlement';

import { ReconciliationTrade } from '../container/Reconciliation/ReconciliationTrade';
import { ReconciliationSettle } from '../container/Reconciliation/ReconciliationSettle';

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
  reconciliationSettle: '/reconciliation/settle',
  reconciliationTrade: '/reconciliation/trade'
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
  path: routerPath.reconciliationSettle,
  title: menu.reconciliationSettle,
  component: ReconciliationSettle
}, {
  path: routerPath.reconciliationTrade,
  title: menu.reconciliationTrade,
  component: ReconciliationTrade
}];
