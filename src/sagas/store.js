import storeDao from '../dao/store'
import { fork, takeEvery } from 'redux-saga/effects'
import { SET_MENU_OPEN } from '../actions/main';

registerStore = () => {
  console.log('b')
  return storeDao.create('storeName');
}

export function* store() {
  yield takeEvery(SET_MENU_OPEN, registerStore)
}