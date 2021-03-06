import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function RegisterScreen({ navigation }) {
  const [up, setUp] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardUp);
    Keyboard.addListener("keyboardDidHide", keyboardDown);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardUp);
      Keyboard.removeListener("keyboardDidHide", keyboardDown);
    };
  }, []);

  const keyboardUp = () => {
    setUp(true);
  };
  const keyboardDown = () => {
    setUp(false);
  };
  return (
    <View style={styles.container}>
      {!up && (
        <TouchableOpacity
          style={{ position: "absolute", top: 5, left: 5, zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-round-back" size={30} color="black" />
        </TouchableOpacity>
      )}
      {!up && <Text style={styles.header}>Register</Text>}
      <View style={{ marginTop: up ? null : "4%" }}>
        <Text style={styles.field}>Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.field}>Email</Text>
        <TextInput style={styles.input} keyboardType={"email-address"} />
        <Text style={styles.field}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />
        <Seperator marginTop={"5%"} width={deviceWidth * 0.9} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <Text style={{ color: "#616161", fontSize: 16 }}>Log in with :</Text>
          <Image
            source={require("../assets/google.png")}
            style={styles.icon}
            resizeMode={"contain"}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AppNavigator")}>
        <Text style={{ color: "#616161", fontSize: 16, marginTop: "3%" }}>
          Skip and proceed to App
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: deviceHeight * 0.025,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "2%",
    height: deviceHeight * 0.06,
    width: deviceWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  container: {
    top: Constants.statusBarHeight,
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
    fontSize: deviceHeight * 0.04,
    fontWeight: "bold",
  },
  icon: {
    height: 45,
    width: 45,
    marginLeft: "3%",
  },
  input: {
    height: deviceHeight * 0.06,
    width: deviceWidth * 0.9,
    padding: 5,

    backgroundColor: "#eeeeee",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#c4c4c4",
  },
  field: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "3%",
  },
});

export default RegisterScreen;
