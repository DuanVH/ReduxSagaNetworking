import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    View, Text, TextInput, Image
} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>Hey! Maboy...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
});
