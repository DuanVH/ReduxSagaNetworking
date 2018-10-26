import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    View, Text, Image, FlatList,
    TouchableOpacity
} from 'react-native';
import {ListUserScreen, DetailUserScreen} from "./screenNames";
import {getUser} from "../server/UserServer";

class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: this.props.index % 2 === 0 ? 'red' : 'purple'
            }}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: this.props.item.avatar_url}}/>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingLeft: 15
                    }}>{this.props.item.login}</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        justifyContent: 'center',
                        paddingLeft: 15
                    }}>{this.props.item.id}</Text>
                </View>
            </View>
        );
    }
}

export default class ListUserVersionTwoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getUser().then((userList) => {
            this.setState({users: userList});
        }).catch((error) => {
            this.setState({users: []});
        });
    };

    _onPressItem = (item) => {
        alert(`Login: ${item.login}`)
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 30 : 0}}>
                <FlatList
                    ref={"ListUser"}
                    data={this.state.users}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    // this._onPressItem(item);
                                    // console.log(`ITEM: ${JSON.stringify(item)}`);
                                    navigation.navigate(DetailUserScreen, item);
                                }}>
                                <UserItem
                                    item={item}
                                    index={index}
                                    parentFlatList={this}>
                                </UserItem>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => item.node_id}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 100,
        width: 100,
    }
});
