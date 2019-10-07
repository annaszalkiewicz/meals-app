import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/category-db";
import CategoryItem from "../components/CategoryItem";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: "MealCategory",
            params: { categoryId: item.id }
          })
        }
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

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150
  }
});

export default CategoriesScreen;
