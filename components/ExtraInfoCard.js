import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default function ExtraInfoCard({ isRed, displayImage, title, info}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBackground}>
        {isRed ? <LinearGradient
          colors={['#af2f3f', '#500d1f']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.4, 0.95]}
        /> : <LinearGradient
          colors={['white', 'grey']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.4, 0.95]}
        />}
        <SvgXml
          xml={displayImage}
          width="80"
          height="80"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 22/100,
    width: screenWidth * 40/100,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconBackground: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  info: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  }
})
