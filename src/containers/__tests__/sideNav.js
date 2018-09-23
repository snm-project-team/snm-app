import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { EMPTY_OBJECT } from '../../common/globalConstants';
import { SIGN_OUT } from '../../actions/authentication';
import MainMenu from '../sideMenu/mainMenu';

const mockStore = configureMockStore();
const state = {
  navigationRoot: EMPTY_OBJECT,
};

describe('MainMenu Container', () => {
  const wrapper = shallow(<MainMenu />, { context: { store: mockStore(state) } });

  it('isSideMenuOpenがConponentに渡されていること', () => {
    expect(wrapper.props().navigationRoot).toEqual(EMPTY_OBJECT);
  });

  it('signOut実行時にアクションが発行されていること', () => {
    expect(wrapper.props().signOut()).toEqual({ type: SIGN_OUT });
  });
});
