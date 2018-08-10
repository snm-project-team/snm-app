import { handleActions } from 'redux-actions';
import { SET_MENU_OPEN } from '../actions/main';

const defaultState = {
  isSideMenuOpen: false
};

export default handleActions({
  [SET_MENU_OPEN]: (state, action) => ({
    ...state,
    isSideMenuOpen: action.payload
  })
}, defaultState);