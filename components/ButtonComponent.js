import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import React from 'react'

export default function ButtonComponent({ text, icon, buttonColor, buttonInfoColor, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, {backgroundColor: buttonColor}]}>
      {/* <Text style={[styles.text, {color:buttonInfoColor}]}>{text}</Text> */}
      <LinearGradient
        // colors={['#F10000', '#930000', '#640000']}
        // colors={['#af2f3f', '#500d1f']}
        colors={['EC0000', 'black']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        // locations={[0.0, 0.95]}
        locations={[0.0, 0.5]}
        style={styles.innerShadow}
      />
      <SvgXml
        xml={icon}
        width="20"
        height="20"
        style={styles.icon}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    width: '12%',
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  text:{
    fontWeight: '800',
  }
})
