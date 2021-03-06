import expect from 'expect';
import TodoAPI from 'api/TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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
