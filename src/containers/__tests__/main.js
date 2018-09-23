import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { SET_SIDE_MENU_CLOSE } from '../../actions/main';
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
    expect(wrapper.props().isSideMenuOpen).toEqual(state.main.isSideMenuOpen);
  });

  it('getCurrentUser実行時にアクションが発行されていること', () => {
    expect(wrapper.props().getCurrentUser()).toEqual({ type: GET_CURRENT_USER });
  });

  it('setMainMenuOpen実行時にアクションが発行されていること', () => {
    expect(wrapper.props().setSideMenuClose()).toEqual({ type: SET_SIDE_MENU_CLOSE });
  });
});
