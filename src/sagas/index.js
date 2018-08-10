import { storeRoot } from './store'
import { fork } from 'redux-saga/effects'

export function* rootSaga() {
  yield fork(storeRoot);
}