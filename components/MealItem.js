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
            <View>
              <HeadingOne>{props.item.title}</HeadingOne>
            </View>
          </ImageBackground>
        </View>
        <View>
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
    height: 200
  }
});
export default MealItem;
