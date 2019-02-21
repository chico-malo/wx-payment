/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import { withStyles as MaterialWith } from '@material-ui/core/styles';

/**
 * 合并witchStyle 装饰器
 * @param styles     注入样式
 */
export function witchStyles(styles): any {
  return MaterialWith(styles);
}
