import React from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import styles from "./styles";
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

class MyWaggles extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.rootView}>
        <Text>MyWaggles</Text>
      </View>
    );
  }
}

export default MyWaggles;
