import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
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

const StackNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen }
  },
  {
    headerMode: 'none',
  }
);

const NavigationMiddleware = createReactNavigationReduxMiddleware("root", state =>  state.navigationRoot);
const NavigatorApp = reduxifyNavigator(StackNavigator, "root");

const mapStateToProps = (state) => ({
  state: state.navigationRoot,
});

const AppWithNavigationState = connect(mapStateToProps)(NavigatorApp);

export { StackNavigator, NavigationMiddleware, AppWithNavigationState }