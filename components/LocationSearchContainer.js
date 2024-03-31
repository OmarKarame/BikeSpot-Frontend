import { StyleSheet, View } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import LocationInput from '../components/LocationInput';
import svgGreySwap from '../assets/images/svgGreySwap'
import svgGreyMagnifyingGlass from '../assets/images/svgGreyMagnifyingGlass';

export default function LocationSearchContainer() {
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
    navigation.navigate('Map')
  }

  useEffect(() => {
    console.log(`Updated\nFrom: ${fromLocation} \nTo: ${toLocation}`);
  }, [fromLocation, toLocation]);

  return (
    <View>
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
