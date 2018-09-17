import { fork } from 'redux-saga/effects';
import rootSaga from '../index';
import authentication from '../authentication';

describe('rootSaga', () => {
  it('launches handleRequestUser task', () => {
    const saga = rootSaga();

    let ret = saga.next();
    expect(ret.value).toEqual(fork(authentication));

    ret = saga.next();
    expect(ret.done).toEqual(true);
  });
});
