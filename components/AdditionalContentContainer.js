import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import AdditionalContentButtons from './AdditionalContentButtons'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function AdditionalContentContainer() {
  return (
    <View style={styles.container}>
      <AdditionalContentButtons />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: screenWidth * 90/100,
    height: screenHeight * 18/100,
    borderRadius: 8,
    marginTop: 4,
    transform: [{translateY: -50}]
  },
})
