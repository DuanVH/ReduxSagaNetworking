import {ADD_MOVIE, FETCH_SUCCEEDED, FETCH_MOVIES, FETCH_FAILED} from "./actionType";

/*Tao cac action chinh la cac Object bat buoc chua truong type*/
export const fetchMoviesAction = (sort) => {  /*sort la dau vao*/
    return {
        type: FETCH_MOVIES,
        sort
        // sort: sort // 2 cach viet (tren duoi nhu nhau)
    }
};

export const addMoviesAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
};

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
};

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
};
