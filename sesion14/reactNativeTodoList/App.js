/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  AsyncStorage,
  Button,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';

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
        <FlatList
          style={styles.list}
          data={this.state.todos}
          renderItem={({ item, index }) =>
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>{item.text}</Text>
              <Button
                title="Delete"
                onPress={() => this.deleteTodo(index)}
              />
            </View>
          }
          keyExtractor={item => item.key}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add ToDo task"
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTodo}
          value={this.state.text}
          returnKeyType='done'
          returnKeyLabel='done'
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
  list: {
    width: '100%'
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
  textInput: {
    height: 40,
    paddingRight: 10,
    borderColor: 'gray',
    borderWidth: isAndroid ? 0 : 1,
    width: '100%'
  }
});

export default App;
