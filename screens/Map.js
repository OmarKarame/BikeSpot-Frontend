// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePageActions from '../containers/HomePageActions';

export default function Map() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.base} /> */}
      <HomePageActions title='Map'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#D20000',
    // height: 100,
    // width: 100,
    padding: 24,
  },
});
