import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Details screen</Text>
      <Button title="Go to categories" onPress={() => {
        props.navigation.popToTop();
      }} />
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
