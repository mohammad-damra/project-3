import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <p>TODO LIST</p>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}