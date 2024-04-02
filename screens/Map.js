// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LocationSearchContainer from '../components/LocationSearchContainer';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function Map() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#F10000', '#930000', '#640000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.0, 0.75, 1.0]}
        style={styles.innerShadow}
      /> */}
      <LocationSearchContainer
        backgroundColor={'#F10000'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: screenHeight * 5/100,
    backgroundColor: 'black',
    height: 840,
    width: 'auto',
    padding: 0,
  },
  innerShadow: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
});
