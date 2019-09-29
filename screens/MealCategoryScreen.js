import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from '../data/category-db';

const MealCategoryScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');
  const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  return (
    <View style={styles.container}>
      <Text>Meal Category Screen</Text>
      <Text>{currentCategory.title}</Text>
      <Button title="Show meal details" onPress={() => props.navigation.navigate({routeName: 'MealDetails'})} />

    </View>
  );
};

MealCategoryScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  return {
    title: currentCategory.title
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealCategoryScreen;
