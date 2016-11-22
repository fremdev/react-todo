import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
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
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
