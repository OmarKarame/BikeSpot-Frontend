import React from 'react';
import { StyleSheet, Keyboard, View, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationInput from '../components/LocationInput';

export default function Home() {
  const navigation = useNavigation();

  const locationInputHandler = () => {
    return;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#F10000', '#930000', '#640000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.0, 0.75, 1.0]}
          style={styles.innerShadow}
        />
        <LocationInput
          locationInputHandler={locationInputHandler}
          placeholderText={'From'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640000',
    height: 840,
    width: 'auto',
    padding: 0,
  },
  innerShadow: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
});
