import React from "react";
import { View, StyleSheet } from "react-native";

import BodyText from "./BodyText";

const ListItem = props => {
  return (
    <View style={styles.container}>
      <BodyText>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginVertical: 5,
    marginHorizontal: 30
  }
});

export default ListItem;
