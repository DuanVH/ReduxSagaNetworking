import React, {Component} from 'react';
import {
    Platform, Dimensions,
    StyleSheet,
    View, Text, ToastAndroid
} from 'react-native';
import {Device} from "../modules/NativeModulesWrapper";

export default class DemoNativeModuleAndroid extends Component {

    constructor(props) {
        super(props);
        // Device.getDeviceName(
        //     (model, error) => {
        //         console.log("model: " + model);
        //         console.log("error: " + error);
        //     }
        // );
        Device.show('Maboy demo Android Module', 0);
        // Device.show('Maboy demo Android Module', ToastAndroid.SHORT);

        this.state = {
            name: '',
        }
    }

    render() {
        let name = Device.getDataDemo(1);
        return (
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Text>Maboy demo</Text>
                <Text style={{marginTop: 30, fontSize: 20, fontWeight: 'bold', color: 'red'}}>{name}</Text>
            </View>
        );
    }
}
