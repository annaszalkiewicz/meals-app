import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import FilterSwitch from "../components/FilterSwitch";

const FiltersScreen = props => {
  return (
    <View style={styles.container}>
      <HeadingOne style={styles.title}>Filter meals</HeadingOne>
      <FilterSwitch>Gluten free</FilterSwitch>
      <FilterSwitch>Lactose free</FilterSwitch>
      <FilterSwitch>Vegan</FilterSwitch>
      <FilterSwitch>Vegeterian</FilterSwitch>
    </View>
  );
};

FiltersScreen.navigationOptions = data => {
  return {
    title: "Filter meals",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    marginVertical: 20
  }
});

export default FiltersScreen;
