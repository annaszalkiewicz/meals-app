import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import HeadingOne from "../components/ui/HeadingOne";

const FiltersScreen = props => {
  return (
    <View style={styles.container}>
      <HeadingOne style={styles.title}>Filter meals</HeadingOne>
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
