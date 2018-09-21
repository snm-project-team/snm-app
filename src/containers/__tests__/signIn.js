import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SignIn from '../signIn';
import { GET_CURRENT_USER, SIGN_IN } from '../../actions/authentication';

const mockStore = configureMockStore();
const testUserData = {
  email: '',
  password: '',
};

describe('SignIn Container', () => {
  const wrapper = shallow(<SignIn />, { context: { store: mockStore() } });

  it('getCurrentUser実行時にアクションが発行されていること', () => {
    expect(wrapper.props().getCurrentUser()).toEqual({ type: GET_CURRENT_USER });
  });
  it('signIn実行時にアクションが発行されていること', () => {
    expect(wrapper.props().signIn(testUserData)).toEqual({
      type: SIGN_IN,
      payload: testUserData,
    });
  });
  it('moveSignUpPage実行時にアクションが発行されていること', () => {
    expect(wrapper.props().moveSignUpPage()).toEqual({
      routeName: 'SignUp',
      type: 'Navigation/NAVIGATE',
    });
  });
});
