import { takeEvery, call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { SIGN_IN, SIGN_UP, setUserUid } from '../actions/authentication';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../dao/authentication';

function* signIn(action) {
  try {
    const authInfo = action.payload;
    const data = yield call(signInWithEmailAndPassword, authInfo);
    yield put(setUserUid(data.user.uid));
    yield put(NavigationActions.navigate({ routeName: 'Main' }));
  } catch (e) {
    console.log(e);
  }
}

function* signUp(action) {
  try {
    const authInfo = action.payload;
    const data = yield call(createUserWithEmailAndPassword, authInfo);
    yield put(setUserUid(data.user.uid));
  } catch (e) {
    console.log(e);
  }
}

export default function* authentication() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
}
