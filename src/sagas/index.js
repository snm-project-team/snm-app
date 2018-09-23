import { fork } from 'redux-saga/effects';
import authentication from './authentication';
import spotDetail from './spotDetail';

export default function* rootSaga() {
  yield fork(authentication);
  yield fork(spotDetail);
}
