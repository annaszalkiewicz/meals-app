import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux';

import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";
import FilterSwitch from "../components/FilterSwitch";
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
  const { navigation } = props;
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(
    () => {
      const appliedFilters = {
        glutenFree: glutenFree,
        lactoseFree: lactoseFree,
        isVegan: isVegan,
        isVegeterian: isVegeterian
      }
      dispatch(setFilters(appliedFilters));
      
    },
    [glutenFree, lactoseFree, isVegan, isVegeterian, dispatch],
  )

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])

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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="content-save"
          onPress={data.navigation.getParam('save')}
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
