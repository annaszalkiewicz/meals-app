import React from "react";
import { View, StyleSheet } from "react-native";
import BodyText from "../components/ui/BodyText";

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <BodyText>Categories screen</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
