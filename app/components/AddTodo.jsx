import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/actions';

export var AddTodo = React.createClass({
  onNewTodo: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todo.value;
    if(todoText.length > 0) {
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onNewTodo}>
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
