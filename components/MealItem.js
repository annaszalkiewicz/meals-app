import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BodyText from "./ui/BodyText";
import HeadingOne from "./ui/HeadingOne";

const MealItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <ImageBackground
            source={{ uri: props.item.imageUrl }}
            style={styles.image}
          >
            <View style={styles.headingContainer}>
              <HeadingOne style={styles.heading}>{props.item.title}</HeadingOne>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textBodyContainer}>
          <View style={styles.textContainer}>
            <MaterialCommunityIcons
              name="timer"
              size={18}
              style={styles.icon}
            />
            <BodyText>{props.item.duration}m</BodyText>
          </View>
          <View style={styles.textContainer}>
            <MaterialCommunityIcons
              name="circle-slice-3"
              size={18}
              style={styles.icon}
            />
            <BodyText>{props.item.complexity}</BodyText>
          </View>
          <View style={styles.textContainer}>
            <MaterialCommunityIcons name="coin" size={18} style={styles.icon} />
            <BodyText>{props.item.affordability}</BodyText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: "flex-start"
  },
  imageContainer: {
    width: "100%",
    height: 200
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end"
  },
  headingContainer: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  heading: {
    color: "#fff"
  },
  textBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  icon: {
    marginRight: 5
  }
});
export default MealItem;
