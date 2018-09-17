import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import SignIn from '../../signIn';

const mockFn = jest.fn();
const wrapper = shallow(
  <SignIn
    getCurrentUser={mockFn}
    signIn={mockFn}
    moveSignUpPage={mockFn}
  />,
);

describe('signIn eventhandler', () => {
  it('ロード時にイベントを発行すること', () => {
    expect(mockFn).toHaveBeenCalled();
  });

  it('signInボタンがonPressされた時にイベントを発行すること', () => {
    const signInButton = wrapper.find('#signIn');
    signInButton.simulate('onPress');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith({
      email: '',
      password: '',
    });
  });

  it('signUpボタンがonPressされた時にイベントを発行すること', () => {
    const signInButton = wrapper.find('#signUp');
    signInButton.simulate('onPress');
    expect(mockFn).toHaveBeenCalled();
  });
});
