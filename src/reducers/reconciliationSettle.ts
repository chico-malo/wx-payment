/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */

import compose from './composeReducer';
import { reconciliationSettle as types } from '../constants/ActionTypes';

const DEFAULT_STATE = {
  processing: false
};

export default compose((state = DEFAULT_STATE, actions) => {
  const {type} = actions;
  switch (type) {
    case types.startDownload: {
      return {
        ...state,
        processing: true
      };
    }
    case types.downLoadComplete: {
      return {
        ...state,
        processing: false
      };
    }
    default:
      return state;
  }
}, DEFAULT_STATE);
