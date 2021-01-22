/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class DrawerUserScreen extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button
                    title="To Home Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({

});

export default DrawerUserScreen;
