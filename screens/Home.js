import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Keyboard, View, TouchableWithoutFeedback, StatusBar, Text, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationSearchContainer from '../components/LocationSearchContainer';
import AdditionalContentContainer from '../components/AdditionalContentContainer';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'AlfaSlabOne': require('../assets/fonts/AlfaSlabOne-Regular.ttf'),
  });
}

const screenHeight = Dimensions.get('window').height

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading spinner, etc.
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <LinearGradient
            // colors={['#F10000', '#930000', '#640000']}
            colors={['#af2f3f', '#500d1f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.0, 0.95]}
            // locations={[0.0, 0.75, 1.0]}
            style={styles.innerShadow}
        />
        <View style={styles.foreground}>
          <View style={styles.header}>
            <Image source={require('../assets/images/bikespot-logo.png')} style={styles.bikespotLogo}/>
            <Text style={styles.headerText}>
              BikeSpot
            </Text>
          </View>
          <StatusBar
            backgroundColor="white"
            barStyle="light-content"
          />
          <View style={styles.content}>
            <LocationSearchContainer />
            <AdditionalContentContainer />
          </View>
        </View>
        <View style={styles.background}>
          <View style={styles.backgroundContent}>
            <Image source={require('../assets/images/london-skyline.png')} style={styles.londonSkyline}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around'
  },
  foreground:{
    height: screenHeight * 80/100,
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
  header: {
    zIndex: 1,
    transform: [{translateY: -50}],
    alignItems: 'center'
  },
  bikespotLogo: {
    height: 200,
    width: 200,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AlfaSlabOne',
    transform: [{translateY: -20}]
  },
  content: {
    // transform: [{translateY: -screenHeight * 0/100}],
    alignItems: 'center',
  },
  backgroundContent: {
    height: 'auto',
    transform: [{translateY: -80}],
    opacity: 0.3,
  }
});
