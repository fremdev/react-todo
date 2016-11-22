import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'buy'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toBe(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo to array', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'ads52',
          text: 'Buy tickets',
          completed: false,
          createdAt: 9238546
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res[0]).toEqual(action.todo);
      expect(res.length).toBe(1);
    });

    it('should update todo completed', () => {
      var todos = [{
        id: '378852',
        text: 'Buy tickets',
        completed: true,
        createdAt: 8754665,
        completedAt: 8754923
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toBe(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '378852',
        text: 'Buy tickets',
        completed: false,
        createdAt: 8754665,
        completedAt: undefined
      }];
      var existingTodos = [{
        id: '45',
        text: 'Feed the cat',
        completed: false,
        createdAt: 8754995,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos: existingTodos
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toBe(2);
      expect(res[0]).toEqual(todos[0]);
      expect(res[1]).toEqual(existingTodos[0]);
    });
  });

  describe('authReducer', () => {
    it('should save uid on login', () => {
      var action = {
        type: 'LOGIN',
        uid: 'ghajsgda87Eww245'
      };
      var res = reducers.authReducer(df({}), df(action));
      expect(res).toEqual({uid: action.uid});
    });

    it('should clear uid on logout', () => {
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df({uid: 'ghajsgda87Eww245'}), df(action));
      expect(res).toEqual({});
    });
  });
});
