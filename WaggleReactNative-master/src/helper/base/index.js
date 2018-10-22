import React from "react";
import { View } from "react-native";
import * as Global from "../../helper/utils/global";
import Loading from "../../helper/components/loading";

export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ahihi do ngu", this.props);
    if (this.props.error) {
      Global.showError(this.props.error);
      this.props.onResetError();
    }
    return <View style={{ flex: 1 }} />;
  }
}
