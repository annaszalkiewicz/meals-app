import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import variables from "../constants/variables";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Meal Categories"
      }
    },
    MealCategory: MealCategoryScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "#fff" : "rgba(0,0,0,0.8)"
      },
      headerTintColor: Platform.OS === "ios" ? "#000" : "#fff",
      headerTitleStyle: {
        fontFamily: variables.ralewaySemibold
      }
    }
  }
);

const TabsNavigator = createBottomTabNavigator(
  {
    AllMeals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <MaterialCommunityIcons name="food" size={24} color={tabInfo.tintColor} />
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <MaterialCommunityIcons name="heart" size={24} color={tabInfo.tintColor} />
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "rgba(0,0,0,0.6)"
    }
  }
);

export default createAppContainer(TabsNavigator);
