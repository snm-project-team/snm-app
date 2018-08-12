import { handleActions } from 'redux-actions';
import { SET_USER_TOKEN } from '../actions/authentication';

const defaultState = {
  userToken: '',
};

export default handleActions({
  [SET_USER_TOKEN]: (state, action) => ({
    ...state,
    userToken: action.payload,
  }),
}, defaultState);
