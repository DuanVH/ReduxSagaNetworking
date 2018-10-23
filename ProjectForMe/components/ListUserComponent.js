import React, {Component} from 'react';
import {
    TouchableOpacity,
    Dimensions, Platform, StyleSheet,
    View, Text, Image, FlatList
} from 'react-native';
import {getListUser} from "../server/Server";

class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {

                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: this.props.index % 2 === 0 ? 'red' : 'purple'
                    }}>
                    <Image style={styles.imageStyle}
                           source={{uri: this.props.item.avatar_url}}/>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.textStyle}>{this.props.item.login}</Text>
                        <Text style={styles.textStyle}>{this.props.item.node_id}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}

export default class ListUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],  // from API
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getListUser().then((users) => {
            this.setState({userList: users});
            console.log(this.state.userList);
        }).catch((e) => {
            this.setState({userList: []});
        });
    };

    // will be call when Scroll refresh from user
    onRefresh = () => {
        this.refreshDataFromServer();
    };

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <FlatList
                    ref={"FlatListUser"}
                    data={this.state.userList}
                    keyExtractor={(item) => item.node_id}
                    renderItem={({item, index}) => {
                        return (
                            <UserItem
                                item={item}
                                index={index}
                                parentFlatList={this}>
                            </UserItem>
                        );
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {},
    imageStyle: {
        height: 100,
        width: 100,
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 15
    }
});
