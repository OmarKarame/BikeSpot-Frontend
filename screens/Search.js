import { StyleSheet, Text, View, Dimensions, SectionList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationSearchContainer from '../components/LocationSearchContainer'
import LocationContext from '../components/LocationContext';
import CurrentLocation from '../assets/images/current-location.png'
import LocationIcon from '../assets/images/location-icon.png'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function Search() {
  // const [yourLocation, setYourLocation] = useState(fromLocation);
  const [recents, setRecents] = useState([]);
  const [data, setData] = useState([]);
  const [toLocationSelected, setToLocationSelected] = useState(false)
  const [fromLocationSelected, setFromLocationSelected] = useState(false)

  const {
    fromLocation,
    setFromLocation,
    toLocation,
    setToLocation,
    isCurrentLocation,
    setIsCurrentLocation
  } = useContext(LocationContext);

  const addRecent = async (newAddress) => {
    setRecents(prevRecents => {
      const updatedRecents = prevRecents.length >= 3 ? prevRecents.slice(1) : [...prevRecents];
      updatedRecents.push(newAddress);

      // Save to AsyncStorage
      AsyncStorage.setItem('recents', JSON.stringify(updatedRecents)).catch(err => {
        console.error('Failed to save recents:', err);
      });

      return updatedRecents;
    });
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
  }, []);


  // Create a variable that stores a boolean of the focus of the text input of the fromLocation and toLocation
  // Filter based on which is in focus
  useEffect(() => {
    const initialData = [
      {
        id: '0',
        title: 'Your Location',
        data: [fromLocation],
        image: CurrentLocation
      },
      {
        id: '1',
        title: 'Recents',
        data: recents,
        image: LocationIcon
      },
      {
        id: '2',
        title: 'Places',
        data: [
          "British Museum",
          "Tower of London",
          "Buckingham Palace",
          "The Shard",
          "Natural History Museum",
          "London Eye",
          "Tate Modern",
          "Science Museum",
          "Victoria and Albert Museum",
          "Tower Bridge",
          "Royal Observatory Greenwich",
          "St. Paul's Cathedral",
          "Westminster Abbey",
          "Hyde Park",
          "Churchill War Rooms",
          "Kensington Palace",
          "Covent Garden",
          "Piccadilly Circus",
          "The National Gallery",
          "The Museum of London",
          "Hampton Court Palace",
          "ZSL London Zoo",
          "Trafalgar Square",
          "The Royal Air Force Museum",
          "Shakespeare's Globe",
          "Somerset House",
          "The British Library",
          "Regent's Park",
          "Camden Market",
          "The Gherkin",
          "Houses of Parliament",
          "The Royal Albert Hall",
          "Madame Tussauds",
          "The London Dungeon",
          "The O2",
          "Little Venice",
          "The Wallace Collection",
          "Leicester Square",
          "Greenwich Park",
          "Barbican Centre",
          "London Transport Museum",
          "Carnaby Street",
          "Borough Market",
          "Chinatown",
          "Kew Gardens",
          "Imperial War Museum",
          "Harrods",
          "The Design Museum",
          "Wembley Stadium",
          "Battersea Power Station",
          "Sky Garden",
          "Old Royal Naval College",
          "Serpentine Gallery",
          "Thames River Cruise",
          "St. James's Park",
          "Oxford Street",
          "Whitechapel Gallery",
          "BFI Southbank",
          "Queen Elizabeth Olympic Park",
          "Neal's Yard",
          "Saatchi Gallery",
          "Millennium Bridge",
          "Southbank Centre",
          "The Courtauld Gallery",
          "Canary Wharf",
          "Hampstead Heath",
          "Brick Lane",
          "Royal Courts of Justice",
          "London Bridge",
          "Chelsea Physic Garden",
          "The Clink Prison Museum",
          "Museum of London Docklands",
          "Bank of England Museum",
          "Richmond Park",
          "Museum of Comedy",
          "The Monument",
          "Holland Park",
          "Cutty Sark",
          "Emirates Air Line cable car",
          "Guildhall",
          "Royal Exchange",
          "Tate Britain",
          "Crystal Palace Park",
          "Dulwich Picture Gallery",
          "London Aquarium",
          "Alexandra Palace",
          "Benjamin Franklin House",
          "King's Cross Station",
          "Queen's House",
          "Royal Botanic Gardens, Kew",
          "Fulham Palace",
          "Museum of Brands",
          "The Postal Museum",
          "Primrose Hill",
          "Science Gallery",
          "St Katharine Docks",
          "Wellcome Collection",
          "Whitehall",
          "Pudding Lane",
          "Apsley House",
          "Fortnum & Mason",
          "Dr. Johnson's House",
          "Smithfield Market"
        ],
        image: LocationIcon
      },
    ];
    const newData = initialData.map(section => {
      // Apply filtering only to the 'Places' section
      if (section.title === "Places" && toLocation) {
        const filteredPlaces = section.data.filter(place =>
          place.toLowerCase().startsWith(toLocation.toLowerCase())
        );
        return { ...section, data: filteredPlaces };  // Return a new object with filtered data
      }
      return section;  // Return unmodified for other sections
    });

    setData(newData);
  }, [toLocation, recents, fromLocation]);


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


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LocationSearchContainer
          backgroundColor={'#F10000'}
          addRecent={addRecent}
        />
      </View>
      {/* <Image source={CurrentLocation} style={styles.image} /> */}
      <View style={styles.body}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={({ item, section }) => (
            <TouchableOpacity
              onPress={() => {setToLocation(item)}}
              style={styles.touchableItem}
            >
              <View style={styles.placeContainer}>
                <Image source={section.image} style={styles.image}/>
                {/* <Text>{section.title}</Text> */}
                <Text style={styles.place}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={<Text>No data available.</Text>}
        />
      </View>
    </View>
  )
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
    height: screenHeight * 81/100,
    width: screenWidth * 90/100,
    // borderWidth: 2,
    // borderBlockColor: 'black',
    transform: [{ translateY: -80 }],
    zIndex: 21
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
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
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
