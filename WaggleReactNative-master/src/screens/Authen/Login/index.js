import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./view";
import { loginAction, resetStateLogin } from "../../../actions/Login";
import { resetApiError } from "../../../actions/Global";

class Login extends Component {
  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    success: state.login.success,
    loading: state.login.loading,
    error: state.login.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, pass) => {
      dispatch(loginAction(user, pass));
    },
    onResetError: () => {
      dispatch(resetApiError());
    },
    onResetState: () => {
      dispatch(resetStateLogin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
