/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import Logo from '../assets/pics/homeIcon.png';


class LogoTitle extends Component {
    render() {
        return (
            <Image
                style={{width: 40, height: 40}}
                source={Logo}
            />
        );
    }
};

const styles = StyleSheet.create({

});

export default LogoTitle;
