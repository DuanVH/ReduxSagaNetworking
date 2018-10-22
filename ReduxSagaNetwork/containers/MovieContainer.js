/*Connect Redux voi MovieComponent*/

import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';

// Action
import {addMoviesAction, fetchFailedAction, fetchMoviesAction, fetchSuccessAction} from "../actions";

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        onAddMovie: () => {
            dispatch(addMoviesAction());
        },
        // onSuccessFetch: () => {  /*Khong can dinh nghia; because it is never called by user*/
        //     dispatch(fetchSuccessAction());
        // },

    }
};

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;
