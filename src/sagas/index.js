import { fork } from 'redux-saga/effects';
import authentication from './authentication';
import store from './store';

function* rootSaga() {
  yield fork(authentication);
  yield fork(store);
}

export default rootSaga;
