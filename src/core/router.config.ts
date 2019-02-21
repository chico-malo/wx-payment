import { Dashboard } from '../container/Dashboard';
import { TradeQuery } from '../container/Business/TradeQuery';

import { menu } from '../constants/zh-cn';

// 路由路径
export const routerPath = {
  tradeQuery: '/business/tradeQuery',
  dashboard: '/dashboard'
};

export default [{
  path: routerPath.dashboard,
  title: menu.dashboard,
  component: Dashboard
}, {
  path: routerPath.tradeQuery,
  title: menu.tradeQuery,
  component: TradeQuery
}];
