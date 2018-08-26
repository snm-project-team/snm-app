import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../signIn';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <SignIn
      getCurrentUser={() => {}}
      signIn={() => {}}
      moveSignUpPage={() => {}}
    />,
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
