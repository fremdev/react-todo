import * as redux from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers/reducers';

var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension(): f => f));

  return store;
};

export default configure;
