import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg';
import React from 'react'

const screenWidth = Dimensions.get('window').width;

export default function LocationInput({ locationInputHandler, placeholderText, icon, handlePress }) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={locationInputHandler}
        placeholder={placeholderText}
      />
      <TouchableOpacity onPress={handlePress}>
        <SvgXml
          xml={icon}
          width="20"
          height="20"
          style={styles.icon}
        />
      </TouchableOpacity>
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
    marginVertical: 10,
    justifyContent: 'space-around'
  },
  input: {
    width: '85%',
    // borderBlockColor: 'black',
    // borderWidth: 2,
    fontSize: 16,
  },
  icon: {
  }
})
