import { takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/Types";
import { login } from "./api/Authen";

function* doLogin(action) {
  try {
    let param = {
      email: action.user,
      password: action.pass
    };
    const response = yield login(param);
    if (!response.error) {
      yield put({ type: types.LOGIN_SUCCESS, response: response });
    } else {
      yield put({ type: types.REQUEST_API_FAIL, response: response });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: types.REQUEST_API_FAIL });
  }
}

export function* watchLoginAction() {
  yield takeLatest(types.LOGIN_ACTION, doLogin);
}
