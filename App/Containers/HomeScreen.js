import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '光年',
    tabBarLabel: '光年',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={focused ? 'ios-planet' : 'ios-planet-outline'}
        size={26}
        color={tintColor}
      />
    )
  }

  render () {
    return (
      <View>
        <Text>这里是主页，展示重要通知，随笔文章，分享等</Text>
      </View>
    )
  }
}
