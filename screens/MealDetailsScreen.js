import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Details screen</Text>
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

export default MealDetailsScreen;
