import React, { Component } from 'react';
import Todo from './components/Todo'

class App extends Component {

  state = {
    remoteItem: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => this.setState({
        remoteItem: json
      }))
  }

  render() {
    return (
      <div>
        {this.state.remoteItem &&
          this.state.remoteItem.map(
            item => <Todo key={item.id} title={item.title} />
          )
        }
      </div>
    );
  }
}

export default App;
