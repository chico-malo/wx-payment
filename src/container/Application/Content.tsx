/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import { withStyles } from '../../utils/withStyles';
import routes, { routerPath } from '../../core/router.config';
import { getState } from '../../core/store';

function createRender(route) {
  return props => {
    // 修改页面title
    document.title = route.title || '';
    const params = getState().navigator.router[route.path];
    // pass the sub-routes down to keep nesting
    return (
      <route.component {...props}
                       params={params}
      />
    );
  };
}

const styles: any = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: 70
  }
});

@withStyles(styles)
export class Content extends React.PureComponent<any, any> {
  render() {
    const {classes, menuOpen} = this.props;
    return (
      <main className={classes.content}
            style={{width: `calc(100% - ${menuOpen && '240px' || '75px'}`}}
      >
        <HashRouter>
          <React.Fragment>
            <Route exact
                   path="/"
                   render={() => (<Redirect to={routerPath.dashboard}/>)}
            />
            {routes.map((route: any, index) => (
              <Route path={route.path}
                     render={createRender(route)}
                     key={index}
                     exact={route.exact}
              />
            ))}
          </React.Fragment>
        </HashRouter>
      </main>
    )
  }
}
