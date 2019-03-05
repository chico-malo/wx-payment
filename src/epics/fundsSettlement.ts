import { ofType } from 'redux-observable';
import { fundsSettlement as types } from '../constants/ActionTypes';
import { switchMap } from 'rxjs/operators';
import { execute } from '../core/Request';
import URL from '../constants/URL';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */

export function startQuery(action$) {
  return action$.pipe(
    ofType(types.startQuery),
    switchMap(() => execute({
      url: `${URL.settles}`,
      type: types.queryComplete
    })))
}
