/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-08
 */
import compose from './composeReducer';
import { trade as types } from '../constants/ActionTypes';

const DEFAULT_STATE = {
  page: {
    content: []
  },
  processing: false
};

export default compose((state = DEFAULT_STATE, actions) => {
  const {type, success, payload} = actions;
  switch (type) {
    case types.startQuery:
      return {
        ...state,
        processing: true
      };
    case types.queryComplete: {
      return {
        ...state,
        page: success && payload || [],
        processing: false
      };
    }
    default:
      return state;
  }
}, DEFAULT_STATE);
