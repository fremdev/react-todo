module.exports = {
  setTodos: function(todos) {
    if(Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return (Array.isArray(todos)) ? todos : [];
  },
  filterTodos(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    if(!showCompleted) {
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
      });
    }
    if(searchText) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchText);
      });
    }
    filteredTodos = filteredTodos.sort((prevTodo, nextTodo) => {
      if(prevTodo.completed && !nextTodo.completed) {
        return 1;
      }
      return 0;
    });
    return filteredTodos;
  }
};
