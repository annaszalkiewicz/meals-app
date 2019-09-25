import React from "react";
import { View, Button, StyleSheet } from "react-native";
import BodyText from "../components/ui/BodyText";

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <BodyText>Categories screen</BodyText>
      <Button title="Show meals" onPress={() => props.navigation.navigate({routeName: 'MealCategory'})} />
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
