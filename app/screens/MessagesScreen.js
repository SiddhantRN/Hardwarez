import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import { Ionicons } from "@expo/vector-icons";

const Screen_height = Dimensions.get("window").height;

const initialMessages = [
  {
    id: 1,
    title: "Olof",
    description: "Hey! Is this item still available?",
    image: require("../assets/cold.png"),
  },
  {
    id: 2,
    title: "Niko",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/cold.png"),
  },
];

function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: "absolute", marginTop: "2%", left: 8, zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-round-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: "2%",
            fontSize: Screen_height * 0.03,
          }}
        >
          My Conversations
        </Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Jimmy",
              description:
                "I'm interested in this item. When will you be able to post it?",
              image: require("../assets/cold.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    height: Screen_height * 0.08,
    width: "100%",

    alignItems: "center",
  },
});

export default MessagesScreen;
