import React, { createContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isCurrentLocation, setIsCurrentLocation] = useState(true);

  return (
    <LocationContext.Provider value={{ fromLocation, setFromLocation, toLocation, setToLocation, isCurrentLocation, setIsCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
