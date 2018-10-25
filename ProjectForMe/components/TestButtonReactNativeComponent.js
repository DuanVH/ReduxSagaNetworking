import React, {Component} from 'react';
import {
    View
} from 'react-native';
import Button from 'react-native-button';

export default class TestButtonReactNativeComponent extends Component {
    render() {
        return (
            <View
                style={{height: 50, margin: 10, marginTop: 30}}
            >
                <Button
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}
                    containerStyle={{
                        padding: 10,
                        height: 45,
                        marginLeft: 30,
                        borderRadius: 10,
                        backgroundColor: 'blue'
                    }}
                    onPress={() => {
                        alert("Ahihi")
                    }}>Click me!</Button>
            </View>
        )
    }
}
