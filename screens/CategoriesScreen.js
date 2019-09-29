import React from "react";
import { FlatList, TouchableOpacity, Platform, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/category-db";
import CategoryItem from "../components/CategoryItem";
import variables from "../constants/variables";

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
  title: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? '#fff' : "rgba(0,0,0,0.8)"
  },
  headerTintColor: Platform.OS === 'ios' ? '#000' : "#fff",
  headerTitleStyle: {
    fontFamily: variables.ralewaySemibold
  }
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150
  }
});

export default CategoriesScreen;
