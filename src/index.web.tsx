import '@babel/polyfill';
import 'whatwg-fetch';
import 'es6-promise/auto';
import './styles/index.scss';
import * as React from 'react';
import bootstrap from 'veigar/bootstrap';

import { Provider } from 'react-redux';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form'

import createHashHistory from 'history/createHashHistory';

import { create as createAppStore } from './core/store';

import { Index } from './container/Application';

// Create a history of your choosing (we're using a browser history in this case)
const hashHistory = createHashHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(hashHistory);

const store = createAppStore({
    router: connectRouter(hashHistory),
    form: formReducer
  },
  {},
  [historyMiddleware]
);

bootstrap(() => (
  <Provider store={store}>
    <ConnectedRouter history={hashHistory}>
      <Index/>
    </ConnectedRouter>
  </Provider>
));
