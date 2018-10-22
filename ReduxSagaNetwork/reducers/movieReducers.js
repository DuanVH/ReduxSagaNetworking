import {ADD_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, FETCH_MOVIES} from "../actions/actionType";

const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];  // Tra ve 1 mang rong
        case ADD_MOVIE:
            return [
                ...movies,  //  list old movie
                action.newMovie
            ];
        default:
            return movies;
    }
};

export default movieReducers;
