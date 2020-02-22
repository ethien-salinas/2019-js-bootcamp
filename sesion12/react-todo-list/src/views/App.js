import React, { Component } from 'react';
import TodoList from '../components/TodoList'
import '../css/App.css';

class App extends Component {

  state = {
    todos: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
      .then(res => res.json())
      .then(res => this.setState({ todos: res }))
  }

  render() {
    return (
      <div className="App">
        {this.state.todos &&
          <TodoList
            todos={this.state.todos}
          />
        }
      </div>
    );
  }
}

export default App;
