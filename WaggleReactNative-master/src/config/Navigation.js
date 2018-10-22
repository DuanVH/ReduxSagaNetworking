import { Navigation } from "react-native-navigation";
import {
  registerScreens,
  registerScreenVisibilityListener
} from "./RegisterScreens";
import appInitialized from "./AppInitialized";
import { Provider } from "react-redux";
import store from "./Store";
import { Constants } from "../helper";
import { icMyWaggles, icProfile } from "../assets/images";

registerScreens(store, Provider);
registerScreenVisibilityListener();

export function startLogin() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Constants.kLoginScreen,
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}

export function startMainApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "MyWaggles",
        screen: Constants.kMyWagglesScreen,
        title: "MyWaggles",
        icon: icMyWaggles
      },
      {
        label: "Profile",
        screen: Constants.kMyProfile,
        title: "Profile",
        icon: icProfile
      }
    ]
  });
}

export function init() {
  appInitialized();
}
