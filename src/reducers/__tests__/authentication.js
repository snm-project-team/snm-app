import authentication from '../authentication';
import { EMPTY_STRING } from '../../common/globalConstants';
import { SET_USER_UID, SET_ERROR_INFO } from '../../actions/authentication';

const testUserToken = 'testToken';
const testErrorCode = 'testErrorCode';
const testErrorMessage = 'testErrorMessage';

describe('authentication reducer', () => {
  it('何も渡さない場合にinitialStateを返すこと', () => {
    expect(authentication(undefined, {})).toEqual({
      userToken: EMPTY_STRING,
      errorCode: EMPTY_STRING,
      errorMessage: EMPTY_STRING,
    });
  });

  it('SET_USER_UIDアクションを渡すと、userTokenを書き換えること', () => {
    expect(authentication(undefined, {
      type: SET_USER_UID,
      payload: testUserToken,
    })).toEqual({
      userToken: testUserToken,
      errorCode: EMPTY_STRING,
      errorMessage: EMPTY_STRING,
    });
  });

  it('SET_ERROR_INFOアクションを渡すと、errorCodeとerrorMessageを書き換えること', () => {
    expect(authentication(undefined, {
      type: SET_ERROR_INFO,
      payload: {
        errorCode: testErrorCode,
        errorMessage: testErrorMessage,
      },
    })).toEqual({
      userToken: EMPTY_STRING,
      errorCode: testErrorCode,
      errorMessage: testErrorMessage,
    });
  });
});
