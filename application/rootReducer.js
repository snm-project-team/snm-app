import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import main from './src/reducers/main';
import RootStack from './rootStack'

const navigationRoot = createNavigationReducer(RootStack);

export default combineReducers({
  navigationRoot,
  main
});