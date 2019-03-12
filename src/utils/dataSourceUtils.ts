/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */

export class dataSourceUtils {
  /**
   * 序列化深拷贝
   * @param source 对象 或者 数组
   */
  static deepClone(source) {
    return JSON.parse(JSON.stringify(source))
  }
}
