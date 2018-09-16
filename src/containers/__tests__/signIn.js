import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SignIn from '../signIn';
import { GET_CURRENT_USER } from '../../actions/authentication';

const mockStore = configureMockStore();

describe('Dice', () => {
  const initialState = {
    lastRolledNumber: 1,
  };
  const wrapper = shallow(<SignIn />, { context: { store: mockStore(initialState) } });

  it('should show previously rolled value', () => {
    expect(wrapper.props().getCurrentUser()).toEqual({ type: GET_CURRENT_USER });
  });

  // it('should roll the dice again when button is clicked', () => {
  // ボタンクリック時のテストができていない
  //   wrapper.simulate('rollDice');

  //   const actions = store.getActions();
  //   console.log(actions);
  //   expect(actions).toEqual([{ type: 'ADD_TODO' }]);
  // });
});
