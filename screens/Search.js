import { StyleSheet, Text, View, Dimensions, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { REACT_APP_GCP_MAP_API_KEY, REACT_APP_LOCATIONIQ_API_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationSearchContainer from '../components/LocationSearchContainer';
import LocationContext from '../components/LocationContext';
import CurrentLocationIcon from '../assets/images/current-location.png';
import LocationIcon from '../assets/images/location-icon.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Search() {
  const [recents, setRecents] = useState([]);
  const [dataJson, setDataJson] = useState([]);
  const [data, setData] = useState([]);
  const [fromRecentsData, setFromRecentsData] = useState({})
  const [toRecentsData, setToRecentsData] = useState({})

  const {
    fromLocation,
    setFromLocation,
    toLocation,
    setToLocation,
    isToCurrentLocation,
    setIsToCurrentLocation,
    isFromCurrentLocation,
    setIsFromCurrentLocation,
    isFromFocused,
    setIsFromFocused,
    isToFocused,
    setIsToFocused,
    currentLocation,
    setCurrentLocation
  } = useContext(LocationContext);

  const addRecent = async (newAddress) => {
    setRecents(currentRecents => {
      // Check if the recent already exists
      if (currentRecents.some(recent => recent.display_name === newAddress.display_name)) {
        return currentRecents;
      }

      const updatedRecents = currentRecents.length >= 10 ? currentRecents.slice(1) : [...currentRecents];
      updatedRecents.push(newAddress);

      AsyncStorage.setItem('recents', JSON.stringify(updatedRecents)).catch(err => {
        console.error('Failed to save recents:', err);
      });

      return updatedRecents;
    });
  };

  const clearRecents = async () => {
    setRecents([]);
    await AsyncStorage.removeItem('recents').catch(err => {
      console.error('Failed to clear recents:', err);
    });
  };

  // change this to the button in the LocationSearchContainer and remove the Button from the bottom of the screen (see comment below)
  const handleGoPress = () => {
    const locationToAdd = isFromFocused ? fromRecentsData : toRecentsData;
    if (locationToAdd) {
      addRecent({ display_place: locationToAdd.display_place, display_name: locationToAdd.display_name });
    }
  };

  const toggleToIcon = (section) => {
    if (section.title == 'Your Location') {
      setIsToCurrentLocation(true);
    } else {
      setIsToCurrentLocation(false);
    }
  };

  const toggleFromIcon = (section) => {
    if (section.title == 'Your Location') {
      setIsFromCurrentLocation(true);
    } else {
      setIsFromCurrentLocation(false);
    }
  };

  useEffect(() => {
    // Load recents from AsyncStorage
    AsyncStorage.getItem('recents').then(data => {
      if (data) {
        setRecents(JSON.parse(data));
      }
    }).catch(err => {
      console.error('Failed to load recents:', err);
    });

    // Clear recents once
    // clearRecents();
  }, []);

  const maxLength = (text) => {
    if (text.length > 70) {
      return `${text.slice(0,70)}...`
    }
    else {
      return text
    }
  }

  const filterSections = () => {
    if (
      (isFromFocused && fromLocation !== '') ||
      (isToFocused && toLocation !== '')
    ) {
      return [
        {
          id: '2',
          title: 'Places',
          data: Array.isArray(dataJson) ? dataJson.map(place => ({
            display_place: place.display_place,
            display_name: maxLength(place.display_name)
          })) : [],
          image: LocationIcon
        },
      ];
    } else {
      return [
        {
          id: '0',
          title: 'Your Location',
          data: [{ display_place: 'Current Location', display_name: currentLocation }],
          image: CurrentLocationIcon
        },
        {
          id: '1',
          title: 'Recents',
          data: recents,
          image: LocationIcon
        },
      ];
    }
  };

  useEffect(() => {
    setData(filterSections());
  }, [fromLocation, toLocation, isFromFocused, isToFocused, recents, currentLocation, dataJson]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      setFromLocation(`${address[0].city}, ${address[0].street}`);
    })();
  }, []);

  async function getLocationData(location) {
    const response = await fetch(`https://api.locationiq.com/v1/autocomplete?key=${REACT_APP_LOCATIONIQ_API_KEY}&q=${location}&limit=5&dedupe=1&viewbox=-0.510375,51.691874,0.334015,51.286760&bounded=1`);
    const data = await response.json();
    setDataJson(data);
  }

  useEffect(() => {
    if (fromLocation) {
      getLocationData(fromLocation);
    }
  }, [fromLocation]);

  useEffect(() => {
    if (toLocation) {
      getLocationData(toLocation);
    }
  }, [toLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LocationSearchContainer
          backgroundColor={'#F10000'}
          addRecent={handleGoPress}
        />
      </View>
      <View style={styles.body}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={({ item, section }) => (
            <TouchableOpacity onPress={() => {
              const setLocation = isFromFocused ? setFromLocation : setToLocation;
              setLocation(item.display_place);
              isFromFocused ? setFromRecentsData({
                display_place: item.display_place,
                display_name: item.display_name
              }) : setToRecentsData({
                display_place: item.display_place,
                display_name: item.display_name
              })
              const toggleFunction = isFromFocused ? toggleFromIcon : toggleToIcon;
              toggleFunction(section);
            }} style={styles.touchableItem}>
              <View style={styles.placeContainer}>
                <Image source={section.image} style={styles.image} />
                <View>
                  <Text style={styles.place}>{item.display_place}</Text>
                  <Text style={styles.secondaryPlace}>{item.display_name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
          // ListEmptyComponent={<Text></Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    zIndex: 22
  },
  sectionHeader: {
    marginTop: 30,
    zIndex: 22,
    fontWeight: '600',
    marginLeft: 5,
    marginBottom: 4,
  },
  body: {
    height: screenHeight * 81 / 100,
    width: screenWidth * 90 / 100,
    transform: [{ translateY: -65 }],
    zIndex: 21,
    paddingBottom: 100,
  },
  touchableItem: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 0,
    marginVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  place: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
    marginLeft: 5,
  },
  secondaryPlace: {
    fontSize: 8,
    color: '#333',
    fontWeight: '400',
    marginLeft: 5,
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25
  },
  image: {
    height: 20,
    width: 20,
  }
});
