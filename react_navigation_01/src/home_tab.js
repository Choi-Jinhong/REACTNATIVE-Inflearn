/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

class TabHomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go To Home Stack Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home_Stack')
                    }}
                    // onPress={() => alert('Check')}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    
});

export default TabHomeScreen;
