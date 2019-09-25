import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealCategoryScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Category Screen</Text>
      <Button title="Show meal details" onPress={() => props.navigation.navigate({routeName: 'MealDetails'})} />

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
