import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, Dimensions, View } from "react-native";

import Item from "../components/Item";
import Screen from "../components/Screen";
import Category from "../components/Category";
import { ScrollView } from "react-native-gesture-handler";
import Seperator from "../components/Seperator";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631292/pcParts/i5_9400f_lncyhn.jpg",
    title: "Intel i5 9400F",
    price: "150",
    category: "Processor",
    status: "New",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631289/pcParts/AMD_Radeon_R9_290X_OC_4_GB_PowerColor_Grafikkarte_GPU_PCIe_GDDR5_si9ygj.jpg",
    title: "AMD Radeon R9",
    price: "250",
    category: "GPU",
    status: "Used",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631289/pcParts/7_DIY_Projects_for_Your_Old_Hard_Drive_ednpcf.jpg",
    title: "600 W power supply",
    price: "90",
    category: "Others",
    status: "Used",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631287/pcParts/1050ti_z4hyha.jpg",
    title: "Nvidia 1050ti",
    price: "100",
    category: "GPU",
    status: "Used",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631286/pcParts/amd-ryzen-7-3700x_wy6peb.jpg",
    title: "Ryzen7 3700x",
    price: "180",
    category: "Processor",
    status: "Used",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598631286/pcParts/x570_igl5fo.jpg",
    title: "X570 motherboard",
    price: "180",
    category: "Motherboard",
    status: "Used",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598878439/pcParts/ripjaws-v-red-08a4_rlwkem.png",
    title: "Ripjaw V ddr4 Ram 8X4 3200mhz",
    price: "140",
    category: "Memory",
    status: "Used",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598878441/pcParts/samsung_970_evo_intro_hi95a1.jpg",
    title: "NVMe M.2 ssd 250gb",
    price: "70",
    category: "Memory",
    status: "Used",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598878431/pcParts/61z0fAIy-dL._AC_SY679__ssbf65.jpg",
    title: "Thermaltake A500 ATX case",
    price: "150",
    category: "Others",
    status: "New",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598878440/pcParts/663454-amd-ryzen-5-3600x-1_tzoazl.jpg",
    title: "Ryzen 5 3600x",
    price: "130",
    category: "Processor",
    status: "Used",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598878409/pcParts/G_Skill_Trident_Z_RGB_32GB_4x8GB_DDR4_PC4-25600C14_3200MHz_Quad_Channel_Kit_F4-3200C14Q-32GTZR_syuu4u.jpg",
    title: "G Skill Ram 8X2 3200mhz",
    price: "65",
    category: "Memory",
    status: "Used",
  },
];

const Categories = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812816/pcParts/Icons/gaming_yxij9m.png",
    name: "All",
    color: "#C8E6C9",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/cpu_hhcz4n.png",
    name: "Processor",
    color: "#DCEDC8",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812759/pcParts/Icons/graphics-card_bzj38h.png",
    name: "GPU",
    color: "#F0F4C3",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/ram_mljlz1.png",
    name: "Memory",
    color: "#fff9c4",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/motherboard_sx7tqd.png",
    name: "Motherboard",
    color: "#ffecb3",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598812758/pcParts/Icons/computer_nxmld9.png",
    name: "Others",
    color: "#ffe0b2",
  },
];

let newData;

function ListingsScreen({ navigation }) {
  const [selected, setSelected] = useState("All");
  if (selected == "All") {
    newData = data;
  } else {
    newData = data.filter((item) => item.category == selected);
  }

  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}> Categories</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal>
          {Categories.map((category) => (
            <Category
              item={category}
              key={category.id.toString()}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: "4%" }} />
      <FlatList
        data={newData}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => <Item unit={item} />}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    padding: 5,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: Screen_height * 0.03,
  },
});

export default ListingsScreen;
