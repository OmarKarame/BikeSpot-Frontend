import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width;

export default function LocationInput({ locationInputHandler, placeholderText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={locationInputHandler}
        placeholder={placeholderText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: screenWidth * 80/100,
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10
  },
  input: {
    width: '90%',
    // borderBlockColor: 'black',
    // borderWidth: 2,
    fontSize: 16,
  }
})
