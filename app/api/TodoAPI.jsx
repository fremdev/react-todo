var TodoAPI = {
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

export default TodoAPI;
