/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { getActions } from '../../core/store';
import { Application } from './Application';

// import { Login } from '../root/Login';

export class Index extends React.Component<any, any> {

  static componentWillMount(): void {
    getActions().session.startQuery();
  }

  render() {
    return <Application/>;
  }
}
