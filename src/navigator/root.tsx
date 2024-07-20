import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottomTab";
import AddressScreen from "@screens/AddressScreen";
import { NavigationContainer } from "@react-navigation/native";
import NewAddressScreen from "@screens/NewAddressScreen";
import { RootStackParams } from "@root/types";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Manage Address" component={AddressScreen} />
        <Stack.Screen
          name="Address"
          component={NewAddressScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
