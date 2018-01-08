import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ToolsScreen extends Component {
  static navigationOptions = {
    title: '五金',
    tabBarLabel: '五金',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={focused ? 'ios-nutrition' : 'ios-nutrition-outline'}
        size={26}
        color={tintColor}
      />
    )
  }

  render () {
    return (
      <View>
        <Text>这里是工具页，二维码扫描，二手市场，会议室预定等等...</Text>
      </View>
    )
  }
}
