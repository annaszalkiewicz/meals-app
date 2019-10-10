import React from "react";
import { View, Switch, StyleSheet, Platform } from "react-native";
import HeadingOne from "./ui/HeadingOne";

const FilterSwitch = props => {
  return (
    <View style={styles.container}>
      <HeadingOne style={styles.heading}>{props.label}</HeadingOne>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: "darkred" }}
        thumbColor={Platform.OS === "android" ? "darkred" : ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    fontSize: 18
  }
});

export default FilterSwitch;
