/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TextInput, ScrollView, Image } from 'react-native';
import Input from './src/input';
import Picker from './src/picker';
import Modal from './src/modal';
import KakaoLogo from './assets/images/kakaoBtn.png'
import Steak from './assets/images/steak.jpg'

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
        <Modal/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor:'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
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
  },
  image: {
    width: '100%',
    height: 700
  }
});

export default App;