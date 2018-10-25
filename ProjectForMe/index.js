/** @format */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListUserComponent from './components/ListUserComponent';
import {ListUserScreen, DetailUserScreen} from "./components/screenNames";
import DetailUserComponent from './components/DetailUserComponent';
import ListUserVersionTwoComponent from './components/ListUserVersionTwoComponent';
import TestButtonReactNativeComponent from './components/TestButtonReactNativeComponent';
import CounterComponent from './components/CounterComponent';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

let store = createStore(allReducers);

const sagaDemo = () => (
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
);

const appDemo = createStackNavigator({
    ListUserScreen: {
        screen: ListUserComponent,
    },
    DetailUserScreen: {
        screen: DetailUserComponent,
    }
});

AppRegistry.registerComponent(appName, () => sagaDemo);
