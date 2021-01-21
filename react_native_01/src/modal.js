/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';

class ModalComponent extends Component {
    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false : true
        })
    }

    render() {
        return ( // return 값이 화면을 구성하게 됨
            <View style={{ width: '100%' }}>
                <Button
                    title="open Modal"
                    onPress={this.handleModal}
                />
                <Modal
                    visible={this.state.modal}
                    animationType={'fade'}
                    onShow={() => alert('warnning!!!')}
                >
                    <View style={{
                        marginTop: 60,
                        backgroundColor: 'red'
                    }}>
                        <Text>This is modal content</Text>
                    </View>
                    <Button
                        title="Go Back"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default ModalComponent;