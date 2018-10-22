/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers';
import MovieContainer from './containers/MovieContainer';

// Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMidleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const appDemo = () => (
    <Provider store={store}>
        <MovieContainer/>
    </Provider>
);

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
