import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is the home screen</Text>
      </View>
    </View>
  );
}
