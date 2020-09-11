import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";

import ImageList from "../components/ImageList";
import OwnPicker from "../components/OwnPicker";
import Picker from "../components/FormPicker";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

const categories = [
  {
    backgroundColor: "#DCEDC8",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/cpu_hhcz4n.png",
    label: "Processor",
    value: 1,
  },
  {
    backgroundColor: "#F0F4C3",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812759/pcParts/Icons/graphics-card_bzj38h.png",
    label: "GPU",
    value: 2,
  },
  {
    backgroundColor: "#fff9c4",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/ram_mljlz1.png",
    label: "Memory",
    value: 3,
  },
  {
    backgroundColor: "#ffecb3",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/motherboard_sx7tqd.png",
    label: "Motherboard",
    value: 4,
  },
  {
    backgroundColor: "#ffe0b2",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/computer_nxmld9.png",
    label: "Others",
    value: 5,
  },
];

function AddListingScreen(props) {
  const validationSchema = Yup.object().shape({
    Item: Yup.string().required().min(1).label("Item's Name"),
    price: Yup.number().required().label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    Description: Yup.string().max(200).label("Item's Description"),
  });
  const [images, setImages] = useState([]);
  const [up, setUp] = useState(false);
  const handleSubmit = (values) => {
    alert(values);
  };
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
    <Formik
      initialValues={{ Item: "", price: "", Description: "", category: null }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,

        handleSubmit,
      }) => (
        <View style={styles.container}>
          {!up && (
            <>
              <Text style={styles.header}>Sell a computer part</Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: deviceHeight * 0.024,
                  marginTop: "2%",
                }}
              >
                Add Images
              </Text>
              <ImageList images={images} setImages={setImages} />
            </>
          )}
          <Text style={styles.field}>Item</Text>
          <TextInput
            style={styles.input}
            value={values.Item}
            onChangeText={handleChange("Item")}
            onBlur={() => setFieldTouched("Item")}
          />
          {touched.Item && errors.Item && (
            <Text
              style={{
                fontSize: 12,
                color: "red",
                marginLeft: deviceHeight * 0.01,
              }}
            >
              {errors.Item}
            </Text>
          )}
          <View
            style={{
              flexDirection: "row",
              top: "2%",
              width: "90%",

              alignItems: "center",

              marginLeft: deviceHeight * 0.01,
              justifyContent: "space-between",
            }}
          >
            <Picker
              items={categories}
              name="category"
              numberOfColumns={3}
              PickerItemComponent={OwnPicker}
              placeholder="Category"
              width="50%"
            />
          </View>
          <Text style={styles.field}>Price</Text>
          <TextInput
            placeholderTextColor={"#c4c4c4"}
            style={styles.input2}
            value={values.price}
            onChangeText={handleChange("price")}
            onBlur={() => setFieldTouched("price")}
          />
          {touched.price && errors.price && (
            <Text
              style={{
                fontSize: 12,
                color: "red",
                marginLeft: deviceHeight * 0.01,
              }}
            >
              {errors.price}
            </Text>
          )}
          <Text style={styles.field}>Description</Text>

          <TextInput
            multiline
            style={styles.input3}
            value={values.Description}
            onChangeText={handleChange("Description")}
            onBlur={() => setFieldTouched("Description")}
          />
          {touched.Description && errors.Description && (
            <Text
              style={{
                fontSize: 12,
                color: "red",
                marginLeft: deviceHeight * 0.01,
              }}
            >
              {errors.dogStory}
            </Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  button: {
    height: deviceHeight * 0.065,
    width: deviceWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#5db075",
    borderRadius: 10,
    position: "absolute",
    bottom: Constants.statusBarHeight + 10,
  },
  container: {
    flex: 1,
    top: Constants.statusBarHeight,
  },
  header: {
    alignSelf: "center",
    fontSize: deviceHeight * 0.035,
    fontWeight: "bold",
  },
  button: {
    height: deviceHeight * 0.065,
    width: deviceWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#5db075",
    borderRadius: 10,
    position: "absolute",
    bottom: Constants.statusBarHeight + 10,
  },

  field: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "3%",
    marginLeft: deviceHeight * 0.01,
  },

  headerTxt: {
    fontSize: deviceHeight * 0.03,
    fontWeight: "bold",
  },
  input: {
    height: deviceHeight * 0.06,
    width: "90%",
    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#c4c4c4",
  },
  input3: {
    height: deviceHeight * 0.1,
    textAlignVertical: "top",
    width: "90%",

    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#c4c4c4",
  },
  input2: {
    height: deviceHeight * 0.06,
    width: deviceWidth * 0.4,
    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#c4c4c4",
  },

  title: {
    fontSize: deviceHeight * 0.045,
    marginLeft: deviceHeight * 0.01,
    fontWeight: "bold",
  },
});

export default AddListingScreen;
