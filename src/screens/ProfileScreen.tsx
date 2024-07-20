import { View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import ProfileImage from "@components/ProfileImage";
import Input from "@components/Input";
import { colors } from "@/styles";
import Animated from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuth from "@/shared/hooks/useAuth";
import Button from "@components/Button";

export default function ProfileScreen() {
  const { user, dispatch } = useAuth();
  const defaultAddress = user?.address.list.find(
    (address) => address.id === user?.address.defaultAddressID
  );

  const [userData, setUserData] = useState({
    name: user?.name as string,
    phone: user?.phone as string,
    email: user?.email as string,
    address: defaultAddress?.address.address as string,
    state: defaultAddress?.address.state as string,
    lga: defaultAddress?.address.lga as string,
  });

  const saveDetails = () => {
    dispatch?.({
      type: "save_details",
      payload: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      },
    });
    dispatch?.({
      type: "edit_address",
      payload: {
        id: defaultAddress?.id as string,
        value: {
          id: defaultAddress?.id as string,
          name: userData.name,
          phone: userData.phone,
          address: {
            address: userData.address,
            state: userData.state,
            lga: userData.lga,
          },
        },
      },
    });
  };

  const difference =
    user?.name !== userData.name ||
    user?.email !== userData.email ||
    user?.phone !== userData.phone ||
    defaultAddress?.address.address !== userData.address ||
    defaultAddress?.address.state !== userData.state ||
    defaultAddress?.address.lga !== userData.lga;

  const nameError = userData.name ? undefined : "Name is required";
  const phoneError = !userData.phone
    ? "Phone is required"
    : /[a-zA-Z]/.test(userData.phone)
    ? "Only numbers are allowed"
    : undefined;
  const emailError = !userData.email
    ? "Email is required"
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)
    ? "Invalid email address"
    : undefined;
  const addressError = userData.address ? undefined : "Address is required";
  const stateError = userData.state ? undefined : "State is required";

  const validSubmission =
    difference &&
    !nameError &&
    !phoneError &&
    !emailError &&
    !addressError &&
    !stateError;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Header />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
        }}
      >
        <Animated.View
          style={{
            paddingBottom: 20,
            paddingTop: 28,
            alignItems: "center",
          }}
          sharedTransitionTag="tag"
        >
          <ProfileImage size={140} />
        </Animated.View>
        <View
          style={{
            paddingHorizontal: 16,
            gap: 19,
            marginBottom: 20,
          }}
        >
          <Input
            label="Contact Name"
            placeholder="Enter your name"
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
            autoComplete="name"
            error={nameError}
          />
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={userData.phone}
            onChangeText={(text) => setUserData({ ...userData, phone: text })}
            autoComplete="tel"
            inputMode="tel"
            error={phoneError}
          />
          <Input
            label="Email"
            placeholder="Enter your email address"
            value={userData.email}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
            autoComplete="email"
            inputMode="email"
            error={emailError}
          />
          <Input
            label="Address"
            placeholder="Enter your address"
            value={userData.address}
            onChangeText={(text) => setUserData({ ...userData, address: text })}
            error={addressError}
          />
          <Input
            label="State"
            placeholder="Enter your state"
            value={userData.state}
            onChangeText={(text) => setUserData({ ...userData, state: text })}
            error={stateError}
          />
          <Input
            label="L.G.A"
            placeholder="Enter your L.G.A"
            value={userData.lga}
            onChangeText={(text) => setUserData({ ...userData, lga: text })}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Button
            title="Save Changes"
            disabled={!validSubmission}
            onPress={saveDetails}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
