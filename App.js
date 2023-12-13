import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePageActions from './containers/HomePageActions';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.base} />
      <HomePageActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D20000',
    height: '100vh',
    width: '100vw',
  },
  base: {
    flex: 1,
    backgroundColor: '#7C0000',
    alignItems: 'bottom',
    justifyContent: 'center',
    height: '20vh',
    width: '100vw',

  },
});
