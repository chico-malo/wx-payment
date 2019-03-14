import { ofType } from 'redux-observable';
import { reconciliationTrade as types } from '../constants/ActionTypes';
import { switchMap } from 'rxjs/operators';
import { execute } from '../core/Request';
import URL from '../constants/URL';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-14
 */
export function startDownload(action$) {
  return action$.pipe(
    ofType(types.startDownload),
    switchMap(({payload}) => execute({
      url: URL.downloadTrade,
      params: payload,
      upload: true,
      type: types.downLoadComplete
    }))
  )
}
