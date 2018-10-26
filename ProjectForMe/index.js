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

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

// Redux Saga
import createSagaMiddleware from 'redux-saga';
// Middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/rootSaga';

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const sagaDemo = () => (
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
);
sagaMiddleware.run(rootSaga);

const appDemo = createStackNavigator({
    ListUserScreen: {
        screen: ListUserVersionTwoComponent,
        // navigationOptions: {  /*Co the custom lai*/
        //     headerTitle: 'List user screen'
        // }
    },
    DetailUserScreen: {
        screen: DetailUserComponent,
        // navigationOptions: {
        //     headerTitle: 'Detail'
        // }
    },
});

AppRegistry.registerComponent(appName, () => appDemo);
