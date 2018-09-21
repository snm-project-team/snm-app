import main from '../main';
import { SET_MENU_OPEN } from '../../actions/main';

describe('main reducer', () => {
  it('何も渡さない場合にinitialStateを返すこと', () => {
    expect(main(undefined, {})).toEqual({
      isSideMenuOpen: false,
    });
  });

  it('SET_MENU_OPENアクションを渡すと、isSideMenuOpenを書き換えること', () => {
    expect(main(undefined, {
      type: SET_MENU_OPEN,
      payload: true,
    })).toEqual({
      isSideMenuOpen: true,
    });
  });
});
