import React from 'react';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';
import SignUp from '../../signUp';

const mockFn = jest.fn();

it('signUp画面のスナップショットテスト', () => {
  const rendered = renderer.create(<SignUp signUp={mockFn} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
