import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    if(todos.length === 0) {
      return (
        <div>
          <p className="container__message">Nothing To Do</p>
        </div>
      );
    }
    var renderTodos = todos.map((todo) => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
