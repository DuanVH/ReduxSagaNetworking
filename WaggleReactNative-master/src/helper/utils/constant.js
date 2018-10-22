import { Platform, Dimensions, PixelRatio } from "react-native";

/*----------API----------*/

export const BASE_URL = "http://dev-waggle.co/api/";

/*--------SCREENS--------*/

export const kBaseComponent = "WGL.Base";
export const kLoginScreen = "WGL.Login";
export const kMyWagglesScreen = "WGL.MyWaggle";
export const kMyProfile = "WGL.MyProfile";

/*--------STRINGS--------*/

export const kUserToken = "kUserToken";

/*-----------------------*/

export const PLATFORM_OS = Platform.OS;
export const DEVICE = Dimensions.get("window");

export const IS_IOS = PLATFORM_OS === "ios";
export const IS_ANDROID = PLATFORM_OS === "android";

export const DEVICE_WIDTH = DEVICE.width;
export const DEVICE_HEIGHT = DEVICE.height;

export const PX_RATIO =
  IS_ANDROID && PixelRatio.get() > 2 ? 2 : PixelRatio.get();
