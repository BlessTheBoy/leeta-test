import { Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fontFamilies } from "../constants/fonts";
import ArrowLeft from "@vectors/ArrowLeft";
import { colors } from "@/styles";

export default function Header({ title }: { title?: string }) {
  const route = useRoute();
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        backgroundColor: colors.white,
        padding: 31,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: "relative",
      }}
    >
      {canGoBack ? (
        <Pressable
          style={({ pressed }) => ({
            width: 34,
            height: 34,
            borderRadius: 17,
            backgroundColor: colors.grey[200],
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            opacity: pressed ? 0.5 : 1,
            left: 31,
            top: "50%",
            transform: [{ translateY: 31 - 17 }],
            zIndex: 10,
          })}
          onPress={() =>
            canGoBack
              ? navigation.goBack()
              : navigation.navigate("Home" as never)
          }
        >
          <ArrowLeft size={15} color={colors.text.primary} />
        </Pressable>
      ) : null}
      <Text
        style={{
          fontSize: 19,
          fontFamily: fontFamilies.Inter.semiBold,
          textAlign: "center",
          color: colors.black,
        }}
      >
        {title ?? route.name}
      </Text>
    </SafeAreaView>
  );
}
