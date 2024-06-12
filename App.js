import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationProvider } from './components/LocationContext';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Map from './screens/Map';
import Settings from './screens/Settings';
import Search from './screens/Search';
import OutOfBounds from './screens/OutOfBounds';
import NavBarWrapper from './components/NavBarWrapper';

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
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="OutOfBounds" component={OutOfBounds} />
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
