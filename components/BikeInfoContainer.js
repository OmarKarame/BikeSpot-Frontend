import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapDisplay from './MapDisplay';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function BikeInfoContainer() {
  const modalizeRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const preventClosing = () => true;

  const handleStyle = isModalOpen
    ? styles.handleOpen
    : styles.handleClosed;

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, marginTop: 80, width: screenWidth, }}>
      <View style={styles.container}>
        <MapDisplay />
        <Modalize
        ref={modalizeRef}
          snapPoint={screenHeight * 20/100}
          modalHeight={screenHeight * 60/100}
          alwaysOpen={80}
          onOverlayPress={preventClosing}
          onBackButtonPress={preventClosing}
          adjustToContentHeight={false}
          modalStyle={{
            backgroundColor: 'transparent',
          }}
          handleStyle={styles.handle}
        >
          <View style={styles.infoContainer}>
            {/* <Text style={[{color: 'white', paddingTop: 7}]}>Swipe up for more</Text> */}
          </View>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 80/100,
    backgroundColor: 'transparent',
    borderRadius: 30,
  },
  infoContainer:{
    height: screenHeight * 80/100,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
    alignItems: 'center'
  },
  handle: {
    width: 80,
    backgroundColor: '#777',
  }
})
