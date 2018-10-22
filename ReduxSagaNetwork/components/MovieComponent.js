import React, {Component} from 'react';
import {
    View, Text, TextInput, Alert, Platform, FlatList, StyleSheet
} from 'react-native';
import Button from 'react-native-button';

export default class MovieComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>

                <Text style={styles.textStyle}>
                    Movie List
                </Text>

                <Text style={styles.textStyle}>
                    New movie information
                </Text>

                <View style={{height: 100, margin: 10}}>
                    <TextInput style={{flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
                               onChangeText={(text) => {
                                   this.setState({movieName: text})
                               }}
                               value={this.state.movieName}
                               placeholder='Enter new movie name'/>
                    <TextInput
                        style={{flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120}}
                        onChangeText={(text) => {
                            this.setState({releaseYear: text})
                        }}
                        value={this.state.releaseYear}
                        placeholder='Release year'/>
                </View>

                <View style={{height: 70, flexDirection: 'row'}}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            width: 150,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: 'darkviolet'
                        }}
                        style={{fontSize: 18, color: 'white'}}
                        onPress={() => {
                            // will be setup in Container
                            this.props.onFetchMovies('asc');
                        }}>
                        Fetch movies
                    </Button>

                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            width: 150,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: 'darkviolet'
                        }}
                        style={{fontSize: 18, color: 'white'}}
                        onPress={() => {
                            // will be setup in Container
                        }}>
                        Add movies
                    </Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={
                        ({item, index}) =>
                            <Text style={styles.textItemStyle}>
                                {`${item.name}, releaseYear=${item.releaseYear}`}
                            </Text>
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0,
    },
    textStyle: {
        margin: 10,
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20
    },
    textItemStyle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        backgroundColor: (index % 2 === 0) ? 'blue' : 'pink'
    }
});
