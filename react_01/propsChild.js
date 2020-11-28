/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native'

const PropsChild = (props) => {
    return (
        <View>
            <Text onPress={props.cState}>
                {props.sText}
            </Text>
        </View>
    )
}

export default PropsChild;

// props
// readonly, 수정 변경이 불가한 읽기 전용 프로퍼티
// 부모 자식 관계가 형성되어야 의미가 있음
// react , react-native는 데이터의 흐름이 일방향
// 자식 컴포넌트는 props라는 데이터 값을 받아서 자식이 그대로 쓰게 됨
// props를 사용하는 이유
// 부모가 가지고 있는 정보가 100명의 자식 컴포넌트에게 똑같이 전달되는 수단이다.