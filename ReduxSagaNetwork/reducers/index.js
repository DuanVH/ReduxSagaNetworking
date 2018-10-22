import { combineReducers } from 'redux';
import movieReducers from '../reducers/movieReducers';

const allReducers = combineReducers({
    movieReducers,
    // add more reducer
});

export default allReducers;
