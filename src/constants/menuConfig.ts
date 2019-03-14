/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/22
 */
import { menu } from './zh-cn';
import { routerPath } from '../core/router.config';

import AvTimer from '@material-ui/icons/AvTimer';
import FeaturedPlayList from '@material-ui/icons/FeaturedPlayList';
import VerticalSplit from '@material-ui/icons/VerticalSplit';
import Redeem from '@material-ui/icons/Redeem';
import Assessment from '@material-ui/icons/Assessment';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';

export interface MenuConfig {
  name: string;
  path: string;
  icon: any;
}

export interface MenuConfigProps extends MenuConfig {
  children?: Array<MenuConfig>;
}

// 菜单配置
export const menuConfig: Array<MenuConfigProps> = [{
  name: menu.dashboard,
  path: routerPath.dashboard,
  icon: AvTimer
}, {
  name: menu.business,
  path: routerPath.business,
  icon: FeaturedPlayList,
  children: [{
    name: menu.tradeQuery,
    path: routerPath.businessTradeQuery,
    icon: VerticalSplit
  }, {
    name: menu.tradeQueryRefund,
    path: routerPath.businessTradeRefund,
    icon: VerticalSplit
  }]
}, {
  name: menu.funds,
  path: routerPath.funds,
  icon: Redeem,
  children: [{
    name: menu.fundsSettlement,
    path: routerPath.fundsSettlement,
    icon: ChromeReaderMode
  }]
}, {
  name: menu.reconciliation,
  path: routerPath.reconciliation,
  icon: CalendarToday,
  children: [{
    name: menu.reconciliationSettle,
    path: routerPath.reconciliationSettle,
    icon: Assessment
  }, {
    name: menu.reconciliationTrade,
    path: routerPath.reconciliationTrade,
    icon: Assessment
  }]
}];
