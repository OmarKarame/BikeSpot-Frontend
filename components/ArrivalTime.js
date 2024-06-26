import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import destinationIcon from '../assets/images/destination-icon.png'

export default function ArrivalTime({ isLocationSet }) {
  const currentTime = new Date();
  const [isPressed, setIsPressed] = useState(false);

  const hours = currentTime.getHours().toString();
  const minutes = currentTime.getMinutes().toString();

  const handlePressIn = () => {
    setIsPressed(true);
  }
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, isPressed ? styles.pressed : {}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.content}>
        <Image source={destinationIcon} style={styles.image} />
        <Text style={[styles.arrivalTime, { color: isLocationSet ? 'black' : 'grey' }]}>
          {/* {hours.padStart(2, '0')}:{minutes.padStart(2, '0')} */}
          0 Min
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: '24%',
    justifyContent: 'center',
    backgroundColor: 'rgba(195, 222, 231, 0.5)',
    height: '100%',
    borderRadius: 10,
  },
  content: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%'
  },
  image: {
    height: 47,
    width: 47,
    marginTop: 6
  },
  pressed: {
    backgroundColor: 'rgba(195, 222, 231, 1)',
  },
  arrivalTime: {
    fontSize: 12,
    marginTop: -10,
    fontWeight: '600',
  }
})
