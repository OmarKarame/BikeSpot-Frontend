import React, { useState } from 'react'
import * as Font from 'expo-font'
import Navigator from './routes/homeStack'
import Home from './screens/home'
import { AppLoading } from 'expo'

async function getFonts() {
  await Font.loadAsync({
    'nunitoSans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunitoSans-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
})
}

export default function App() {
    return (
      <Navigator />
    )
};
