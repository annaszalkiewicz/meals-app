import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealCategoryScreen from '../screens/MealCategoryScreen';
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  MealCategory: MealCategoryScreen,
  MealDetails: MealDetailsScreen
});

export default createAppContainer(MealsNavigator);