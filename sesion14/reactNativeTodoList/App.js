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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  state = {
    // todos: [{ key: 0, text: 'learn react' },{ key: 1, text: 'learn react native' },{ key: 2, text: 'learn js' }],
    todos: [],
    text: ''
  }

  componentDidMount() {
    TodosUtils.save([{ key: 0, text: 'learn react' }, { key: 1, text: 'learn react native' }, { key: 2, text: 'learn js' }, { key: 3, text: 'learn es6' }])
    TodosUtils.all(todos => this.setState({ todos: todos }))
    console.log(this.state)
  }
  deleteTodo = (idx) => {
    this.setState(
      prevState => {
        let todos = prevState.todos.slice()
        todos.splice(idx, 1)
        return {
          todos: todos
        }
      }
    )
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text>Todo List</Text>
            <FlatList
              data={this.state.todos}
              renderItem={(item, index) =>
                <View>
                  <Text>{item.text}</Text>
                  <Button
                    title="Del"
                    onPress={() => this.deleteTodo(idx)}
                  />
                </View>
              }
              keyExtractor={item => item.key}
            />
          </View>
        </SafeAreaView>
      </>
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
    console.log('result: ', result)
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
