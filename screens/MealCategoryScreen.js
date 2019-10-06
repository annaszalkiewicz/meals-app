import React from "react";

import { CATEGORIES } from "../data/category-db";
import { MEALS } from "../data/meals-db";
import MealsList from "../components/MealsList";

const MealCategoryScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  // const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  const mealsInCategory = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealsList navigation={props.navigation} listData={mealsInCategory} />;
};

MealCategoryScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  return {
    title: currentCategory.title
  };
};

export default MealCategoryScreen;
