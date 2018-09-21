import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import main from './src/reducers/main';
import authentication from './src/reducers/authentication';
import { StackNavigator } from './rootStack';

const navigationRoot = createNavigationReducer(StackNavigator);

export default combineReducers({
  navigationRoot,
  main,
  authentication,
});
