import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../signUp';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <SignUp
      signUp={() => {}}
    />,
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
