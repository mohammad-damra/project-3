import React, { Component } from 'react';
import './App.css';
import NewItem from './components/NewItem';
import TodoList from './components/TodoList';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div className="app">
      <h1>APP</h1>
      <NewItem />
      <TodoList />
    </div>);
  }
}
