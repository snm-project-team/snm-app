import { handleActions } from 'redux-actions';
import { SET_STORE_INFO_IS_OPEN } from '../actions/map';

const defaultState = {
  isOpen: false
};

export default handleActions({
  [SET_STORE_INFO_IS_OPEN]: (state, action) => ({
    ...state,
    isOpen: action.payload
  })
}, defaultState);