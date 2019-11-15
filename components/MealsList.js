import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from 'react-redux';

import MealItem from "./MealItem";

const MealsList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderItem = ({ item }) => {
    const isFavorite = favoriteMeals.some(meal => meal.id === item.id);

    return (
      <MealItem
        item={item}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { 
              mealId: item.id,
              mealTitle: item.title,
              isFavorite: isFavorite
            }
          })
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, i) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default MealsList;
