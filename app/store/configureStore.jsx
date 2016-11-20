import {combineReducers, createStore, compose} from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers/reducers';

var configure = (initialState = {}) => {
  var reducer = combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer
  });

  var store = createStore(reducer, initialState, compose(window.devToolsExtension ? window.devToolsExtension(): f => f));

  return store;
};

export default configure;
