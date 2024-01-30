import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Map from '../screens/map.js'
import Settings from '../screens/settings.js'
import Chat from '../screens/chat.js'
import Home from '../screens/home.js'

const screens = {
  Chat: {
    screen: Chat,
  },
  Home: {
    screen: Home,
  },
  Map: {
    screen: Map,
  },
  Settings: {
    screen: Settings,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
