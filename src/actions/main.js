import { createAction } from 'redux-actions';

export const SET_MAIN_MENU_OPEN = 'MAIN-SET_MAIN_MENU_OPEN';
export const setMainMenuOpen = createAction(SET_MAIN_MENU_OPEN);

export const SET_SPOT_DETAIL_OPEN = 'MAIN-SET_SPOT_DETAIL_OPEN';
export const setSpotDetailOpen = createAction(SET_SPOT_DETAIL_OPEN);

export const SET_SIDE_MENU_CLOSE = 'MAIN-SET_SIDE_MENU_CLOSE';
export const setSideMenuClose = createAction(SET_SIDE_MENU_CLOSE);
