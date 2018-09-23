import { handleActions } from 'redux-actions';
import { EMPTY_OBJECT } from '../common/globalConstants';
import { SET_SPOT_INFO } from '../actions/spotDetail';

const defaultState = {
  spotInfo: EMPTY_OBJECT,
};

export default handleActions({
  [SET_SPOT_INFO]: (state, action) => ({
    ...state,
    spotInfo: action.payload,
  }),
}, defaultState);
