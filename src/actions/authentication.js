import { createAction } from 'redux-actions';

export const SIGN_IN = 'AUTHENTICATION-SIGN_IN';
export const signIn = createAction(SIGN_IN);

export const SIGN_UP = 'AUTHENTICATION-SIGN_UP';
export const signUp = createAction(SIGN_UP);

export const SET_USER_TOKEN = 'AUTHENTICATION-SET_USER_TOKEN';
export const setUserToken = createAction(SET_USER_TOKEN);
