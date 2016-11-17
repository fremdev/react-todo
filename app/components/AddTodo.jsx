var React = require('react');

var AddTodo = React.createClass({
  onNewTodo: function(e) {
    e.preventDefault();
    var todoText = this.refs.todo.value;

    if(todoText.length > 0) {
      this.refs.todo.value = '';
      this.props.onNewTodo(todoText);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onNewTodo}>
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
