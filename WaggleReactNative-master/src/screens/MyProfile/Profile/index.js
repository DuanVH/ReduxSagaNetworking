import React from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { startLogin } from "../../../config/Navigation";
import { Constants } from "../../../helper";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem(Constants.kUserToken);
      startLogin();
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity onPress={() => this.onPressLogout()}>
          <Text
            style={{
              marginTop: 300,
              marginLeft: 100,
              color: "black",
              fontSize: 30
            }}
          >
            Logout Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
