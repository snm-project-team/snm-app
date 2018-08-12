import { createAction } from 'redux-actions';

export const SIGN_IN = 'AUTHENTICATION-SIGN_IN';
export const signIn = createAction(SIGN_IN);

export const SIGN_UP = 'AUTHENTICATION-SIGN_UP';
export const signUp = createAction(SIGN_UP);

export const SET_USER_UID = 'AUTHENTICATION-SET_USER_UID';
export const setUserUid = createAction(SET_USER_UID);
