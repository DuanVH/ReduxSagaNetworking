import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ActivityIndicator,
  Platform
} from "react-native";
import MaterialIndicator from "./material-indicator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Platform.OS === "ios") {
      return (
        <View style={styles.container}>
          <MaterialIndicator color={"rgb(63,95,163)"} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
      </View>
    );
  }
}
