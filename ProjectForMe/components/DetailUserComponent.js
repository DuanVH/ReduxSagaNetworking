import React, {Component} from 'react';
import {
    StyleSheet, Dimensions, Platform,
    View, Text, Image
} from 'react-native';
export default class DetailUserComponent extends Component {
    render() {
        const {navigation} = this.props;
        let data = this.props.navigation.state.params;
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        return(
            <View >
                <Text>{data.login}</Text>
            </View>
        )
    }
}
