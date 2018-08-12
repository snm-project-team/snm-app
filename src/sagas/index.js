import { fork } from 'redux-saga/effects';
import authentication from './authentication';
// import store from './store';

export default function* rootSaga() {
  yield fork(authentication);
  // yield fork(store);
}
