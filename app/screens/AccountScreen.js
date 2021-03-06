import React from "react";
import { StyleSheet, View, FlatList, Dimensions, Text } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const Screen_height = Dimensions.get("window").height;

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Screen_height * 0.03,
            marginTop: "2%",
          }}
        >
          My Account
        </Text>
      </View>
      <View style={styles.container}>
        <ListItem
          title={"V3N0M"}
          subTitle={"V3N0M@gmail.com"}
          image={{
            uri:
              "https://res.cloudinary.com/dy71m2dro/image/upload/v1598655311/pcParts/cold_av9tb3.jpg",
          }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={
                item.targetScreen
                  ? () => navigation.navigate(item.targetScreen)
                  : null
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => navigation.navigate("Welcome")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    height: Screen_height * 0.08,
    width: "100%",

    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
