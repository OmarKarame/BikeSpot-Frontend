// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationContext from '../components/LocationContext';
import LocationSearchContainer from '../components/LocationSearchContainer';
import MapDisplay from '../components/MapDisplay';
import BikeInfoContainer from '../components/BikeInfoContainer';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function Map() {
  const {
    fromLocation,
    toLocation,
  } = useContext(LocationContext);

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <LocationSearchContainer
            backgroundColor={'#F10000'}
            givenFromLocation={fromLocation}
            givenToLocation={toLocation}
          /> */}
          <Text style={styles.text}>From: {fromLocation}</Text>
          <Text style={styles.text}>To: {toLocation}</Text>
        </View>
        <View style={styles.mapDisplay}>
          <BikeInfoContainer />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: screenHeight * 5/100,
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
    height: 150,
    width: screenWidth,
    backgroundColor: '#ED0000',
    display: 'flex',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: { width: -10, height: -15 },
    shadowColor: '#EC0000',
    shadowOpacity: 0.9,
    shadowRadius: 30,
  },
  mapDisplay:{
    transform: [{translateY: -(screenHeight * 10/100)}]
  },
  text: {
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: '700',
    color: 'white',
    fontSize: 16
  }
});
