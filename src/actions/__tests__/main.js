import { setMainMenuOpen } from '../main';

describe('authentication actions', () => {
  it('SET_MAIN_MENU_OPENアクションを生成すること', () => {
    const expectedAction = { type: 'MAIN-SET_MAIN_MENU_OPEN' };
    expect(setMainMenuOpen()).toEqual(expectedAction);
  });
});
