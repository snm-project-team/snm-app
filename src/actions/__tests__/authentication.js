import {
  getCurrentUser,
  signIn,
  signUp,
  signOut,
  setUserUid,
  setErrorInfo,
} from '../authentication';

describe('authentication actions', () => {
  it('GET_CURRENT_USERアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-GET_CURRENT_USER' };
    expect(getCurrentUser()).toEqual(expectedAction);
  });

  it('SIGN_INアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-SIGN_IN' };
    expect(signIn()).toEqual(expectedAction);
  });

  it('SIGN_UPアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-SIGN_UP' };
    expect(signUp()).toEqual(expectedAction);
  });

  it('SIGN_OUTアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-SIGN_OUT' };
    expect(signOut()).toEqual(expectedAction);
  });

  it('SET_USER_UIDアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-SET_USER_UID' };
    expect(setUserUid()).toEqual(expectedAction);
  });

  it('SET_ERROR_INFOアクションを生成すること', () => {
    const expectedAction = { type: 'AUTHENTICATION-SET_ERROR_INFO' };
    expect(setErrorInfo()).toEqual(expectedAction);
  });
});
