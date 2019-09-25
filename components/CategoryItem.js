import React from "react";
import { View, StyleSheet } from "react-native";

import BodyText from "../components/ui/BodyText";

const CategoryItem = props => {
  return (
    <View>
      <BodyText>{props.title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;
