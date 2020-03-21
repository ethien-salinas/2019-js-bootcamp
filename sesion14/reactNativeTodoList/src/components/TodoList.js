import React, { Component } from 'react'
import {
  StyleSheet, FlatList
} from 'react-native'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.data}
        renderItem={({ item, index }) => <TodoItem
          item={item}
          index={index}
          deleteTodo={this.props.deleteTodo}
        />
        }
        keyExtractor={item => item.key}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
});