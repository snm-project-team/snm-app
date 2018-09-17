import React from 'react';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';
import MainMenu from '../../sideNav/mainMenu';

const mockFn = jest.fn();

it('MainMenu画面のスナップショットテスト', () => {
  const rendered = renderer.create(
    <MainMenu
      signOut={mockFn}
    />,
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
