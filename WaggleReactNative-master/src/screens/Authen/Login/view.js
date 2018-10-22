import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
  ActivityIndicator
} from "react-native";
import { startMainApp } from "../../../config/Navigation";
import styles from "./styles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {
  Kohana,
  KeyboardScroll,
  AppButton,
  Toast,
  Loading,
  BaseComponent,
  Global,
  Constants
} from "../../../helper";
import { setItem, saveItem } from "../../../helper/utils/global";

class Login extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: ""
    };
  }

  onPressLogin() {
    this.props.onLogin(this.state.user, this.state.pass);
  }

  render() {
    super.render();
    if (this.props.success) {
      this.props.onResetState();
      startMainApp();
      Global.saveItem(Constants.kUserToken, this.props.success.persistences);
    }
    return (
      <KeyboardScroll>
        <View style={styles.rootView}>
          <Text style={styles.title}>LOGIN SCREEN</Text>
          <View style={styles.inputView}>
            <Kohana
              style={{ backgroundColor: "#f9f5ed" }}
              label={"Login"}
              iconClass={FontAwesomeIcon}
              iconName={"user"}
              iconColor={"#f4d29a"}
              iconSize={20}
              labelStyle={{ marginTop: 8, color: "#91627b" }}
              inputStyle={{ color: "#91627b" }}
              useNativeDriver
              value={this.state.user}
              onChangeText={text => this.setState({ user: text })}
            />
            <Kohana
              style={[styles.input, { backgroundColor: "#f9f5ed" }]}
              label={"Password"}
              iconSize={20}
              iconClass={FontAwesomeIcon}
              iconName={"lock"}
              iconColor={"#f4d29a"}
              labelStyle={{ color: "#91627b" }}
              inputStyle={{ color: "#91627b" }}
              useNativeDriver
              value={this.state.pass}
              onChangeText={text => this.setState({ pass: text })}
            />
          </View>
          <AppButton
            containerStyle={styles.buttonLogin}
            style={styles.titleButtonLogin}
            onPress={() => this.onPressLogin()}
            disabledContainerStyle={{ backgroundColor: "#515863" }}
            disabled={this.state.user === "" || this.state.pass === ""}
          >
            LOGIN
          </AppButton>
          {this.props.loading ? <Loading /> : null}
          <Toast
            ref="toast"
            style={{ backgroundColor: "white" }}
            position="top"
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.8}
            textStyle={{ color: "back" }}
          />
        </View>
      </KeyboardScroll>
    );
  }
}

export default Login;
