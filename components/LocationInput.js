import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg';
import React from 'react'

const screenWidth = Dimensions.get('window').width;

export default function LocationInput({ value, locationInputHandler, placeholderText, icon, handlePress }) {

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={locationInputHandler}
        placeholder={placeholderText}
        placeholderTextColor={"grey"}
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
    height: 36,
    width: screenWidth * 90/100,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'space-around'
  },
  input: {
    width: '85%',
    fontSize: 16,
  },
  icon: {
  }
})
