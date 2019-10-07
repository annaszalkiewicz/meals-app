import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/meals-db";
import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealsList navigation={props.navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = data => {
  return {
    title: "Favorites Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => data.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
