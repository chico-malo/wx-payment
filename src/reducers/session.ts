/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import compose from './composeReducer';
import { session as types } from '../constants/ActionTypes';

const DEFAULT_STATE = {
  countDownProcessing: true,
  loginProcessing: false
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
    // 开始绑定
    case types.startBind: {
      return {
        ...state,
        loginProcessing: true
      };
    }
    case types.bindComplete: {
      return {
        ...state,
        loginProcessing: false
      };
    }
    default:
      return state;
  }
}, DEFAULT_STATE);
