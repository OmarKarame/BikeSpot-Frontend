import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import React from 'react'
import svgDarkGreyHouse from '../assets/svgs/svgDarkGreyHouse'

export default function TakeMeHome() {
  return (
  <View style={styles.container}>
    <TouchableOpacity>
      <View style={styles.content}>
        <SvgXml
          xml={svgDarkGreyHouse}
          width="30"
          height="30"
        />
        <Text style={styles.setLocation}>
          Take Me Home
        </Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    height: '100%',
    borderColor: 'darkgrey',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
    minWidth:'12%',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%'
  },
  setLocation: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500'
  }
})
