/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TextInput, ScrollView } from 'react-native';
import Input from './src/input';
import Picker from './src/picker'

class App extends Component {

  state = {
    myTextInput: "",
    alphabet: ['a', 'b', 'c', 'd']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Picker/>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}  // 다음줄로 넘어감
          maxLength={100} // 최대 글자수
          autoCapitalize={'none'} // 첫글자 대문자 막기
        // editable={false} // 입력 막기
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width: '100%'}}>
          {
            this.state.alphabet.map((item, idx) => (
              <Text
                style={ styles.mainText }
                key={idx}
              >
                {item}
              </Text>
            ))
          }
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  }, 
  input: {
    width: '100%',
    backgroundColor: "#cecece",
    marginTop: 50,
    fontSize: 25,
    padding: 10
  }
});

export default App;