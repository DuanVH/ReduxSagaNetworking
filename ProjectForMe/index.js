/** @format */

import {createStackNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListUserComponent from './components/ListUserComponent';
import {ListUserScreen, DetailUserScreen} from "./components/screenNames";
import DetailUserComponent from './components/DetailUserComponent';
import ListUserVersionTwoComponent from './components/ListUserVersionTwoComponent';

const appDemo = createStackNavigator({
    ListUserScreen: {
        screen: ListUserComponent,
    },
    DetailUserScreen: {
        screen: DetailUserComponent,
    }
});

AppRegistry.registerComponent(appName, () => ListUserVersionTwoComponent);
