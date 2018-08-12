import { fork, takeEvery } from 'redux-saga/effects'
import { SIGN_IN, SIGN_UP } from '../actions/authentication';
import authenticationDao from '../dao/authentication';

signIn = authInfo => authenticationDao.signIn(authInfo);
signUp = authInfo => authenticationDao.signUp(authInfo.payload);

export function* authentication() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
}