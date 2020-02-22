import React, { Component } from 'react';

export default class TodoItem extends Component {

  componentStyle = () => {
    return {
      background: 'lightsteelblue',
      padding: '9px',
      borderBottom: '1.5px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.componentStyle()}>
        <p>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={e => this.props.markComplete(this.props.todo.id, e)}
            style={{ marginRight: '6px' }}
          />
          {this.props.todo.title}
          <button
            style={closeBtonStyle}
            onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>X</button>
        </p>
      </div>
    );
  }
}

const closeBtonStyle = {
  background: '#ff0000',
  color: '#fff',
  boder: 'none',
  padding: '6px 9px',
  cursor: 'pointer',
  float: 'right'
}