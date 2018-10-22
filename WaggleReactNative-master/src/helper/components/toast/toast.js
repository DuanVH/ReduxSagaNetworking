import React, { Component } from "react";
import Toast, { DURATION } from "./index";

export default class MyToast extends Component {
  render() {
    return (
      <Toast
        ref="toast"
        style={{ backgroundColor: "red" }}
        position="top"
        positionValue={200}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "red" }}
      />
    );
  }
}
