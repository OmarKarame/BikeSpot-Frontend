import { StyleSheet, View, Dimensions } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import LocationContext from '../components/LocationContext';
import LocationInput from '../components/LocationInput';
import svgWhiteSwap from '../assets/svgs/svgWhiteSwap';
import svgWhiteMagnifyingGlass from '../assets/svgs/svgWhiteMagnifyingGlass';
import currentLocation from '../assets/images/current-location.png';
import locationIcon from '../assets/images/location-icon.png';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function LocationSearchContainer({ backgroundColor}) {
  const {
    fromLocation,
    setFromLocation,
    toLocation,
    setToLocation,
    isCurrentLocation,
    setIsCurrentLocation
  } = useContext(LocationContext);

  const navigation = useNavigation();


  const handleSetCurrentLocation = () => {
    setIsCurrentLocation(false)
  }

  const fromLocationInputHandler = (event) => {
    setFromLocation(event)
    setIsCurrentLocation(false)
  }

  const toLocationInputHandler = (event) => {
    setToLocation(event)
  }

  const handleLocationSwap = () => {
    const newFromLocation = toLocation;
    const newToLocation = fromLocation;

    setFromLocation(newFromLocation);
    setToLocation(newToLocation);
    setIsCurrentLocation(false);
  }

  const handleSearch = () => {
    if (fromLocation && toLocation !== '') {
      navigation.navigate('Map', {})
    }
    else {
      // Potentailly add a pop up that says the user needs to input to and from locations to search
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      // Optionally, use reverse geocoding to convert coords to a readable address
      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address.length > 0 && fromLocation == '')  {
        setFromLocation(`${address[0].city}, ${address[0].street}`);
      }
    })();
  }, []);

  const dynamicStyles = StyleSheet.create({
    container: {
      width: screenWidth,
      paddingTop: backgroundColor ? screenHeight * 7 / 100 : 0,
      alignItems: 'center',
      borderRadius: 20,
      transform: backgroundColor ? [{ translateY: - screenHeight * 5 / 100 }] : [{translateY: 0}],
      backgroundColor: backgroundColor || 'transparent',
      paddingBottom: backgroundColor ? 20 : 0,
      shadowColor: backgroundColor ? '#EC0000' : 'transparent',
      shadowOffset: backgroundColor ? { width: -10, height: -15 } : 0,
      shadowOpacity: backgroundColor ? 0.9 : 0,
      shadowRadius: backgroundColor ? 30 : 0,
    },
    innerShadow: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '230%',
      width: '100%',
      borderRadius: 20,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <LinearGradient
        colors={['#af2f3f', '#500d1f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.0, 0.95]}
        // style={backgroundColor ? dynamicStyles.innerShadow : {}}
      />
      <LocationInput
        value={fromLocation}
        locationInputHandler={fromLocationInputHandler}
        placeholderText={'From'}
        icon={svgWhiteSwap}
        handlePress={handleLocationSwap}
        buttonText={'Swap'}
        buttonColor={'rgba(0,0,0, 1)'}
        buttonInfoColor={'white'}
        text={'Start'}
        isCurrentLocation={isCurrentLocation}
        setCurrentLocation={handleSetCurrentLocation}
        image={isCurrentLocation ? currentLocation : locationIcon}
      />
      <LocationInput
        value={toLocation}
        locationInputHandler={toLocationInputHandler}
        placeholderText={'To'}
        icon={svgWhiteMagnifyingGlass}
        handlePress={handleSearch}
        buttonText={'Go'}
        buttonColor={'rgba(236,3,0,1)'}
        buttonInfoColor={'black'}
        text={'End'}
        image={locationIcon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})
