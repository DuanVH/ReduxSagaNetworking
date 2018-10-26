import {INCREMENT, DECREMENT} from "../actions/actionType";

// Saga effects
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

export function* sayHello() {
    console.log("Hello Redux Saga");
}

function* increment() {
    console.log("This is increment saga!");
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.log("This is decrement saga!");
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}
