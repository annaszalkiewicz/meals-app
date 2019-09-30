import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

import BodyText from './ui/BodyText';
import HeadingOne from './ui/HeadingOne';

const MealItem = props => {
  return (
    <TouchableOpacity>
      <View>
        <View>
          <ImageBackground source={{uri: props.item.imageUrl}} style={styles.image}>
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
  image: {
    width: 300,
    height: 200
  }
});
export default MealItem;
