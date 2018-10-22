import { Alert, AsyncStorage } from "react-native";
import { resetApiError } from "../../actions/Global";
import { connect } from "react-redux";

export function showError(content) {
  Alert.alert("Error", content, [{ text: "OK", onPress: () => {} }]);
}

export const saveItem = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(`Error retrieving data ${error}`);
  }
};

export function isNullOrEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}
