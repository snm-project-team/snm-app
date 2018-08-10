import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { StyleProvider, Container } from 'native-base';
import { firebaseInit } from './src/dao/firebase'
import { rootSaga } from './src/sagas'
import rootReducer from './rootReducer';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import RootStack from './rootStack'

firebaseInit();
const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state =>  state.navigationRoot
);

const navApp = reduxifyNavigator(RootStack, "root");
const mapStateToProps = (state) => ({
  state: state.navigationRoot,
});

const AppWithNavigationState = connect(mapStateToProps)(navApp);

const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware, navigationMiddleware));
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={Store}>
          <Container>
            <AppWithNavigationState />
          </Container>
        </Provider>
      </StyleProvider>
    );
  }
}