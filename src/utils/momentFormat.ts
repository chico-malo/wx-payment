/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
import moment from 'moment';

// 转换格式
export const formatType = {
  dateMonthYear: 'YYYY-MM-DD',
  dateMonthYearHMS: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss'
};

/**
 * 时间转换工具
 */
export class momentUtils {
  /**
   * 转换年月日
   * @param time
   */
  static formatDate(time) {
    return time && moment(time).format(formatType.dateMonthYear) || '';
  }

  /**
   * 转换 年月日时分秒
   * @param time
   */
  static formatDateHMS(time) {
    return time && moment(time).format(formatType.dateMonthYearHMS) || '';
  }

  /**
   * 转换 时间
   * @param time
   */
  static formatTime(time) {
    return time && moment(time).format(formatType.time) || '';
  }
}
