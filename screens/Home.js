import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePageActions from '../containers/HomePageActions';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.base} /> */}
      <HomePageActions title='Home'/>
      <NavBar page='Home'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D20000',
    height: 840,
    width: 'auto',
    padding: 0,
  },
});
