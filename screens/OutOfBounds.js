import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function OutOfBounds() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  body: {
    height: screenHeight-60,
    width: screenWidth,
    zIndex: 20,
    paddingBottom: 100,
    backgroundColor: '#333',
  }
})
