/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Generator = (props) => {
    return (
        <View style={styles.generator}>
            <Button
                title="Add Number"
                onPress={()=>props.add()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    generator: {
        backgroundColor: '#FF1948',
        alignItems: 'center',
        padding: 5,
        width: '100%',
    }
})

export default Generator;

//android와 ios의 버튼 모양이 다르다