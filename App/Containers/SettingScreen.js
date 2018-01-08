import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SettingScreen extends Component {
  static navigationOptions = {
    title: '控制台',
    tabBarLabel: '控制台',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={focused ? 'ios-snow' : 'ios-snow-outline'}
        size={26}
        color={tintColor}
      />
    )
  }

  render () {
    return (
      <View>
        <Text>这里是设置页面</Text>
      </View>
    )
  }
}
