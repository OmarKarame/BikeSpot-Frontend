// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationSearchContainer from '../components/LocationSearchContainer';
import MapDisplay from '../components/MapDisplay';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function Map({ route }) {

  const navigation = useNavigation();
  const { fromLocation = '', toLocation = '' } = route.params || {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LocationSearchContainer
            backgroundColor={'#F10000'}
            givenFromLocation={fromLocation}
            givenToLocation={toLocation}
          />
        </View>
        <View style={styles.mapDisplay}>
          <MapDisplay />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight * 5/100,
    backgroundColor: 'black',
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
  header: {
    zIndex: 2,
  },
  mapDisplay:{
    transform: [{translateY: -(screenHeight * 9/100)}]
  }
});
