import React from "react";
import { Text, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import variables from "../constants/variables";

const defaultStackNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "ios" ? "#fff" : "rgba(0,0,0,0.8)"
    },
    headerTintColor: Platform.OS === "ios" ? "#000" : "#fff",
    headerTitleStyle: {
      fontFamily: variables.ralewaySemibold
    }
  }
};

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
  defaultStackNavigationOptions
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
  },
  defaultStackNavigationOptions
);

const tabsConfig = {
  AllMeals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons
            name="food"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: "darkred",
      tabBarLabel: <Text style={{fontFamily: variables.ralewaySemibold, fontSize: 14}}>Meals</Text>
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{fontFamily: variables.ralewaySemibold, fontSize: 14}}>Favorites</Text>,
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons
            name="heart"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: "red"
    }
  }
};

const TabsNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfig, {
        shifting: true,
        barStyle: {
          backgroundColor: "#333"
        }
      })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
          activeTintColor: "red",
          inactiveTintColor: "rgba(0,0,0,0.6)",
          labelStyle: {
            fontFamily: variables.ralewaySemibold,
            fontSize: 16
          }
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  defaultStackNavigationOptions
);

const DrawerNavigator = createDrawerNavigator(
  {
    Meals: TabsNavigator,
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: "darkred",
      inactiveTintColor: "black",
      labelStyle: {
        fontFamily: variables.ralewaySemibold,
        fontSize: 20
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
