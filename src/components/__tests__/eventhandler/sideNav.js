import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import MainMenu from '../../sideNav/mainMenu';

const mockFn = jest.fn();
const wrapper = shallow(
  <MainMenu
    signOut={mockFn}
  />,
);

describe('mainMenu eventhandler', () => {
  it('サインアウトボタンがonPressされた時にイベントを発行すること', () => {
    const signOutButton = wrapper.find('#signOut');
    signOutButton.simulate('onPress');
    expect(mockFn).toHaveBeenCalled();
  });
});
