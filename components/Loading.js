import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { colors } from "../../assets/colors/colors";

const Loading = ({ visible, color }) => {
  return (
    <Spinner
      visible={visible}
      textContent={"Loading heroes..."}
      textStyle={styles.spinnerTextStyle}
      color={color}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: colors.white
  }
});
