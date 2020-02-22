import React, { Component } from 'react'

export default class Counter extends Component {

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementTwice = () => {
    this.props.onIncrement()
    this.props.onIncrement()
  }

  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
        {/* challenge: implement behavior */}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementTwice}>Increment twice</button>
      </p>
    )
  }
}