import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import SignUp from '../../signUp';

const mockFn = jest.fn();
const wrapper = shallow(
  <SignUp
    signUp={mockFn}
  />,
);

describe('signUp eventhandler', () => {
  it('signUpボタンがonPressされた時にイベントを発行すること', () => {
    const signUpButton = wrapper.find('#signUp');
    signUpButton.simulate('onPress');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith({
      email: '',
      password: '',
    });
  });
});
