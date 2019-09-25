import React from "react";
import { Text, StyleSheet } from "react-native";
import variables from "../../constants/variables";

const HeadingOne = props => {
  return (
    <Text style={{ ...styles.heading, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: variables.ralewaySemibold,
    fontSize: 24,
    textAlign: "center"
  }
});
export default HeadingOne;
