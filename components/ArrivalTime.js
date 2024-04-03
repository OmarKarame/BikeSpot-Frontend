import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import React from 'react'
import svgDarkGreyTimer from '../assets/svgs/svgDarkGreyTimer';

export default function ArrivalTime({ isLocationSet }) {
  const currentTime = new Date();

  const hours = currentTime.getHours().toString();
  const minutes = currentTime.getMinutes().toString();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log(isLocationSet)}>
        <View style={styles.content}>
          <SvgXml
            xml={svgDarkGreyTimer}
            width="30"
            height="30"
          />
          <Text style={[styles.arrivalTime, { color: isLocationSet ? 'black' : 'lightgrey' }]}>
            {/* {hours.padStart(2, '0')}:{minutes.padStart(2, '0')} */}
            30 Min
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%'
  },
  arrivalTime: {
    fontSize: 15,
    fontWeight: '500'
  }
})
