import React from "react";
import { useSelector } from 'react-redux';

import { CATEGORIES } from "../data/category-db";
import MealsList from "../components/MealsList";

const MealCategoryScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const mealsInCategory = availableMeals.filter(
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
