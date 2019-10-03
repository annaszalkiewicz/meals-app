import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomHeaderButton = props => {
  const color = Platform.OS === "ios" ? "#000" : "#fff";
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={24}
      color={color}
    />
  );
};

export default CustomHeaderButton;
