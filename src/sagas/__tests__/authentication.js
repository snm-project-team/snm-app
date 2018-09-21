import { expectSaga } from 'redux-saga-test-plan';
import {
  TEST_USER_EMAIL,
  TEST_USER_PASS,
  TEST_USER_TOKEN,
} from 'react-native-dotenv';
import { PAGE_LIST, EMPTY_STRING } from '../../common/globalConstants';
import { firebaseInit } from '../../daos/firebase';
import { signIn, signUp, signOut } from '../authentication';
import {
  SIGN_IN,
  SIGN_UP,
  SET_USER_UID,
  SET_ERROR_INFO,
} from '../../actions/authentication';

describe('authentication saga', () => {
  firebaseInit();

  const testUserInfo = { email: TEST_USER_EMAIL, password: TEST_USER_PASS };
  const emptyEmailUserInfo = { email: EMPTY_STRING, password: TEST_USER_PASS };
  const wrongEmailUserInfo = { email: 'dummy@nobady.com', password: TEST_USER_PASS };
  const emptyPasswordUserInfo = { email: TEST_USER_EMAIL, password: EMPTY_STRING };
  const wrongPasswordUserInfo = { email: TEST_USER_EMAIL, password: 'WrongPassword' };

  it('signInにSIGN_INアクションを渡すとUserTokenの更新とページ遷移を行うアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: testUserInfo,
  }).put({
    type: SET_USER_UID,
    payload: TEST_USER_TOKEN,
  }).put({
    type: 'Navigation/NAVIGATE',
    routeName: PAGE_LIST.MAIN,
  }).run(false));

  it('不正なフォーマットのemailでSignInを実行するとFirebase規定のエラーメッセージを登録するアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: emptyEmailUserInfo,
  }).put({
    type: SET_ERROR_INFO,
    payload: {
      errorCode: 'auth/invalid-email',
      errorMessage: 'The email address is badly formatted.',
    },
  }).run(false));

  it('存在しないemailでSignInを実行するとFirebase規定のエラーメッセージを登録するアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: wrongEmailUserInfo,
  }).put({
    type: SET_ERROR_INFO,
    payload: {
      errorCode: 'auth/user-not-found',
      errorMessage: 'There is no user record corresponding to this identifier. The user may have been deleted.',
    },
  }).run(false));

  it('不正なフォーマットのパスワードでSignInを実行するとFirebase規定のエラーメッセージを登録するアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: emptyPasswordUserInfo,
  }).put({
    type: SET_ERROR_INFO,
    payload: {
      errorCode: 'auth/wrong-password',
      errorMessage: 'The password is invalid or the user does not have a password.',
    },
  }).run(false));

  it('誤ったのパスワードでSignInを実行するとFirebase規定のエラーメッセージを登録するアクションを発行すること', () => expectSaga(signIn, {
    type: SIGN_IN,
    payload: wrongPasswordUserInfo,
  }).put({
    type: SET_ERROR_INFO,
    payload: {
      errorCode: 'auth/wrong-password',
      errorMessage: 'The password is invalid or the user does not have a password.',
    },
  }).run(false));

  it('すでに存在するemailアドレスでSignUpを実行するとFirebase規定のエラーメッセージを登録するアクションを発行すること', () => expectSaga(signUp, {
    type: SIGN_UP,
    payload: testUserInfo,
  }).put({
    type: SET_ERROR_INFO,
    payload: {
      errorCode: 'auth/email-already-in-use',
      errorMessage: 'The email address is already in use by another account.',
    },
  }).run(false));

  it('signOutにSIGN_OUTアクションを渡すとUserTokenの更新とページ遷移を行うアクションを発行すること', () => expectSaga(signOut).put({
    type: SET_USER_UID,
    payload: EMPTY_STRING,
  }).put({
    type: 'Navigation/NAVIGATE',
    routeName: PAGE_LIST.SIGN_IN,
  }).run(false));
});
