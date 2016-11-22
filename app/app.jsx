import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import LoginPage from 'LoginPage';
import * as actions from 'actions/actions';
import configureStore from 'store/configureStore';
import TodoAPI from 'api/TodoAPI';
var store = configureStore();

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={LoginPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
