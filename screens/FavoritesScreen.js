import React from "react";

import { MEALS } from "../data/meals-db";
import MealsList from "../components/MealsList";

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealsList navigation={props.navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = {
  title: "Favorites Meals"
};

export default FavoritesScreen;
