import { menu } from './zh-cn';
import { routerPath } from '../core/router.config';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/22
 */
export const menuConfig = [{
  name: menu.dashboard,
  path: routerPath.dashboard
}, {
  name: menu.business,
  path: routerPath.business,
  children: [{
    name: menu.tradeQuery,
    path: routerPath.businessTradeQuery
  }]
}, {
  name: menu.funds,
  path: routerPath.funds,
  children: [{
    name: menu.fundsSettlement,
    path: routerPath.fundsSettlement
  }]
}, {
  name: menu.reconciliation,
  path: routerPath.reconciliation,
  children: [{
    name: menu.reconciliationBillDown,
    path: routerPath.reconciliationBillDown
  }, {
    name: menu.reconciliationServiceBill,
    path: routerPath.reconciliationServiceBill
  }]
}];
