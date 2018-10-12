import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen
})

class App extends Component {
  state = {}
  render() {
    return (
      <SwitchNavigation />
    );
  }
}

export default App;