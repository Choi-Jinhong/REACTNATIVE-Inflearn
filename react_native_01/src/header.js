/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
        onPressOut={() => alert('check alert')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        padding: 5,
        alignItems: 'center',
        width: '100%',
    },
})

export default Header;

// exampleFuntion = () => {}과 exampleFunction = () => ()의 차이는 ??
// {}의 경우에는 return이 있어야 함, ()의 경우에는 return이 없어야 함

// jsx
// javascript xml의 약자
// javascript 확장 문법
// ex) const example = <tag>example thing</tag>
// 이와 같이 변수 값이 아닌 태그로 감싸서 변수에 입력되는 것을 의미함

// onLongPress: 오래 눌러야 반응함
// onPressIn: 누르자마자 즉각적인 반응
// onPressOut: 터치를 떼자마자 반응