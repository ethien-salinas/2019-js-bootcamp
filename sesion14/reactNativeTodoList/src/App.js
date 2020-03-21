import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  Platform,
  Keyboard,
} from 'react-native';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const isAndroid = Platform.OS == 'android'
const viewPadding = 10;

class App extends Component {

  state = {
    todos: [],
    text: ''
  }

  componentDidMount() {
    Keyboard.addListener(isAndroid ? 'keyboardDidShow' : 'keyboardWillShow',
      e => this.setState({
        viewPadding: e.endCoordinates.height + viewPadding
      })
    )
    Keyboard.addListener(isAndroid ? 'keyboardDidHide' : 'keyboardWillHide',
      () => this.setState({ viewPadding: viewPadding })
    )
    TodosUtils.save([
      { "key": 0, "text": "learn react" },
      { "key": 1, "text": "learn react native" },
      { "key": 2, "text": "learn js" },
      { "key": 3, "text": "learn es6" }
    ])
    TodosUtils.all(todos => this.setState({ todos: todos }))
  }
  deleteTodo = (idx) => {
    this.setState(
      prevState => {
        let todos = prevState.todos.slice()
        todos.splice(idx, 1)
        return { todos }
      },
      () => TodosUtils.save(this.state.todos)
    )
  }
  addTodo = () => {
    let notEmpty = this.state.text.trim().length > 0
    if (notEmpty) {
      this.setState(
        prevState => {
          let { todos, text } = prevState;
          return {
            todos: todos.concat({
              key: todos.length,
              text: text
            }),
            text: ''
          }
        },
        () => TodosUtils.save(this.state.todos)
      )
    }
  }
  changeTextHandler = (text) => {
    this.setState({ text })
  }

  render() {
    return (

      <View
        style={styles.container}
      >
        <Text>Todo List</Text>
        <TodoList
          data={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
        {/* <TextInput
          style={styles.textInput}
          placeholder="Add ToDo task"
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTodo}
          value={this.state.text}
          returnKeyType='done'
          returnKeyLabel='done'
        />*/ }
        <AddTodo
          changeTextHandler={this.changeTextHandler}
          addTodo={this.addTodo}
          value={this.state.text}
        />
      </View>
    );
  }
};

let TodosUtils = {
  convertStringWithSeparatorToArrayOfObj(todos, callback) {
    return callback(
      todos
        ? todos.split('||').map((todo, i) => ({ key: i, text: todo }))
        : []
    )
  },
  convertArrayOfObjToStringWithSeparator(todos) {
    let result = todos.map(todo => todo.text).join('||')
    return result
  },
  all(callback) {
    return AsyncStorage.getItem('TODO_LIST', (err, todos) =>
      this.convertStringWithSeparatorToArrayOfObj(todos, callback)
    )
  },
  save(todos) {
    AsyncStorage.setItem('TODO_LIST', this.convertArrayOfObjToStringWithSeparator(todos))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    paddingTop: 20
  },

  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listItem: {
    padding: 3,
    fontSize: 18
  },

});

export default App;
