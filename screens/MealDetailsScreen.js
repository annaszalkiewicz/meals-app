import React from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  Image,
  Text,
  Button,
  StyleSheet
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/meals-db";
import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import BodyText from "../components/ui/BodyText";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const currentMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: currentMeal.imageUrl }}
          style={styles.image} />
      </View>
    </ScrollView>
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
  },
  image: {
    width: '100%',
    height: 200
  }
});

export default MealDetailsScreen;
