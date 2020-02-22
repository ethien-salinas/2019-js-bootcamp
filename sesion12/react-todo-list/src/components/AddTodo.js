import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    title: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  handleOnChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Add new todo task..."
          value={this.state.title}
          onChange={this.handleOnChange}
          style={inputTextStyle}
          />
        <input
          type="submit"
          style={inputSubmitStyle}
        />
      </form>
    )
  }
}

const formStyle = {
  display: 'flex',
  bowShadow: '0 0 3 #123'
}

const inputTextStyle = {
  flex: '10',
  borderRadius: '6px 0 0 6px',
  padding: '6px 9px',
  border: '1.5 solid #999',
  fontSize: '1.5rem'
}

const inputSubmitStyle = {
  flex: '2',
  borderRadius: '0 6px 6px 0',
  fontSize: '1.2rem'
}