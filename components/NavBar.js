import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
// import FooterBar from '../assets/images/footer-bar.png';

export default function NavBar({ page }) {
  const SelectedPage = {
    'Home': 0,
    'Map' : 100,
    'Chat' : 200,
    'Settings': 300
  }

  const translateValue = SelectedPage[page] || 0

  return (
    <View style={styles.NavContainer}>
      <Image
        source={require('../assets/images/footer-bar.png')}
        style={[styles.localImage, { transform: [{ translateX: translateValue }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  localImage: {
    width: 430,
    height: 100,
  },
});
