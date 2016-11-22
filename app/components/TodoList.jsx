import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'api/TodoAPI';

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
      return (
        <Todo key={todo.id} {...todo}/>
      );
    });
    if(renderTodos.length === 0) {
      return (
        <div>
          <p className="container__message">Nothing To Do</p>
        </div>
      );
    }

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
