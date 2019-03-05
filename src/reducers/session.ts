/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import compose from './composeReducer';
import { session as types } from '../constants/ActionTypes';

const DEFAULT_STATE = {
  countDownProcessing: true
};

export default compose((state = DEFAULT_STATE, action) => {
  const {success, type} = action;
  switch (type) {
    case types.startSend:
      console.log('start reducers');
      return {
        ...state
      };
    case types.sendComplete: {
      return {
        ...state,
        countDownProcessing: success
      };
    }
    default:
      return state;
  }
}, DEFAULT_STATE);
