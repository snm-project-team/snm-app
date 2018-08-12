import { takeEvery, call } from 'redux-saga/effects';
import { SIGN_IN, SIGN_UP } from '../actions/authentication';
import authenticationDao from '../dao/authentication';

function* signIn(authInfo) {
  yield call(authenticationDao.signIn, authInfo);
}

function* signUp(authInfo) {
  yield call(authenticationDao.signUp, authInfo.payload);
}

function* authentication() {
  while (true) {
    yield takeEvery(SIGN_IN, signIn);
    yield takeEvery(SIGN_UP, signUp);
  }
}

export default authentication;
