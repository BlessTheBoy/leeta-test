import { fontFamilies } from "@/shared/constants/fonts";
import { colors } from "@/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import OrdersScreen from "@screens/OrdersScreen";
import Cart from "@vectors/Cart";
import Home from "@vectors/Home";
import Settings from "@vectors/Settings";
import SettingsNavigator from "./settings";
import { BottomTabParamList } from "@root/types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey[400],
        tabBarStyle: {
          paddingVertical: 24,
          height: 87,
          borderTopWidth: 0,
          backgroundColor: colors.white,
          elevation: 0,
        },
        tabBarLabelStyle: [
          {
            fontSize: 13,
            fontFamily: fontFamilies.Inter.medium,
          },
        ],
        tabBarItemStyle: {
          height: 39,
          gap: 8,
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Home size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Cart size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Settings size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
