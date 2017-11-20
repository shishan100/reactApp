/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//样式文件
// import MyStyle from './components/MyStyle.js'
// //RN自带组件
// import SystemCom from './components/SystemCom.js'
// //RN注册事件
// import MyEvents from './components/MyEvents.js'
// //flatlist列表渲染
// import MyList from './components/FlatList.js'
// //TabBar路由组件
// import TabBar from './components/TabNavigator.js'
//Nameavigator
import Navigator from './components/StackNavigator.js'

export default class App extends Component {
  render() {
    return (
      <Navigator></Navigator>
      )
  }
}

