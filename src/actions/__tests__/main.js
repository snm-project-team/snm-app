import { setMenuOpen } from '../main';

describe('authentication actions', () => {
  it('SET_MENU_OPENアクションを生成すること', () => {
    const expectedAction = { type: 'MAIN-SET_MENU_OPEN' };
    expect(setMenuOpen()).toEqual(expectedAction);
  });
});
