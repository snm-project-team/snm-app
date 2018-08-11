import { fork, takeEvery } from 'redux-saga/effects'
import { SIGN_UP } from '../actions/authentication';

signUp = () => {
  console.log('c')
}

export function* authentication() {
  yield takeEvery(SIGN_UP, signUp)
}