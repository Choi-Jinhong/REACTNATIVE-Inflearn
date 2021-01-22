/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import LogoTitle from './src/logo';
import { Linking } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {

  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{ width: 40, height: 40}}
  //       source={require('./assets/pics/homeIcon.png')}
  //     />
  //   )
  // }

  customDrawerConetent = (props) => {
    return(
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('http://www.google.com')}
        />
        <DrawerItem
          label="Info"
          onPress={() => alert('Info Window')}
        />
      </DrawerContentScrollView>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front" // front: 뒷배경을 냅두고 위에 나옴, slider: 뒷배경을 미룸
          drawerPosition="right" // 오른쪽에서 열림
          drawerStyle={{
            backgroundColor: "#c6cbef",
            width: 200
          }}
          drawerContentOptions={{
            activeTintColor: "red",
            activeBackgroundColor: "skyblue"
          }}
          drawerContent={props => <this.customDrawerConetent {...props}/>}
        >
          <Drawer.Screen
            name="Home"
            component={DrawerHomeScreen}
          />
          <Drawer.Screen
            name="User"
            component={DrawerUserScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e'
      //       },
      //       headerTintColor: 'white',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612',
      //       },
      //     }}
      //   >
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{ 
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={() => alert("Test")}
      //             color="orange"
      //           />
      //         )
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       // options={{
      //       //   title: 'User Screen',
      //       //   headerStyle: {
      //       //     backgroundColor: 'pink'
      //       //   },
      //       //   headerTintColor: 'red',
      //       //   headerTitleStyle: {
      //       //     fontWeight: 'bold',
      //       //     color: 'purple'
      //       //   }
      //       // }}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go'
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({

});

export default App;
