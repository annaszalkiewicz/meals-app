import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";

import BodyText from "./ui/BodyText";
import HeadingOne from "./ui/HeadingOne";

const MealItem = props => {
  return (
    <TouchableOpacity>
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
        <View style={styles.textContainer}>
          <BodyText>{props.item.duration}m</BodyText>
          <BodyText>{props.item.complexity}</BodyText>
          <BodyText>{props.item.affordability}</BodyText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: "100%",
    height: 200
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: 'flex-end'
  },
  headingContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  heading: {
    color: '#fff'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});
export default MealItem;
