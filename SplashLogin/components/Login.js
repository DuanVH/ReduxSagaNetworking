import React, {Component} from 'react';
import {
    Platform, StyleSheet, Dimensions,
    TouchableWithoutFeedback, TouchableOpacity,
    StatusBar, Keyboard, KeyboardAvoidingView,
    View, TextInput, Text, Image
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                           source={require('../images/fairy_tail.jpg')}/>
                    <Text style={styles.title}>Fairy Tail</Text>
                </View>
                <View style={styles.information}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 350,
        height: 100
    },
    title: {
        color: '#f7c7774',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    information: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'red'
    }
});
