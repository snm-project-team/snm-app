import { combineReducers } from 'redux';
import map from './reducers/map';
import stores from './reducers/stores';

export default combineReducers({
  map,
  stores
});