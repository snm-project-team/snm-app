import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { SET_MENU_OPEN } from '../../actions/main';
import { GET_CURRENT_USER } from '../../actions/authentication';
import Main from '../main';

const mockStore = configureMockStore();
const state = {
  main: {
    isSideMenuOpen: false,
  },
};

describe('Main Container', () => {
  const wrapper = shallow(<Main />, { context: { store: mockStore(state) } });

  it('isSideMenuOpenがConponentに渡されていること', () => {
    expect(wrapper.props().isSideMenuOpen).toEqual(false);
  });

  it('getCurrentUserがConponentに渡されていること', () => {
    expect(wrapper.props().getCurrentUser()).toEqual({ type: GET_CURRENT_USER });
  });

  it('setMenuOpenがConponentに渡されていること', () => {
    expect(wrapper.props().setMenuOpen()).toEqual({ type: SET_MENU_OPEN });
  });
});
