import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { StyleProvider, Container } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Header from './src/containers/header'
import Map from './src/components/map'

const Store = createStore(rootReducer)

export default class App extends React.Component {
  constructor() {
    super();
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
            <Header />
            <Map />
          </Container>
        </Provider>
      </StyleProvider>
    );
  }
}