import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function TakeMe({ icon, location, isWork }) {
  const [isPressed, setIsPressed] = useState(false);

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
      <Image source={icon} style={isWork ? [{
        height: 44,
        width: 42,
        marginTop: 10
      }] : styles.image}
      />
      <Text style={isWork ? [{
        fontSize: 12,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: -5,
        fontWeight: '600',
        }] : styles.setLocation}
      >
        Take Me {location}
      </Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    minWidth:'12%',
    alignItems: 'center',
    maxWidth: '24%',
    backgroundColor: 'rgba(195, 222, 231, 0.5)',
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: 'rgba(195, 222, 231, 1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: '100%'
  },
  image: {
    height: 60,
    width: 60,
    marginTop: 4,
  },
  setLocation: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -14,
    fontWeight: '600',
  }
})
