import React from 'react';
import { StyleSheet, Keyboard, View, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationSearchContainer from '../components/LocationSearchContainer';

export default function Home() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
      />
        <LinearGradient
          colors={['#F10000', '#930000', '#640000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.0, 0.75, 1.0]}
          style={styles.innerShadow}
        />
        <LocationSearchContainer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerShadow: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
});
