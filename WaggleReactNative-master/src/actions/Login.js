import * as types from "./Types";

export const loginAction = (user, pass) => {
  return {
    type: types.LOGIN_ACTION,
    user,
    pass
  };
};

export const loginSuccess = response => {
  return {
    type: types.LOGIN_SUCCESS,
    response
  };
};

export const resetStateLogin = () => {
  return {
    type: types.RESET_STATE_LOGIN
  };
};
