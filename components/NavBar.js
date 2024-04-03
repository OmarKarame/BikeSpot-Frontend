import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity  } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

import svgHomeGreyIconMarkup from '../assets/svgs/svgHomeGreyIconMarkup';
import svgHomeRedIconMarkup from '../assets/svgs/svgHomeRedIconMarkup';
import svgMapGreyIconMarkup from '../assets/svgs/svgMapGreyIconMarkup';
import svgMapRedIconMarkup from '../assets/svgs/svgMapRedIconMarkup';
import svgSettingsGreyIconMarkup from '../assets/svgs/svgSettingsGreyIconMarkup';
import svgSettingsRedIconMarkup from '../assets/svgs/svgSettingsRedIconMarkup';
import svgChatGreyIconMarkup from '../assets/svgs/svgChatGreyIconMarkup';
import svgChatRedIconMarkup from '../assets/svgs/svgChatRedIconMarkup';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

  export default function NavBar({ currentPage, navigation }) {
    const SelectedPage = {
      'Home': -screenWidth/3.2,
      'Map': -screenWidth/11.2,
      'Settings': screenWidth/6.96,
      'Chat': screenWidth/2.7,
    }

    const svgHomeIconMarkup = (isActive) => {
      if (isActive) {
        return svgHomeRedIconMarkup
      }
      else {
        return svgHomeGreyIconMarkup
      }
    };

    const svgMapIconMarkup = (isActive) => {
      if (isActive) {
        return svgMapRedIconMarkup
      }
      else {
        return svgMapGreyIconMarkup
      }
    };

    const svgSettingsIconMarkup = (isActive) => {
      if (isActive) {
        return svgSettingsRedIconMarkup
      }
      else {
        return svgSettingsGreyIconMarkup
      }
    };

    const svgChatIconMarkup = (isActive) => {
      if (isActive) {
        return svgChatRedIconMarkup
      }
      else {
        return svgChatGreyIconMarkup
      }
    };

    const translateValue = SelectedPage[currentPage] || 0

    const getIconMarkup = (iconName) => {
      const isActive = currentPage === iconName;
      switch (iconName) {
        case 'Home':
          return svgHomeIconMarkup(isActive);
        case 'Map':
          return svgMapIconMarkup(isActive);
        case 'Settings':
          return svgSettingsIconMarkup(isActive);
        case 'Chat':
          return svgChatIconMarkup(isActive);
        default:
          return '';
      }
    };


    return (
      <View style={styles.navContainer}>
        <Image
          source={require('../assets/images/footer-bar.png')}
          style={[styles.localImage, { transform: [{ translateX: translateValue }, { translateY: 0 }] }]}
        />
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={currentPage === 'Home' ? styles.iconBackground : styles.transparentBackground}>
              <SvgXml
                xml={getIconMarkup('Home')}
                width="40"
                height="40"
                style={currentPage === 'Home' ? styles.activeIcon : styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <View style={currentPage === 'Map' ? styles.iconBackground : styles.transparentBackground}>
              <SvgXml
                  xml={getIconMarkup('Map')}
                  width="40"
                  height="40"
                  style={currentPage === 'Map' ? styles.activeIcon : styles.icon}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={currentPage === 'Settings' ? styles.iconBackground : styles.transparentBackground}>
              <SvgXml
                xml={getIconMarkup('Settings')}
                width="40"
                height="40"
                style={currentPage === 'Settings' ? styles.activeIcon : styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View style={currentPage === 'Chat' ? styles.iconBackground : styles.transparentBackground}>
              <SvgXml
                xml={getIconMarkup('Chat')}
                width="40"
                height="40"
                style={currentPage === 'Chat' ? styles.activeIcon : styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: screenWidth,
  },
  localImage: {
    width: 770,
    height: screenHeight*10/100,
    position: 'absolute',
  },
  navButtons:{
    width: screenWidth-20,
    bottom: 0,
    height: 70,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  transparentBackground: {

  },
  iconBackground: {
    borderRadius: 50,
    backgroundColor: 'white',
    transform: [{translateY: -50}],
    padding: 10
  },
  icon: {
    transform: [{translateY: -10}]
  },
});
