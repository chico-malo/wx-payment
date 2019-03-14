/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */
import { reconciliationSettle as types } from '../constants/ActionTypes';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { execute } from '../core/Request';
import URL from '../constants/URL';

// 老的下载流程
// export function startCreate(action$) {
//   // 定时器query 生成情况，fileName为创建成功的文件名
//   const time = fileName => interval(2000).pipe(
//     switchMap(() => execute({
//       url: `${URL.downloadSettle}/isSuccessfully`,
//       params: fileName
//     })),
//     switchMap((queryPayload) => {
//       // 生成成功，进行下载
//       if (queryPayload.success) {
//         return execute({
//           url: `${URL.downloadSettle}/export`,
//           params: queryPayload.payload,
//           upload: true,
//           type: types.downLoadComplete
//         });
//       }
//       // 失败需要返回 observable 或空数组
//       return [];
//     }),
//     takeWhile((payload: any) => {
//       // 下载成功，observable会返回type
//       if (payload.type) {
//         return false;
//       }
//       return !payload;
//     })
//   );
//
//   return action$.pipe(
//     ofType(types.startCreate),
//     switchMap(({payload}) => execute({
//       url: URL.downloadSettle,
//       params: payload
//     })),
//     tap(RequestToast({prefix: 'reconciliation', errorTip: true, successTip: false})),
//     map(({success, payload}) => {
//       // 判断创建是否成功，加载定时器
//       if (success) {
//         time(payload).subscribe();
//       }
//       return {type: types.createComplete}
//     }))
// }

export function startDownload(action$) {
  return action$.pipe(
    ofType(types.startDownload),
    switchMap(({payload}) => execute({
      url: URL.downloadSettle,
      params: payload,
      upload: true,
      type: types.downLoadComplete
    }))
  )
}
