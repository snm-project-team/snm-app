import { handleActions } from 'redux-actions';
import { EMPTY_STRING, SIDE_MENU_LIST } from '../common/globalConstants';
import { SET_MAIN_MENU_OPEN, SET_SPOT_DETAIL_OPEN, SET_SIDE_MENU_CLOSE } from '../actions/main';

const defaultState = {
  isMainMenuOpen: false,
  isSpotDetailOpen: false,
  isSideMenuOpen: false,
  dislayContent: EMPTY_STRING,
  spotId: EMPTY_STRING,
};

export default handleActions({
  [SET_MAIN_MENU_OPEN]: (state, action) => ({
    ...state,
    isMainMenuOpen: action.payload,
    isSideMenuOpen: action.payload || state.isSpotDetailOpen,
    dislayContent: SIDE_MENU_LIST.MAIN_MENU,
  }),
  [SET_SPOT_DETAIL_OPEN]: (state, action) => ({
    ...state,
    isSpotDetailOpen: action.payload.isSpotDetailOpen,
    isSideMenuOpen: action.payload.isSpotDetailOpen || state.isMainMenuOpen,
    spotId: action.payload.spotId,
    dislayContent: SIDE_MENU_LIST.SPOT_DETAIL,
  }),
  [SET_SIDE_MENU_CLOSE]: state => ({
    ...state,
    isMainMenuOpen: false,
    isSpotDetailOpen: false,
    isSideMenuOpen: false,
    spotId: EMPTY_STRING,
    dislayContent: EMPTY_STRING,
  }),
}, defaultState);
