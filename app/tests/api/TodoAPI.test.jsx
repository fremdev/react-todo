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

  describe('filteredTodos', () => {
    var todos = [{
      id: 1,
      text: 'Difficult Task 1',
      completed: true
    }, {
      id: 2,
      text: 'Simple Task 2',
      completed: false
    }, {
      id: 3,
      text: 'Simple Task 3',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos).toEqual(todos);
    });

    it('should return only not completed items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if search is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'simple');

      expect(filteredTodos.length).toBe(2);
    });
  });
});
