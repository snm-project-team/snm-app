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
    expect(wrapper.props().isSideMenuOpen).toEqual(false);
  });

  it('setMenuOpenがConponentに渡されていること', () => {
    expect(wrapper.props().setMenuOpen()).toEqual({ type: SET_MENU_OPEN });
  });
});
