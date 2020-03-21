import React, { Component } from 'react'
import {
  Text, View, Button, StyleSheet
} from 'react-native'

export default class TodoItem extends Component {
  render() {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{this.props.item.text}</Text>
        <Button
          title="Delete"
          onPress={() => this.props.deleteTodo(this.props.index)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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