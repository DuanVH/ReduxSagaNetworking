import * as types from "../actions/Types";

const INITIAL = {
  success: null,
  error: null,
  loading: false
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case types.LOGIN_ACTION:
      return {
        loading: true
      };
    case types.LOGIN_SUCCESS:
      let data = action.response.data;
      return {
        success: data,
        error: null,
        loading: false
      };
    case types.RESET_STATE_LOGIN:
      return {
        INITIAL
      };
    case types.REQUEST_API_FAIL:
      let error = action.response.errors.message;
      return {
        ...state,
        loading: false,
        error: error
      };
    case types.RESET_API_ERROR:
      return {
        ...state,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
