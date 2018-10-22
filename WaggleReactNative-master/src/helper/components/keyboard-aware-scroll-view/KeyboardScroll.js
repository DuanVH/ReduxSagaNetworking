import React from "react";
import { KeyboardAwareScrollView } from "./index";

const KeyBoardScroll = ({ children, ...otherProps }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="never"
      enableResetScrollToCoords={true}
      enableOnAndroid={true}
      {...otherProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyBoardScroll;
