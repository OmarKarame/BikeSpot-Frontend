import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState('')
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isFromCurrentLocation, setIsFromCurrentLocation] = useState(true);
  const [isToCurrentLocation, setIsToCurrentLocation] = useState(false);
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(true);

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
      if (address.length > 0)  {
        const formattedAddress = `${address[0].city}, ${address[0].street}`;
        setCurrentLocation(formattedAddress); // Always update current location
        if (fromLocation === '') {
          setFromLocation(formattedAddress); // Only set fromLocation if it's still the initial empty string
        }
      }
    })();
  }, []);

  return (
    <LocationContext.Provider value={{ fromLocation, setFromLocation, toLocation, setToLocation, isFromCurrentLocation, setIsFromCurrentLocation, isToCurrentLocation, setIsToCurrentLocation, isFromFocused, setIsFromFocused, isToFocused, setIsToFocused, currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
