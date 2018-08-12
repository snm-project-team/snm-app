import { takeEvery } from 'redux-saga/effects';
import { SET_MENU_OPEN } from '../actions/main';
import storeDao from '../dao/store';

function registerStore() {
  return storeDao.create('storeName');
}

function* store() {
  while (true) {
    yield takeEvery(SET_MENU_OPEN, registerStore);
  }
}

export default store;
