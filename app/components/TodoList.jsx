import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'api/TodoAPI';

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;
    if(todos.length === 0) {
      return (
        <div>
          <p className="container__message">Nothing To Do</p>
        </div>
      );
    }
    var renderTodos = TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
      return (
        <Todo key={todo.id} {...todo}/>
      );
    });

    return (
      <div>{renderTodos}</div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
