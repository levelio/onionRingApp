import React, { Component } from 'react'
import { View, Text } from 'react-native' /* ScrollView, Text, Image, */
// import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

// import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello World!</Text>
      </View>
    )
  }
}
