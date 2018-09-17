import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SignIn from '../signIn';
import { GET_CURRENT_USER, SIGN_IN } from '../../actions/authentication';

const mockStore = configureMockStore();

describe('SignIn Container', () => {
  const wrapper = shallow(<SignIn />, { context: { store: mockStore() } });

  it('getCurrentUserがConponentに渡されていること', () => {
    expect(wrapper.props().getCurrentUser()).toEqual({ type: GET_CURRENT_USER });
  });
  it('signInがConponentに渡されていること', () => {
    expect(wrapper.props().signIn()).toEqual({ type: SIGN_IN });
  });
  it('moveSignUpPageがConponentに渡されていること', () => {
    expect(wrapper.props().moveSignUpPage()).toEqual({
      routeName: 'SignUp',
      type: 'Navigation/NAVIGATE',
    });
  });
});
