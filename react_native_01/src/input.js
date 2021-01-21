/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

class Input extends Component {
  state = {
    myTextInput: ""
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  render() {
    return ( // return 값이 화면을 구성하게 됨
      <View>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={ true }  // 다음줄로 넘어감
          maxLength={100} // 최대 글자수
          autoCaplitalize={'none'} // 첫글자 대문자 막기
          // editable={false} // 입력 막기
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%'
  },
  input: {
    width: '100%',
    backgroundColor: "#cecece",
    marginTop: 50,
    fontSize: 25,
    padding: 10
  }
})

export default Input;