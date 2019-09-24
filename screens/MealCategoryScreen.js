import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealCategoryScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Category Screen</Text>
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

export default MealCategoryScreen;
