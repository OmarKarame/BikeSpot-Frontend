import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgWhiteMagnifyingGlass from '../assets/svgs/svgWhiteMagnifyingGlass';
import { useNavigation, useRoute } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function GetMeSomewhereButton() {
  const [isPressed, setIsPressed] = useState(false);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={1}  // Maintain the same opacity level when pressed
      onPress={() => navigation.navigate('Search', {})}
      style={[
        styles.container,
        { backgroundColor: isPressed ? '#C60000' : '#ED0000' } // Darker red when pressed
      ]}
    >
      <Text style={styles.text}>Get Me Somewhere</Text>
      <SvgXml
        xml={svgWhiteMagnifyingGlass}
        width="25"
        height="25"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: screenWidth * 90/100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
    marginLeft: '30%',
  },
  icon: {
    marginRight: 10,
  },
});
