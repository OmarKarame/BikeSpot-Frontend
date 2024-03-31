import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBarWrapper from './components/NavBarWrapper';
import Home from './screens/home';
import Chat from './screens/chat';
import Map from './screens/map';
import Settings from './screens/settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animationEnabled: false, animation: 'none' }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
        <NavBarWrapper />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
