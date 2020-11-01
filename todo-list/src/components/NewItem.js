import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    return (
      <div className="new-item">
        <input type="text" placeholder="What you want to do" id="addItem"/>
        <button>Add</button>
      </div>
    );
  }
}