/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { ScrollView } from 'react-native';
import Logo from '../assets/pics/homeIcon.png';
import { CommonActions } from '@react-navigation/native';

class SideDrawer extends Component {

    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={Logo} 
                                style={{width: 40, height: 40}}
                            />
                        </View>
                        <Text style={styles.sectionPadding}>Section 1</Text>
                        <View style={styles.navSectionStyles}>
                            <Text 
                                style={styles.navItemStyles}
                                onPress={this.navigateToScreen('Home')}>Home
                            </Text>
                            <Text 
                                style={styles.navItemStyles}
                                onPress={this.navigateToScreen('User')}>User
                            </Text>
                            <Text 
                            style={styles.navItemStyles}
                            onPress={() => alert('Help Window')}>Help
                            </Text>
                            <Text 
                            style={styles.navItemStyles}
                            onPress={() => alert('Info Window')}>Info
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{paddingLeft: 10, paddingBottom: 30}}>
                    <Text>Copyright @ Gnong, 2021</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    },
    sectionPadding: {
        color: 'white',
        backgroundColor: '#ef9204',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyles: {
        backgroundColor: '#04b6ff'
    },
    navItemStyles: {
        padding: 10,
        color: '#fff'
    }
});

export default SideDrawer;
