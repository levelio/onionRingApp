import { TabNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import ToolsScreen from '../Containers/ToolsScreen'
import SettingScreen from '../Containers/SettingScreen'

// import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  ToolsScreen: { screen: ToolsScreen },
  SettingScreen: { screen: SettingScreen }
}, {
  initialRouteName: 'HomeScreen',
  tabBarOptions: {
    activeTintColor: '#666',
    tabBarPosition: 'bottom',
    inactiveTintColor: '#999',
    showIcon: true
  }
})

export default PrimaryNav
