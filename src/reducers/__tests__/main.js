import main from '../main';
import { EMPTY_STRING, SIDE_MENU_LIST } from '../../common/globalConstants';
import { SET_MAIN_MENU_OPEN, SET_SPOT_DETAIL_OPEN } from '../../actions/main';

describe('main reducer', () => {
  it('何も渡さない場合にinitialStateを返すこと', () => {
    expect(main(undefined, {})).toEqual({
      isMainMenuOpen: false,
      isSpotDetailOpen: false,
      isSideMenuOpen: false,
      dislayContent: EMPTY_STRING,
      spotId: EMPTY_STRING,
    });
  });

  it('SET_MAIN_MENU_OPENアクションを渡すと、isSideMenuOpenを書き換えること', () => {
    expect(main(undefined, {
      type: SET_MAIN_MENU_OPEN,
      payload: true,
    })).toEqual({
      isMainMenuOpen: true,
      isSpotDetailOpen: false,
      isSideMenuOpen: true,
      dislayContent: SIDE_MENU_LIST.MAIN_MENU,
      spotId: EMPTY_STRING,
    });
  });

  it('SET_SPOT_DETAIL_OPENアクションを渡すと、isSideMenuOpenを書き換えること', () => {
    expect(main(undefined, {
      type: SET_SPOT_DETAIL_OPEN,
      payload: {
        isSpotDetailOpen: true,
        spotId: '1',
      },
    })).toEqual({
      isMainMenuOpen: false,
      isSpotDetailOpen: true,
      isSideMenuOpen: true,
      dislayContent: SIDE_MENU_LIST.SPOT_DETAIL,
      spotId: '1',
    });
  });
});
