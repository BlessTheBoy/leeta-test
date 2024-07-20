import { View, Text, TextStyle, Pressable } from "react-native";
import React, { ReactElement } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, textStyles } from "@/styles";
import Header from "@components/Header";
import ProfileImage from "@components/ProfileImage";
import User from "@vectors/User";
import AddressBook from "@vectors/AddressBook";
import SignIn from "@vectors/SignIn";
import ChevronRight from "@vectors/ChevronRight";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import useAuth from "@/shared/hooks/useAuth";
import { ProfileScreenNavigationProp } from "@root/types";

export default function SettingsScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { user } = useAuth();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Header />
      <View>
        <View
          style={{
            paddingTop: 30,
            paddingBottom: 15,
            alignItems: "center",
          }}
        >
          <Animated.View sharedTransitionTag="tag">
            <ProfileImage size={70} />
          </Animated.View>
          <Text
            style={[
              textStyles.body_default_medium,
              { marginTop: 12, color: colors.black },
            ]}
          >
            {user?.name}
          </Text>
          <Text
            style={[
              textStyles.body_small_medium,
              { color: colors.grey[400], marginTop: 2 },
            ]}
          >
            {user?.email}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <SettingsTile
            icon={<User size={16} color={colors.grey[500]} />}
            title="Profile"
            onPress={() => navigation.navigate("Edit Profile" as never)}
          />
          <SettingsTile
            icon={<AddressBook size={16} color={colors.grey[500]} />}
            title="Address Book"
            onPress={() => navigation.navigate("Manage Address" as never)}
          />
          <SettingsTile
            icon={<SignIn size={20} color={colors.primary} />}
            title="Sign in"
            titleStyle={{
              color: colors.primary,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const SettingsTile = ({
  icon,
  title,
  titleStyle,
  onPress,
}: {
  icon: ReactElement;
  title: string;
  titleStyle?: TextStyle;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        flexDirection: "row",
        height: 54,
        alignItems: "center",
        gap: 8,
        backgroundColor: pressed ? colors.pressed : colors.white,
      })}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[
          textStyles.body_default_medium,
          { flex: 1, color: colors.grey[500] },
          titleStyle,
        ]}
      >
        {title}
      </Text>
      <ChevronRight color={colors.grey[500]} size={20} />
    </Pressable>
  );
};
