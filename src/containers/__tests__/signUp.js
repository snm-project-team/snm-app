import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { SIGN_UP } from '../../actions/authentication';
import SignUp from '../signUp';

const mockStore = configureMockStore();

describe('SignUp Container', () => {
  const wrapper = shallow(<SignUp />, { context: { store: mockStore() } });

  it('signUpがConponentに渡されていること', () => {
    expect(wrapper.props().signUp()).toEqual({ type: SIGN_UP });
  });
});
