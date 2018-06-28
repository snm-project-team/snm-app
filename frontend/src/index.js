import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { deepOrange300, darkBlack } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import Main from './containers/main/main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange300,
    textColor: darkBlack,
  }
});

const Store = createStore(rootReducer)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={Store}>
      <Main />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
