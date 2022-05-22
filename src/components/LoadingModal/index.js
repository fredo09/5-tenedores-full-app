import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { styles } from "./LoadingModal.styles";

export const LoadingModal = ({ show, text }) => {
  return (
    <Overlay
      isVisible={show}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColorColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text>{text}</Text>}
      </View>
    </Overlay>
  );
};

LoadingModal.defaultProps = {
  show: false,
};
