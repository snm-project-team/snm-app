import React from 'react';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';
import SignIn from '../../signIn';

const mockFn = jest.fn();

it('SignIn画面のスナップショットテスト', () => {
  const rendered = renderer.create(
    <SignIn
      getCurrentUser={mockFn}
      signIn={mockFn}
      moveSignUpPage={mockFn}
    />,
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
