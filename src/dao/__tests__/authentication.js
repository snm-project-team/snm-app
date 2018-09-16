import { call } from 'redux-saga/effects';
import {
  TEST_USER_EMAIL,
  TEST_USER_PASS,
} from 'react-native-dotenv';
import Firebase, { firebaseInit } from '../firebase';
import { signInWithEmailAndPassword } from '../authentication';

describe('auth saga', () => {
  firebaseInit();

  it('signInWithEmailAndPasswordがFirebaseのメソッドをcallしていること', () => {
    const payload = {
      email: TEST_USER_EMAIL,
      password: TEST_USER_PASS,
    };
    const auth = Firebase.auth();
    const ganerator = signInWithEmailAndPassword(payload);
    expect(ganerator.next().value).toEqual(
      call([auth, auth.signInWithEmailAndPassword], payload.email, payload.password),
    );
  });
});
