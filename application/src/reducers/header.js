import { handleActions } from 'redux-actions';
import { SET_MENU_OPEN } from '../actions/map';

const defaultState = {
  isMenuOpen: false
};

export default handleActions({
  [SET_MENU_OPEN]: (state, action) => ({
    ...state,
    isMenuOpen: action.payload
  })
}, defaultState);