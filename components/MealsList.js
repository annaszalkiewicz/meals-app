import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealsList = props => {
  const renderItem = ({ item }) => {
    return (
      <MealItem
        item={item}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { mealId: item.id }
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
