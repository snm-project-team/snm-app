import { getCurrentUser } from '../authentication';

const testUserData = {
  id: 1,
  name: 'test1',
};

describe('actions', () => {
  it('AUTHENTICATION-GET_CURRENT_USERアクションを生成すること', () => {
    const expectedAction = {
      type: 'AUTHENTICATION-GET_CURRENT_USER',
      payload: testUserData,
    };

    expect(getCurrentUser(testUserData)).toEqual(expectedAction);
  });
});
