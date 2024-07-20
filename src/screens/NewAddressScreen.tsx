import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import useAuth from "@/shared/hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/styles";
import uuid from "react-native-uuid";
import Header from "@components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "@components/Input";
import Button from "@components/Button";
import {
  AddressScreenNavigationProp,
  AddressScreenRouteProp,
} from "@root/types";

export default function NewAddressScreen() {
  const route = useRoute<AddressScreenRouteProp>();
  const navigation = useNavigation<AddressScreenNavigationProp>();
  const addressID = route.params?.id;
  const { user, dispatch } = useAuth();
  const address = addressID
    ? user?.address.list.find((address) => address.id === addressID)
    : undefined;

  const [addressData, setAddressData] = useState({
    name: address?.name ?? "",
    phone: address?.phone ?? "",
    address: address?.address.address ?? "",
    state: address?.address.state ?? "",
    lga: address?.address.lga ?? "",
    setDefault: false,
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      // Code to run on subsequent renders
    }
  }, [addressData]);

  const saveDetails = () => {
    if (addressID) {
      dispatch?.({
        type: "edit_address",
        payload: {
          id: addressID,
          value: {
            id: addressID,
            name: addressData.name,
            phone: addressData.phone,
            address: {
              address: addressData.address,
              state: addressData.state,
              lga: addressData.lga,
            },
          },
        },
      });
    } else {
      dispatch?.({
        type: "add_address",
        payload: {
          id: uuid.v4() as string,
          name: addressData.name,
          phone: addressData.phone,
          address: {
            address: addressData.address,
            state: addressData.state,
            lga: addressData.lga,
          },
        },
      });
    }
    navigation.goBack();
  };

  const difference =
    address?.name !== addressData.name ||
    address?.phone !== addressData.phone ||
    address?.address.address !== addressData.address ||
    address?.address.state !== addressData.state ||
    address?.address.lga !== addressData.lga;

  const nameError = isFirstRender.current
    ? undefined
    : addressData.name
    ? undefined
    : "Name is required";
  const phoneError = isFirstRender.current
    ? undefined
    : !addressData.phone
    ? "Phone is required"
    : /[a-zA-Z]/.test(addressData.phone)
    ? "Only numbers and symbols are allowed"
    : undefined;
  const addressError = isFirstRender.current
    ? undefined
    : addressData.address
    ? undefined
    : "Address is required";
  const stateError = isFirstRender.current
    ? undefined
    : addressData.state
    ? undefined
    : "State is required";

  const validSubmission =
    difference && !nameError && !phoneError && !addressError && !stateError;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Header title={addressID ? "Edit Address" : "New Address"} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
          backgroundColor: colors.white,
          paddingVertical: 20,
        }}
      >
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
            value={addressData.name}
            onChangeText={(text) =>
              setAddressData({ ...addressData, name: text })
            }
            autoComplete="name"
            error={nameError}
          />
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={addressData.phone}
            onChangeText={(text) =>
              setAddressData({ ...addressData, phone: text })
            }
            autoComplete="tel"
            inputMode="tel"
            error={phoneError}
          />
          <Input
            label="Address"
            placeholder="Enter your address"
            value={addressData.address}
            onChangeText={(text) =>
              setAddressData({ ...addressData, address: text })
            }
            error={addressError}
          />
          <Input
            label="State"
            placeholder="Enter your state"
            value={addressData.state}
            onChangeText={(text) =>
              setAddressData({ ...addressData, state: text })
            }
            error={stateError}
          />
          <Input
            label="L.G.A"
            placeholder="Enter your L.G.A"
            value={addressData.lga}
            onChangeText={(text) =>
              setAddressData({ ...addressData, lga: text })
            }
          />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Button
            title={addressID ? "Save Changes" : "Save Address"}
            disabled={!validSubmission}
            onPress={saveDetails}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
