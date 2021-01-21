/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
    state = {
        contry: 'korea',
        value: 50
    }

    sliderValueChange = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        return ( // return 값이 화면을 구성하게 됨
            <View style={styles.container}>
                <Slider
                    style={{height: 60, width: 300}}
                    value={this.state.value}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={this.sliderValueChange}
                    maximumTrackTintColor='red'
                    minimumTrackTintColor='blue'
                    step={1}
                />
                <Text style={styles.input}>{this.state.value}</Text>
                <ActivityIndicator
                    style={{paddingTop: 200}}
                    size="large"
                    color="green"
                    animating={false}
                />
                <Picker
                    style={{ height: 50, width: 200 }}
                    selectedValue={this.state.contry}
                    onValueChange={(val, idx) => this.setState({ contry: val })}
                >
                    <Picker.Item label="Korea" value="korea" />
                    <Picker.Item label="Canada" value="canada" />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 20,
        marginBottom: 300,
        alignItems: 'center'
    },
    input: {
        width: '100%',
        marginTop: 20,
        fontSize: 25,
    }
})

export default PickerComponent;