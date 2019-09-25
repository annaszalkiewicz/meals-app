import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from '../data/category-db';
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = props => {

  const renderItem = ({item}) => {
    return (
      <CategoryItem
        title={item.title}
        color={item.color}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
