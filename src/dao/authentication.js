import { call } from 'redux-saga/effects';
import Firebase from './firebase';

const currentUser = () => Firebase.auth().currentUser;

function* signInWithEmailAndPassword(authInfo) {
  const auth = Firebase.auth();
  return yield call([auth, auth.signInWithEmailAndPassword], authInfo.email, authInfo.password);
}

function* createUserWithEmailAndPassword(authInfo) {
  const auth = Firebase.auth();
  return yield call([auth, auth.createUserWithEmailAndPassword], authInfo.email, authInfo.password);
}

function* signOutFunc() {
  const auth = Firebase.auth();
  return yield call([auth, auth.signOut]);
}

export {
  currentUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOutFunc,
};
