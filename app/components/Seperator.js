import React from "react";
import { View, StyleSheet } from "react-native";

function Seperator({ marginTop, width = "95%" }) {
  return (
    <View
      style={{
        height: 1,
        width: width,
        marginTop: marginTop,
        backgroundColor: "#E0E0E0",
        alignSelf: "center",
      }}
    />
  );
}

export default Seperator;
