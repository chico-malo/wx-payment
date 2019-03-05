/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import compose from './composeReducer';
import { fundsSettlement as types } from '../constants/ActionTypes';

const DEFAULT_STATE = {
  content: [],
  processing: false
};

export default compose((state = DEFAULT_STATE, actions) => {
  const {type, success, message} = actions;
  switch (type) {
    case types.startQuery:
      return {
        ...state,
        processing: true
      };
    case types.queryComplete: {
      return {
        ...state,
        content: success && message || state.content,
        processing: false
      };
    }
    default:
      return state;
  }
}, DEFAULT_STATE);
