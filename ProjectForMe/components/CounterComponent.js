import React, {Component} from 'react';
import {
    Dimensions, Platform,
    View, Text, Image
} from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: Platform.OS === 'ios' ? 60 : 30,
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Button
                        style={{color: 'white', fontSize: 18}}
                        containerStyle={{backgroundColor: 'purple', marginLeft: 20, padding: 10, borderRadius: 10}}
                        onPress={() => {
                            // alert("Increment");
                            // Action will be call in container
                            this.props.onIncrement(3);
                        }}>
                        Increment +
                    </Button>
                    <Button
                        style={{color: 'white', fontSize: 18}}
                        containerStyle={{backgroundColor: 'purple', marginLeft: 20, padding: 10, borderRadius: 10}}
                        onPress={() => {
                            // alert("Decrement");
                            // Action will be call in container
                            this.props.onDecrement(1);
                        }}>
                        Decrement -
                    </Button>
                </View>
                <Text style={{marginTop: 30, fontSize: 20}}>
                    Number: {this.props.times}
                </Text>
            </View>
        )
    }

}
