import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function Category({ item, setSelected, selected }) {
  return (
    <TouchableOpacity onPress={() => setSelected(item.name)}>
      <View
        style={{
          paddingVertical: 10,
          borderRadius: 10,
          backgroundColor: item.color,
          margin: 5,
          borderColor: "#c4c4c4",
          borderWidth: selected == item.name ? 3 : 0,
          // height: Screen_height * 0.1,
          width: Screen_height * 0.13,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode={"cover"}
          style={styles.image}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    flex: 1,
  },
  image: {
    height: Screen_height * 0.05,
    width: Screen_height * 0.05,
    margin: 5,
  },
  text: {
    fontSize: Screen_height * 0.015,
    fontWeight: "bold",
  },
});

export default Category;
