import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import AdditionalContentButtons from './AdditionalContentButtons'
import AdditionalContentAds from './AdditionalContentAds'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function AdditionalContentContainer() {
  return (
    <View style={styles.container}>
      <AdditionalContentButtons />
      <AdditionalContentAds />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 90/100,
    height: screenHeight * 30/100,
    borderRadius: 8,
    marginTop: 3,
  },
})
