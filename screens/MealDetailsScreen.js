import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import BodyText from "../components/ui/BodyText";
import ListItem from "../components/ui/ListItem";
import { toggleFavorite } from '../store/actions/meals';

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam("mealId");
  const currentMeal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  }, [toggleFavoriteHandler])
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
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavHandler = navigationData.navigation.getParam('toggleFav');
  return {
    title: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Add to favorites" iconName="heart-outline" onPress={toggleFavHandler} />
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
