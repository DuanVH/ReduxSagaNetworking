import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { Constants } from "../helper";
import MyWaggles from "../screens/Waggle/MyWaggles";
import Login from "../screens/Authen/Login";
import Profile from "../screens/MyProfile/Profile";
import BaseComponent from "../helper/base";

export function registerScreens(store, Provider) {
  const screensArray = [
    {
      key: Constants.kBaseComponent,
      value: BaseComponent
    },
    {
      key: Constants.kLoginScreen,
      value: Login
    },
    {
      key: Constants.kMyWagglesScreen,
      value: MyWaggles
    },
    {
      key: Constants.kMyProfile,
      value: Profile
    }
  ];
  screensArray.forEach(function(item, index) {
    console.log(item, index);
    Navigation.registerComponent(item.key, () => item.value, store, Provider);
  });
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        "screenVisibility",
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
