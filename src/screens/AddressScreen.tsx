import {
  View,
  Text,
  Pressable,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import { colors } from "@/styles";
import { fontFamilies } from "@/shared/constants/fonts";
import Star from "@vectors/Star";
import CheckBox from "@vectors/CheckBox";
import AddCircle from "@vectors/AddCircle";
import { Address } from "@/context/Auth";
import useAuth from "@/shared/hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AllAddressScreenNavigationProp } from "@root/types";

export default function AddressScreen() {
  const navigation = useNavigation<AllAddressScreenNavigationProp>();
  const { user, dispatch } = useAuth();
  const defaultID = user?.address.defaultAddressID;
  const [orderedAddresses, setOrderedAddresses] = useState(() => {
    const defaultAddress = user?.address.list.find(
      (address) => address.id === defaultID
    ) as Address;
    const filteredAddresses = user?.address.list.filter(
      (address) => address.id !== defaultID
    );
    const newOrderedAddresses = [defaultAddress, ...(filteredAddresses ?? [])];
    return newOrderedAddresses;
  });

  useEffect(() => {
    const defaultAddress = user?.address.list.find(
      (address) => address.id === defaultID
    ) as Address;
    const filteredAddresses = user?.address.list.filter(
      (address) => address.id !== defaultID
    );
    const newOrderedAddresses = [defaultAddress, ...(filteredAddresses ?? [])];
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setOrderedAddresses(newOrderedAddresses);
  }, [user?.address.list, defaultID]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.primaryBackground,
          paddingTop: 8,
          gap: 8,
          paddingBottom: 40,
          flex: 1,
        }}
      >
        {orderedAddresses.map((address) => (
          <AddressCard
            address={address}
            key={address.id}
            defaultId={defaultID as string}
            setDefault={() =>
              dispatch?.({
                type: "change_default_address",
                payload: address.id,
              })
            }
          />
        ))}
        <Pressable
          style={({ pressed }) => ({
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
            gap: 18,
            backgroundColor: pressed ? colors.pressed : colors.white,
          })}
          onPress={() => navigation.navigate("Address" as never)}
        >
          <AddCircle size={24} color={colors.buttonColor} />
          <Text
            style={{
              fontFamily: fontFamilies.Inter.medium,
              fontSize: 16,
              color: colors.buttonColor,
            }}
          >
            ADD NEW ADDRESS
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const AddressCard = ({
  address,
  defaultId,
  setDefault,
}: {
  address: Address;
  defaultId: string;
  setDefault: () => void;
}) => {
  const navigation = useNavigation<AllAddressScreenNavigationProp>();
  return (
    <View
      style={{
        paddingHorizontal: 21,
        paddingVertical: 14,
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamilies.Inter.medium,
            fontSize: 16,
            color: colors.grey[600],
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {address.name.toUpperCase()}
        </Text>
        <Pressable
          style={({ pressed }) => ({
            height: 32,
            width: 48,
            marginRight: -12,
            marginTop: -8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: pressed ? colors.pressed : colors.white,
          })}
          onPress={() => navigation.navigate("Address", { id: address.id })}
        >
          <Text
            style={{
              color: colors.buttonColor,
              fontSize: 10,
              fontFamily: fontFamilies.Inter.medium,
            }}
          >
            EDIT
          </Text>
        </Pressable>
      </View>
      <Text
        style={{
          fontFamily: fontFamilies.Inter.medium,
          fontSize: 16,
          color: colors.grey[600],
        }}
      >
        {`${address.address.address}${
          address.address.lga ? ", " + address.address.lga : ""
        }${address.address.state ? ", " + address.address.state : "."}`}
      </Text>
      <Text
        style={{
          fontFamily: fontFamilies.Inter.medium,
          fontSize: 16,
          color: colors.grey[600],
        }}
      >
        {address.phone}
      </Text>

      {address.id == defaultId ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            paddingVertical: 10,
          }}
        >
          <Star size={15} color={colors.buttonColor} />
          <Text
            style={{
              fontSize: 10,
              color: colors.grey[400],
              fontFamily: fontFamilies.Inter.regular,
              flex: 1,
            }}
          >
            This is your default address
          </Text>
        </View>
      ) : (
        <Pressable
          style={({ pressed }) => ({
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            paddingVertical: 10,
            backgroundColor: pressed ? colors.pressed : colors.white,
          })}
          onPress={setDefault}
        >
          <CheckBox size={16} color={colors.black} />
          <Text
            style={{
              fontSize: 12,
              color: colors.grey[400],
              fontFamily: fontFamilies.Inter.regular,
              flex: 1,
            }}
          >
            Set as Default Delivery Address
          </Text>
        </Pressable>
      )}
    </View>
  );
};
