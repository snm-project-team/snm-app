import { createAction } from 'redux-actions';

export const GET_CURRENT_USER = 'AUTHENTICATION-GET_CURRENT_USER';
export const getCurrentUser = createAction(GET_CURRENT_USER);

export const SIGN_IN = 'AUTHENTICATION-SIGN_IN';
export const signIn = createAction(SIGN_IN);

export const SIGN_UP = 'AUTHENTICATION-SIGN_UP';
export const signUp = createAction(SIGN_UP);

export const SIGN_OUT = 'AUTHENTICATION-SIGN_OUT';
export const signOut = createAction(SIGN_OUT);

export const SET_USER_UID = 'AUTHENTICATION-SET_USER_UID';
export const setUserUid = createAction(SET_USER_UID);
