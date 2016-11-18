var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('../api/TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleNewTodo: function(text) {
    var newTodos = [...this.state.todos,
       {
         id: uuid(),
         text,
         completed: false,
         createdAt: moment().unix(),
         completedAt: undefined
       }
     ];
    this.setState({todos: newTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onNewTodo={this.handleNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
