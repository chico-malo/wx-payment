/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from '@sitb/wbs/autoBind';
import { Header } from './Header';

@autoBind
export class ApplicationIndex extends React.PureComponent<any, any> {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}
