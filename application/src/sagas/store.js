import storeDao from '../dao/store'
import { fork, takeEvery } from 'redux-saga/effects'
import { SET_MENU_OPEN } from '../actions/main';

registerStore = () => {
  storeDao.create('storeName');
}


export function* storeRoot() {
  yield takeEvery(SET_MENU_OPEN, registerStore)
}