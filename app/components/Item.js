import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function Item({ unit }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ListingDetails", { component: unit })}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: unit.image,
          }}
          style={styles.image}
        />
        <View
          style={{
            marginLeft: "2%",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={styles.title}>{unit.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.category}>
              <Text>{unit.category}</Text>
            </View>
            <View style={styles.category}>
              <Text>{unit.status}</Text>
            </View>
          </View>
          <Text style={styles.title}>{unit.price} $</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: Screen_height * 0.075,
            right: 0,
          }}
        >
          <Entypo name="chevron-small-right" size={30} color="black" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  category: {
    padding: 5,
    borderColor: "#000",
    marginRight: 3,
    borderWidth: 1,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    padding: 5,
    marginVertical: 5,
  },
  image: {
    height: Screen_height * 0.14,
    width: Screen_width * 0.32,
    resizeMode: "cover",
    borderRadius: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: Screen_height * 0.026,
  },
});

export default Item;
