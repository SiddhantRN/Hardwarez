import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

const Screen_height = Dimensions.get("window").height;

function Seller({ title, subTitle, image, onPress }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subTitle && (
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: Screen_height * 0.022,
          }}
        >
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Screen_height * 0.06,
    width: Screen_height * 0.13,
    borderRadius: Screen_height * 0.02,
    backgroundColor: "#388e3c",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: Screen_height * 0.12,
    width: "100%",
    backgroundColor: colors.light,
    borderRadius: Screen_height * 0.01,
    elevation: 3,
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: Screen_height * 0.1,
    height: Screen_height * 0.1,
    borderRadius: Screen_height * 0.05,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
    fontSize: Screen_height * 0.025,
  },
});

export default Seller;
