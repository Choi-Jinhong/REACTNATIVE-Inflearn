/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {

  state = { // 값을 초기화 부분, 직접 초기화 하면 안된다.
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean ? 
      <Text>sampleBoolean is true</Text> 
    : 
      <Text>sampleBoolean is false</Text>
  )

  changeState = () => {
    if (!this.state.sampleBoolean){
      this.setState({
        sampleText: 'Text Changed !!',
        sampleBoolean: true
      });
    }
    else {
      this.setState({
        sampleText: 'Hello World',
        sampleBoolean: false
      });
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }

  render() {
    return ( // 여기가 화면을 구성해주는 친구
      <View style={styles.background}>
        <Text onPress={this.onAdd}>
          {this.state.sampleNum}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;

// state
// 컴포넌트에서 렌더링되는 데이터를 담고 유지관리하는 자바스크립트 객체
// 클래스 컴포넌트 안에서 사용 가능, 함수 컴포넌트에선 사용 불가
// 데이터의 재사용성, 값 수정의 용이성 등등의 이유로 훨씬 효율적인 코드 작성 가능

// setState
// state값을 바꾸는 방법은?
// setState를 사용해서 변경해야 화면에 반영된다.
// 쉽게 변경되면 안되는 값이라는 걸 의미
// 비동기성
// 단일 업데이트 지원