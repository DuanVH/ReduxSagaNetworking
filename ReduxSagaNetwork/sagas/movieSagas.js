import {FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from "../actions/actionType";

// Saga effect
import { put, takeLatest } from 'redux-saga/effects';
/* put de dispatch action */
/* takeLatest theo doi su thay doi cua action va lay cai moi nhat (nhu khi ta click lien tuc thi se lay lan click cuoi cung) */

import {Api} from './Api';
function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
    } catch (error) {
        yield put({type: FETCH_FAILED, error});
    }
}

export function* watchFetchMovies() {
    /*Theo doi action fetchMovies*/
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
