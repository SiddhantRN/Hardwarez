import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

import colors from "../config/colors";

import Seller from "../components/Seller";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params.component;

  return (
    <View style={{ flex: 1, top: Constants.statusBarHeight }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, left: 8, zIndex: 1 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: listing.image }} />
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5,
            alignItems: "flex-start",
          }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {listing.title}
          </Text>
          <View style={styles.category}>
            <Text>{listing.status}</Text>
          </View>
        </View>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <Text style={styles.seller}>Seller:</Text>
          <Seller
            image={{
              uri:
                "https://res.cloudinary.com/dy71m2dro/image/upload/v1598655311/pcParts/cold_av9tb3.jpg",
            }}
            title="Mr Gamer"
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: Screen_height * 0.025,
          fontWeight: "bold",
          paddingHorizontal: 10,
        }}
      >
        Description
      </Text>
      <ScrollView>
        <Text style={styles.description}>
          One year old i5 9400f with stock cooler . It’s never been overclocked
          and is in great condition.It has 6 cores and 6 threads.It’s base clock
          speed is 2.9GHz upto 4.1GHz when overclocked.Its great for gaming.
        </Text>
      </ScrollView>
    </View>
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
  detailsContainer: {
    paddingHorizontal: 10,
  },
  description: {
    paddingHorizontal: 10,
    fontSize: Screen_height * 0.022,
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: Screen_height * 0.4,
    resizeMode: "cover",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  seller: {
    fontWeight: "bold",
    fontSize: Screen_height * 0.023,
  },
  title: {
    fontSize: Screen_height * 0.03,
    fontWeight: "bold",
    width: Screen_width * 0.7,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
