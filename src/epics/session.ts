/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import { session as types } from '../constants/ActionTypes';
import { ofType } from 'redux-observable';
import { switchMap, tap } from 'rxjs/operators';
import { execute } from '../core/Request';
import URL from '../constants/URL';


export function startQuery(action$) {
  return action$.pipe(
    ofType(types.startQuery),
    switchMap(() => execute({
      url: `${URL.session}/me`,
      type: types.queryComplete
    })),
    tap((payload) => console.log(payload)))
}
