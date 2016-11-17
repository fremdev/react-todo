var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onNewTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    var todoText = 'Buy new t-shirt'
    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onNewTodo if input is invalid', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
