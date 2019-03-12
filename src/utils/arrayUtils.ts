/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */

/**
 * 数组工具
 */
export class arrayUtils {
  /**
   * 去重
   * @param arr
   */
  static unique(arr) {
    let newArr = new Set(arr);
    return [...newArr];
  }
}
