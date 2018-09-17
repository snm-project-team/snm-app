import { takeEvery, call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { PAGE_LIST, EMPTY_STRING } from '../common/globalConstants';
import {
  GET_CURRENT_USER,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  setUserUid,
} from '../actions/authentication';
import {
  currentUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOutFunc,
} from '../daos/authentication';

function* getCurrentUser() {
  const data = currentUser();
  if (data) {
    yield put(NavigationActions.navigate({ routeName: PAGE_LIST.MAIN }));
  }
}

export function* signIn(action) {
  try {
    const authInfo = action.payload;
    const data = yield call(signInWithEmailAndPassword, authInfo);
    yield put(setUserUid(data.user.uid));
    yield put(NavigationActions.navigate({ routeName: PAGE_LIST.MAIN }));
  } catch (e) {
    console.log(e);
  }
}

function* signUp(action) {
  try {
    const authInfo = action.payload;
    const data = yield call(createUserWithEmailAndPassword, authInfo);
    yield put(setUserUid(data.user.uid));
    yield put(NavigationActions.navigate({ routeName: PAGE_LIST.MAIN }));
  } catch (e) {
    console.log(e);
  }
}

function* signOut() {
  try {
    yield call(signOutFunc);
    yield put(setUserUid(EMPTY_STRING));
    yield put(NavigationActions.navigate({ routeName: PAGE_LIST.SIGN_IN }));
  } catch (e) {
    console.log(e);
  }
}

export default function* authentication() {
  yield takeEvery(GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(SIGN_OUT, signOut);
}
