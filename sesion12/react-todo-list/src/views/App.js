import React, { Component } from 'react';
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

class App extends Component {

  state = {
    todos: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
      .then(res => res.json())
      .then(res => this.setState({ todos: res }))
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
  }

  render() {
    return (
      <div>
        {this.state.todos &&
          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        }
      </div>
    );
  }
}

export default App;
