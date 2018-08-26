import { handleActions } from 'redux-actions';
import { SET_USER_UID } from '../actions/authentication';

const defaultState = {
  userToken: '',
};

export default handleActions({
  [SET_USER_UID]: (state, action) => ({
    ...state,
    userToken: action.payload,
  }),
}, defaultState);
