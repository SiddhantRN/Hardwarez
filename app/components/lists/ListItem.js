import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";
import colors from "../../config/colors";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  button,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
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
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: Screen_height * 0.1,
    width: "100%",
    margin: 5,
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
    marginLeft: 5,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
