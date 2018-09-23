import React from 'react';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';
import Header from '../../header';

const mockFn = jest.fn();

it('Header画面のスナップショットテスト', () => {
  const rendered = renderer.create(
    <Header
      isSideMenuOpen={false}
      setMainMenuOpen={mockFn}
    />,
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
