import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/meals-db";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const currentMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.container}>
      <Text>{currentMeal.title}</Text>
      <Button
        title="Go to categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const currentMeal = MEALS.find(meal => meal.id === mealId);
  return {
    title: currentMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Add to favorites" iconName="heart-outline" />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
