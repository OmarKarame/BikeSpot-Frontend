import { StyleSheet, View, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import LocationInput from '../components/LocationInput';
import svgGreySwap from '../assets/svgs/svgGreySwap';
import svgGreyMagnifyingGlass from '../assets/svgs/svgGreyMagnifyingGlass';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function LocationSearchContainer({ backgroundColor, givenFromLocation = '', givenToLocation = '' }) {
  const navigation = useNavigation();
  const [fromLocation, setFromLocation] = useState(givenFromLocation)
  const [toLocation, setToLocation] = useState(givenToLocation)

  const fromLocationInputHandler = (event) => {
    setFromLocation(event)
  }

  const toLocationInputHandler = (event) => {
    setToLocation(event)
  }

  const handleLocationSwap = () => {
    const newFromLocation = toLocation;
    const newToLocation = fromLocation;

    setFromLocation(newFromLocation);
    setToLocation(newToLocation);
  }

  const handleSearch = () => {
    if (fromLocation && toLocation !== '') {
      navigation.navigate('Map', {
        fromLocation: fromLocation,
        toLocation: toLocation
      })
    }
    else {
      // Potentailly add a pop up that says the user needs to input to and from locations to search
    }
  }

  const dynamicStyles = StyleSheet.create({
    container: {
      width: screenWidth,
      paddingTop: backgroundColor ? screenHeight * 10 / 100 : 0,
      alignItems: 'center',
      borderRadius: 30,
      transform: [{ translateY: -50 }],
      backgroundColor: backgroundColor || 'transparent',
      paddingBottom: backgroundColor ? 20 : 0,
      shadowColor: backgroundColor ? '#500d1f' : 'transparent',
      shadowOffset: backgroundColor ? { width: -10, height: -15 } : 0,
      shadowOpacity: backgroundColor ? 0.9 : 0,
      shadowRadius: backgroundColor ? 30 : 0,
    },
    innerShadow: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '250%',
      width: '100%',
      borderRadius: 30,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <LinearGradient
        colors={['#af2f3f', '#500d1f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.0, 0.95]}
        style={backgroundColor ? dynamicStyles.innerShadow : {}}
      />
      <LocationInput
        value={fromLocation}
        locationInputHandler={fromLocationInputHandler}
        placeholderText={'From'}
        icon={svgGreySwap}
        handlePress={handleLocationSwap}
      />
      <LocationInput
        value={toLocation}
        locationInputHandler={toLocationInputHandler}
        placeholderText={'To'}
        icon={svgGreyMagnifyingGlass}
        handlePress={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})
