var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return (
      <div>
        <h3>{id}. {text}</h3>
      </div>
    );
  }
});

module.exports = Todo;
