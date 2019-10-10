import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import FilterSwitch from "../components/FilterSwitch";

const FiltersScreen = props => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);

  return (
    <View style={styles.container}>
      <HeadingOne style={styles.title}>Filter meals</HeadingOne>
      <FilterSwitch
        label="Gluten Free"
        value={glutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose free"
        value={lactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegeterian"
        value={isVegeterian}
        onChange={newValue => setIsVegeterian(newValue)}
      />
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
