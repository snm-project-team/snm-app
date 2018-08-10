import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/containers/login'
import { createStackNavigator } from 'react-navigation';
import Header from './src/containers/header'
import MainConponents from './src/containers/main'

class MainScreen extends React.Component {
  render() {
    return [
      <Header key='header'/>,
      <MainConponents key='main'/>
    ];
  }
}

export default createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen }
  },
  {
    headerMode: 'none',
  }
);