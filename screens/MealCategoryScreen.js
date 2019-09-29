import React from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";

import { CATEGORIES } from '../data/category-db';
import variables from "../constants/variables";

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
    title: currentCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '#fff' : "rgba(0,0,0,0.8)"
    },
    headerTintColor: Platform.OS === 'ios' ? '#000' : "#fff",
    headerTitleStyle: {
      fontFamily: variables.ralewaySemibold
    }
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
