/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import { session as types } from '../constants/ActionTypes';
import { ofType } from 'redux-observable';
import { filter, switchMap, tap } from 'rxjs/operators';
import { execute } from '../core/Request';
import URL from '../constants/URL';
import { SessionServices } from '../core/SessionServices';

/**
 * 获取用户信息
 * @param action$
 */
export function startQuery(action$) {
  return action$.pipe(
    ofType(types.startQuery),
    switchMap(() => execute({
      url: `${URL.session}/me`,
      type: types.queryComplete
    })))
}

/**
 * 存储token
 * @param action$
 * @returns {any}
 */
export function startSaveToken(action$) {
  return action$.pipe(
    ofType(types.startSaveToken),
    filter(({payload}) => {
      // 存储到缓存
      SessionServices.setAccessToken(payload);
      console.log('token', payload);
      return false;
    })
  );
}

export function startSend(action$) {
  return action$.pipe(
    ofType(types.startSend),
    switchMap(({payload}) => execute({
      url: `${URL.send}?merchantNo=${payload}`,
      type: types.sendComplete
    })),
    tap((payload) => console.log(payload)))
}
