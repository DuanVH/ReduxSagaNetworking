import { all, fork } from "redux-saga/effects";
import * as authen from "../sagas/Authen";

export default function* rootSaga() {
  yield all([...Object.values(authen)].map(fork));
}
