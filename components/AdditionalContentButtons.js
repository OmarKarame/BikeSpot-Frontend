import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DepartureTime from './DepartureTime'
import TakeMeHome from './TakeMeHome'
import ArrivalTime from './ArrivalTime'

export default function AdditionalContentButtons() {
  return (
    <View style={styles.container}>
      <DepartureTime />
      <TakeMeHome />
      <ArrivalTime isLocationSet={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    height: '30%',
  }
})
