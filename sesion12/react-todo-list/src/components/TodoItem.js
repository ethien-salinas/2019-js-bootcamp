import React, { Component } from 'react';

export default class TodoItem extends Component {

  componentStyle = () => {
    return {
      background: 'lightsteelblue',
      padding: '9px',
      boderBottom: '1.5 solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.componentStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, this.props.todo.id)}
        />
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
