import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Variables from '../../constants/variables'

const BodyText = props => {
  return (
      <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Variables.raleway,
    fontSize: 16
  }
});

export default BodyText
