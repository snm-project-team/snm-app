import React from 'react';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from './src/containers/signIn';
import SignUpScreen from './src/containers/signUp';
import Header from './src/containers/header';
import MainConponents from './src/containers/main';

class MainScreen extends React.Component {
  render() {
    return [
      <Header key="header" />,
      <MainConponents key="main" />,
    ];
  }
}

const StackNavigator = createStackNavigator({
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
  Main: { screen: MainScreen },
});

const NavigationMiddleware = createReactNavigationReduxMiddleware('root', state =>  state.navigationRoot);
const NavigatorApp = reduxifyNavigator(StackNavigator, 'root');

const mapStateToProps = state => ({ state: state.navigationRoot });

const AppWithNavigationState = connect(mapStateToProps)(NavigatorApp);

export { StackNavigator, NavigationMiddleware, AppWithNavigationState };
