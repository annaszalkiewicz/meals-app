import React from "react";
import { View, StyleSheet } from "react-native";

import HeadingOne from "../components/ui/HeadingOne";

const CategoryItem = props => {
  return (
    <View style={{ ...styles.container, backgroundColor: props.color }}>
      <HeadingOne>{props.title}</HeadingOne>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 14
  }
});

export default CategoryItem;
