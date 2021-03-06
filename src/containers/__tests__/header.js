import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { SET_MENU_OPEN } from '../../actions/main';
import Header from '../header';

const mockStore = configureMockStore();
const state = {
  main: {
    isSideMenuOpen: false,
  },
};

describe('Header Container', () => {
  const wrapper = shallow(<Header />, { context: { store: mockStore(state) } });

  it('isSideMenuOpenがConponentに渡されていること', () => {
    expect(wrapper.props().isSideMenuOpen).toEqual(state.main.isSideMenuOpen);
  });

  it('setMenuOpen実行時にアクションが発行されていること', () => {
    expect(wrapper.props().setMenuOpen()).toEqual({ type: SET_MENU_OPEN });
  });
});
