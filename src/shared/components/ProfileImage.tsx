import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Profile from "@vectors/Profile";
import { colors } from "@/styles";
import Edit from "@vectors/Edit";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../hooks/useAuth";

export default function ProfileImage({ size }: { size: number }) {
  const { user, dispatch } = useAuth();
  // const [image, setImage] = useState<string | undefined>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled && result.assets?.length) {
      // setImage(result.assets[0].uri);
      dispatch?.({
        type: "add_image",
        payload: result.assets[0].uri as string,
      });
    }
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={pickImage}
    >
      <View
        style={{
          width: (size / 70) * 24,
          height: (size / 70) * 24,
          borderRadius: size / 7,
          backgroundColor: colors.primary,
          position: "absolute",
          top: 0,
          right: 0,
          transform: [
            { translateX: (size / 70) * 8 },
            { translateY: -(size / 70) * 8 },
          ],
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Edit color={colors.white} size={(size / 70) * 14} />
      </View>
      {user?.image ? (
        <Image
          source={{ uri: user.image }}
          width={size}
          height={size}
          style={{ width: size, height: size, borderRadius: size / 3 }}
        />
      ) : (
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 3,
            backgroundColor: "rgba(165, 180, 203, 0.41)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Profile color="white" size={size / 2} />
        </View>
      )}
    </Pressable>
  );
}
