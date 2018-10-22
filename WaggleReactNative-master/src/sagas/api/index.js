import { AsyncStorage } from "react-native";
import { Constants } from "../../helper";

export async function GET(path, param) {
  const DATA_TOKEN = await AsyncStorage.getItem(Constants.kUserToken);
  const USER_TOKEN = JSON.parse(DATA_TOKEN);
  return new Promise((resolve, reject) => {
    let requestURL = Constants.BASE_URL + path;
    if (param) {
      requestURL += "?";
      let i = 0;
      for (let key in param) {
        if (param[key] != "")
          if (i != 0) requestURL += "&" + key + "=" + param[key];
          else requestURL += key + "=" + param[key];
        i++;
      }
    }
    fetch(requestURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "USER-TOKEN": USER_TOKEN
      },
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log("[REQUEST-GET]--", requestURL, json, param, USER_TOKEN);
        resolve(json);
      })
      .catch(e => {
        console.log("[REQUEST-GET]--", requestURL, e, param, USER_TOKEN);
        reject(e);
      });
  });
}

export async function POST(path, param) {
  return new Promise((resolve, reject) => {
    let requestURL = Constants.BASE_URL + path;
    fetch(requestURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "USER-TYPE": "agent"
      },
      method: "POST",
      body: JSON.stringify(param)
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log("[REQUEST-POST]--", requestURL, json, param);
        resolve(json);
      })
      .catch(e => {
        console.log("[REQUEST-POST]--", requestURL, e, param);
        reject(e);
      });
  });
}
