import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux';

import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
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
