/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import DemoNativeModuleAndroid from './components/DemoNativeModuleAndroid';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DemoNativeModuleAndroid);
