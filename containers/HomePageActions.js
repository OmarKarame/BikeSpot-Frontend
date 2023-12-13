import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePageActions({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    padding: 100,
    backgroundColor:'yellow',
    color: 'black',
    fontSize: 20,
  }
});
