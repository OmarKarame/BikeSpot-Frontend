import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationProvider } from './components/LocationContext';
import NavBarWrapper from './components/NavBarWrapper';
import Home from './screens/Home'
import Chat from './screens/Chat'
import Map from './screens/Map'
import Settings from './screens/Settings'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <LocationProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animationEnabled: false, animation: 'none' }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
          <NavBarWrapper />
        </View>
      </NavigationContainer>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
