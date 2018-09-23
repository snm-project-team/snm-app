import { createAction } from 'redux-actions';

export const GET_SPOT_INFO = 'SPOT_DETAIL-GET_SPOT_INFO';
export const getSpotInfo = createAction(GET_SPOT_INFO);

export const SET_SPOT_INFO = 'SPOT_DETAIL-SET_SPOT_INFO';
export const setSpotInfo = createAction(SET_SPOT_INFO);
