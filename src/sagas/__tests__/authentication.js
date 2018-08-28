import { expectSaga } from 'redux-saga-test-plan';
import {
  TEST_USER_EMAIL,
  TEST_USER_PASS,
  TEST_USER_TOKEN,
} from 'react-native-dotenv';
import { firebaseInit } from '../../dao/firebase';
import auth from '../authentication';
import {
  SIGN_IN,
  SET_USER_UID,
} from '../../actions/authentication';

describe('auth saga', () => {
  const storeState = {
    userToken: '',
  };

  firebaseInit();

  it('should take on the SET_USER_UID action', async () => expectSaga(auth)
    .withState(storeState)
    .put({
      type: SET_USER_UID,
      payload: TEST_USER_TOKEN,
    })
    .dispatch({
      type: SIGN_IN,
      payload: {
        email: TEST_USER_EMAIL,
        password: TEST_USER_PASS,
      },
    })
    .run(5000), 6000);
});
