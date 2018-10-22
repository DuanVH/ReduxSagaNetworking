import { AsyncStorage } from "react-native";
import { startLogin, startMainApp } from "./Navigation";
import { Constants } from "../helper";

export default async function appInitialized() {
  const token = await AsyncStorage.getItem(Constants.kUserToken);
  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
}
