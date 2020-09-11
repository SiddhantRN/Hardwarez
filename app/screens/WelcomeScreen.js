import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={1}
      resizeMode={"cover"}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/pcLogo.png")}
          style={styles.logo}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 254,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.white,
  },
  tagline: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
