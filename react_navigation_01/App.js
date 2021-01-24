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
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackHomeScreen from './src/home';
import UserScreen from './src/user';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';

import LogoTitle from './src/logo';
import SideDrawer from './src/my_drawer'
import { Linking } from 'react-native';
import PictorgramHome from './assets/images/kakaoBtn.png';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#c6cbef'
        },
        labelPosition: 'below-icon' // 
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({ focused }) => (
          TabBarIcon(focused, route.name)
        )
      })}
    >
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  )
}

DrawerComponent = () => {
  return (
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
      drawerContent={props => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="Route"
        component={TabComponent}
      />
    </Drawer.Navigator>
  )
}

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (name === 'Home') {
    iconName = 'home-outline';
    // iconImagePath = require('./assets/pics/home.png');
  } else if (name === 'User') {
    iconName = 'people-outline'
    // iconImagePath = require('./assets/pics/user.png');
  } else {
    iconName = 'mail-outline'
    // iconImagePath = require('./assets/pics/email.png');
  }
  iconSize = focused ? 30 : 20
  return (
    <Ionicons
      name={iconName}
      size={iconSize}
    />
  )
}

class App extends Component {

  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{ width: 40, height: 40}}
  //       source={require('./assets/pics/homeIcon.png')}
  //     />
  //   )
  // }

  // customDrawerConetent = (props) => {
  //   return(
  //     <DrawerContentScrollView {...props}>
  //       <DrawerItemList {...props}/>
  //       <DrawerItem
  //         label="Help"
  //         onPress={() => Linking.openURL('http://www.google.com')}
  //         icon={() => <LogoTitle/>}
  //       />
  //       <DrawerItem
  //         label="Info"
  //         onPress={() => alert('Info Window')}
  //       />
  //     </DrawerContentScrollView>
  //   );
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={DrawerComponent}
            options={{
              headerRight: ({}) => <HeaderRight/>
            }}
          />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerType="front" // front: 뒷배경을 냅두고 위에 나옴, slider: 뒷배경을 미룸
      //     drawerPosition="right" // 오른쪽에서 열림
      //     drawerStyle={{
      //       backgroundColor: "#c6cbef",
      //       width: 200
      //     }}
      //     drawerContentOptions={{
      //       activeTintColor: "red",
      //       activeBackgroundColor: "skyblue"
      //     }}
      //     drawerContent={props => <SideDrawer {...props}/>}
      //   >
      //     <Drawer.Screen
      //       name="Home"
      //       component={DrawerHomeScreen}
      //       options={{
      //         drawerIcon: () => (
      //           <Image
      //             source={PictorgramHome}
      //             style={{width: 40, height: 40}}
      //           />
      //         )
      //       }}
      //     />
      //     <Drawer.Screen
      //       name="User"
      //       component={DrawerUserScreen}
      //     />
      //   </Drawer.Navigator>
      // </NavigationContainer>
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
