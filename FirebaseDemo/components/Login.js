import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    View, Text,
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Get start Firebase</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    textStyle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
