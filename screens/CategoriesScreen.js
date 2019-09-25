import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/category-db";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = props => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate({ routeName: "MealCategory" })}
        style={styles.container}
      >
        <CategoryItem title={item.title} color={item.color} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  title: 'Meal Categories'
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150
  }
});

export default CategoriesScreen;
