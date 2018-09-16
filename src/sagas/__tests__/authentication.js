import { expectSaga } from 'redux-saga-test-plan';
import {
  TEST_USER_EMAIL,
  TEST_USER_PASS,
  TEST_USER_TOKEN,
} from 'react-native-dotenv';
import { PAGE_LIST } from '../../common/globalConstants';
import { firebaseInit } from '../../dao/firebase';
import { signIn } from '../authentication';
import {
  SIGN_IN,
  SET_USER_UID,
} from '../../actions/authentication';

describe('auth saga', () => {
  firebaseInit();

  it('signInにSIGN_INアクションを渡すとUserTokenの更新とページ遷移を行うアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: {
      email: TEST_USER_EMAIL,
      password: TEST_USER_PASS,
    },
  }).put({
    type: SET_USER_UID,
    payload: TEST_USER_TOKEN,
  }).put({
    type: 'Navigation/NAVIGATE',
    routeName: PAGE_LIST.MAIN,
  }).run(false));
});
