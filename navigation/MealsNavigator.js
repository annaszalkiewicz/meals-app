import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealCategoryScreen from '../screens/MealCategoryScreen';
import MealDetailsScreen from "../screens/MealDetailsScreen";
import variables from '../constants/variables';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Meal Categories'
    }
  },
  MealCategory: MealCategoryScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '#fff' : "rgba(0,0,0,0.8)"
    },
    headerTintColor: Platform.OS === 'ios' ? '#000' : "#fff",
    headerTitleStyle: {
      fontFamily: variables.ralewaySemibold
    }
  }
});

export default createAppContainer(MealsNavigator);