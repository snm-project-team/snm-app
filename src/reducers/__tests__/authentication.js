import authentication from '../authentication';

const userToken = 'testToken';

describe('authentication reducer', () => {
  it('何も渡さない場合にinitialStateを返すこと', () => {
    expect(authentication(undefined, {})).toEqual({
      userToken: '',
    });
  });

  it('SET_USER_UIDアクションを渡すと、受け取ったuserTokenの内容にstateを書き換えること', () => {
    expect(authentication(undefined, {
      type: 'AUTHENTICATION-SET_USER_UID',
      payload: userToken,
    })).toEqual({
      userToken: 'testToken',
    });
  });
});
