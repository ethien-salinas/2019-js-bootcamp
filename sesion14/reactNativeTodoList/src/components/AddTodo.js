import React, { Component } from 'react'
import {
  StyleSheet, TextInput
} from 'react-native'

const isAndroid = Platform.OS == 'android'

export default class AddTodo extends Component {
  render() {
    return (
      <TextInput
        style={styles.textInput}
        placeholder="Add ToDo task"
        onChangeText={this.props.changeTextHandler}
        onSubmitEditing={this.props.addTodo}
        value={this.props.value}
        returnKeyType='done'
        returnKeyLabel='done'
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingRight: 10,
    borderColor: 'gray',
    borderWidth: isAndroid ? 0 : 1,
    width: '100%'
  }
});