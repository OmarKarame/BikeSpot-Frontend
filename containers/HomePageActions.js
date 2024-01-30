import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePageActions({ title }) {
  return (
    <View>
      <Text style={styles.centerText}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    padding: 40,
    backgroundColor:'white',
    color: 'black',
    fontSize: 30,
  }
});
