import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { StyleProvider, Container } from 'native-base';
import { firebaseInit } from './src/daos/firebase';
import rootSaga from './src/sagas';
import rootReducer from './rootReducer';
import { AppWithNavigationState, NavigationMiddleware } from './rootStack';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

firebaseInit();
const SagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(SagaMiddleware, NavigationMiddleware));
SagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = { isReady: false };
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
