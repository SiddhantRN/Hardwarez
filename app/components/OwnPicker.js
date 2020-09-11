import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function OwnPicker({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: item.backgroundColor,
          height: Screen_height * 0.13,
          width: Screen_width * 0.25,
          borderRadius: Screen_height * 0.02,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        <Image
          resizeMode={"contain"}
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",

    width: Screen_width * 0.33,
  },
  image: {
    height: Screen_height * 0.08,
    width: Screen_width * 0.18,
  },
  label: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default OwnPicker;
