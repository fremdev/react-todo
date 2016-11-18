var expect = require('expect');
var TodoAPI = require('../../api/TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 15,
        text: 'Buy new jacket',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'test'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad local storage data', () => {
      var badData = {todo: 'bad data'};
      localStorage.setItem('todos', JSON.stringify(badData));

      var todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });

    it('should return todos array for valid local storage data', () => {
      var goodData = [{
        id: 15,
        text: 'Buy new jacket',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(goodData));

      var todos = TodoAPI.getTodos();

      expect(todos).toEqual(goodData);
    });
  });
});
