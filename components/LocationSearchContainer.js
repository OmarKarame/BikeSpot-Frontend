import { StyleSheet, View, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import LocationInput from '../components/LocationInput';
import svgGreySwap from '../assets/images/svgGreySwap'
import svgGreyMagnifyingGlass from '../assets/images/svgGreyMagnifyingGlass';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function LocationSearchContainer({ backgroundColor }) {
  const navigation = useNavigation();
  const [fromLocation, setFromLocation] = useState('')
  const [toLocation, setToLocation] = useState('')

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
      navigation.navigate('Map')
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
    },
  });

  return (
    <View style={dynamicStyles.container}>
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
