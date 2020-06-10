import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './../components/todo/todo-list';

class All extends Component {  
  render() {

    // show todos list
    const todos = this.props.todos.map((item)=> {
      return <TodoList key={item.key} item={item} />;
    });

    return (
      <ul className="todo-list unstyled">
        {todos}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(All);