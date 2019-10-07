import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MEALS } from "../data/meals-db";
import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import BodyText from "../components/ui/BodyText";
import ListItem from "../components/ui/ListItem";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const currentMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: currentMeal.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.textBodyContainer}>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons name="timer" size={18} style={styles.icon} />
          <BodyText>{currentMeal.duration}m</BodyText>
        </View>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons
            name="circle-slice-3"
            size={18}
            style={styles.icon}
          />
          <BodyText>{currentMeal.complexity}</BodyText>
        </View>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons name="coin" size={18} style={styles.icon} />
          <BodyText>{currentMeal.affordability}</BodyText>
        </View>
      </View>
      <View style={styles.headingContainer}>
        <HeadingOne>Ingredients</HeadingOne>
      </View>
      {currentMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <View style={styles.headingContainer}>
        <HeadingOne>Instructions</HeadingOne>
      </View>
      {currentMeal.instructions.map(instruction => (
        <ListItem key={instruction}>{instruction}</ListItem>
      ))}
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
    width: "100%",
    height: 200
  },
  textBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  icon: {
    marginRight: 5
  },
  headingContainer: {
    padding: 20
  }
});

export default MealDetailsScreen;
