import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import AddListingScreen from "../screens/AddListingScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "Messages") {
      return false;
    } else if (routeName === "ListingDetails") {
      return false;
    }

    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        showLabel: false,
        keyboardHidesTabBar: true,
        tabStyle: { alignItems: "center" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        })}
      />
      <Tab.Screen
        name="AddListingScreen"
        component={AddListingScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plussquare" size={32} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
