import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const MealItem = props => {
  return (
    <TouchableOpacity>
        <View>
          <Text>{props.item.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
});
export default MealItem;
