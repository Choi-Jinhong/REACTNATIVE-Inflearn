/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker'

class PickerComponent extends Component {
    state = {
        contry: 'korea'
    }
  render() {
    return ( // return 값이 화면을 구성하게 됨
      <View style={styles.container}>
        <Picker
            style={{ height: 50, width: 200 }}
            selectedValue={this.state.contry}
            onValueChange={(val, idx) => this.setState({contry: val})}
        >
         <Picker.Item label="Korea" value="korea"/>
         <Picker.Item label="Canada" value="canada"/>
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    }
})

export default PickerComponent;