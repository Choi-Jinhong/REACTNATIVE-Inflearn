/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class App extends Component{
  state = {
    avartor:'https://picsum.photos/id/237/200/300'
  }
  addImage = () => {
    // ImagePicker.launchCamera({}, response => {
    //   this.setState({
    //     avartor: response.uri
    //   })
    // })
    launchImageLibrary({
    }, response => {
      this.setState({
        avartor: response.uri
      })
      console.log(response.uri)
      console.log(`setState${response.uri}`)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          // source={{uri: this.state.avator}}
          source={require('./assets/images/test.png')}
          style={styles.avartor}
        /> */}
        <Image
          source={{uri: this.state.avartor }}
          style={styles.avartor}
        />
        <Button
          title="Add An Image"
          onPress={() => {this.addImage()}}
        />
        
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avartor: {
    width: '100%',
    height: 400
  }
});

export default App;
