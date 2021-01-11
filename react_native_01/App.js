/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numlist'

class App extends Component {

  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArr = this.state.random.filter((num, index) => {
      return position != index;
    })
    this.setState({
      random: newArr
    })
  }

  render() {
    return ( // return 값이 화면을 구성하게 됨
      <View style={styles.mainView}>
        <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}
          >Hello World!!</Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <ScrollView 
          style={{width: '100%'}}
          // onMomentumScrollBegin={() => alert('Begin')} // 스크롤을 땡기고 놓으면 실행되는 함수
          // onMomentumScrollEnd={() => alert('End')} // 스크롤의 움직임이 멈췄을 때 실행되는 함수
          // onScroll={() => alert('Scrolling')} // 스크롤링 시 실행되는 함수
          // onContentSizeChange={(width, height) => alert(height)} // 화면의 크기가 변경될 때마다 실행되는 함수
          bounces={true} // 마지막에 튕기는 현상(true)
        >
          <NumList
            num={this.state.random}
            delete={this.onNumDelete}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center', // 수평정렬
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
})

export default App;