import { call } from 'redux-saga/effects';
import {
  TEST_USER_EMAIL,
  TEST_USER_PASS,
} from 'react-native-dotenv';
import Firebase, { firebaseInit } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOutFunc,
} from '../authentication';

describe('authentication saga', () => {
  firebaseInit();
  const payload = {
    email: TEST_USER_EMAIL,
    password: TEST_USER_PASS,
  };

  it('signInWithEmailAndPasswordがFirebaseのメソッドをcallしていること', () => {
    const auth = Firebase.auth();
    const ganerator = signInWithEmailAndPassword(payload);
    expect(ganerator.next().value).toEqual(
      call([auth, auth.signInWithEmailAndPassword], payload.email, payload.password),
    );
  });

  it('createUserWithEmailAndPasswordがFirebaseのメソッドをcallしていること', () => {
    const auth = Firebase.auth();
    const ganerator = createUserWithEmailAndPassword(payload);
    expect(ganerator.next().value).toEqual(
      call([auth, auth.createUserWithEmailAndPassword], payload.email, payload.password),
    );
  });

  it('signOutFuncがFirebaseのメソッドをcallしていること', () => {
    const auth = Firebase.auth();
    const ganerator = signOutFunc();
    expect(ganerator.next().value).toEqual(call([auth, auth.signOut]));
  });
});
