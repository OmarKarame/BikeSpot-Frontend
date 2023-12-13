import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home.js'
import Map from '../screens/map.js'
import Settings from '../screens/settings.js'
import Chat from '../screens/chat.js'

const screens = {
  Map: {
    screen: Map,
  },
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
  Chat: {
    screen: Chat,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
