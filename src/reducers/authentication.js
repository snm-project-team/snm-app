import { handleActions } from 'redux-actions';
import { EMPTY_STRING } from '../common/globalConstants';
import { SET_USER_UID, SET_ERROR_INFO } from '../actions/authentication';

const defaultState = {
  userToken: EMPTY_STRING,
  errorCode: EMPTY_STRING,
  errorMessage: EMPTY_STRING,
};

export default handleActions({
  [SET_USER_UID]: (state, action) => ({
    ...state,
    userToken: action.payload,
  }),
  [SET_ERROR_INFO]: (state, action) => ({
    ...state,
    errorCode: action.payload.errorCode,
    errorMessage: action.payload.errorMessage,
  }),
}, defaultState);
