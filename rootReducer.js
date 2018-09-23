import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import main from './src/reducers/main';
import authentication from './src/reducers/authentication';
import spotDetail from './src/reducers/spotDetail';
import { StackNavigator } from './rootStack';

const navigationRoot = createNavigationReducer(StackNavigator);

export default combineReducers({
  navigationRoot,
  main,
  authentication,
  spotDetail,
});
