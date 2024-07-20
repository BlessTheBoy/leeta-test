import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "@screens/SettingsScreen";
import ProfileScreen from "@screens/ProfileScreen";
import { SettingsStackParams } from "@root/types";

const Stack = createNativeStackNavigator<SettingsStackParams>();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Edit Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
