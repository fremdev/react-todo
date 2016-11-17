var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Buy milk'
        }
      ]
    };
  },
  handleNewTodo: function(text) {
    alert('New todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList todos={todos}/>
            <AddTodo onNewTodo={this.handleNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
