import { store } from './store'
import { authentication } from './authentication'
import { fork } from 'redux-saga/effects'

export function* rootSaga() {
  yield fork(authentication);
  yield fork(store);
}