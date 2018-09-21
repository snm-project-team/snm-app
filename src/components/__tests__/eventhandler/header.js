import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import Header from '../../header';

const mockFn = jest.fn();
const wrapper = shallow(
  <Header
    isSideMenuOpen={false}
    setMenuOpen={mockFn}
  />,
);

describe('header eventhandler', () => {
  it('サイドメニュー開閉ボタンがonPressされた時にイベントを発行すること', () => {
    const sideMenuToggleButton = wrapper.find('#sideMenuToggle');
    sideMenuToggleButton.props().onPress();
    expect(mockFn).toHaveBeenCalled();
  });
});
