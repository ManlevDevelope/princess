import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  NICK_CHECK_REQUEST,
  NICK_CHECK_SUCCESS,
  NICK_CHECK_FAILURE,
  NICK_CHANGED,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../Actions';
import produce from '../utils';

const initialState = {
  me: null,
  loading: true,
  nickCheck: false,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,

  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  checkNickLoading: false,
  checkNickDone: false,
  checkNickError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};
export const loginRequestAction = (data) => {
  console.log('reducer login request:', data);
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};
export const signUpRequestAction = (data) => {
  console.log('reducer signup request:', data);
  return {
    type: SIGN_UP_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.loading = false;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        draft.loading = false;

        draft.me = null;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case NICK_CHECK_REQUEST:
        draft.nickCheckLoading = true;
        draft.nickCheckDone = false;
        draft.nickCheckError = null;
        break;
      case NICK_CHECK_SUCCESS:
        draft.nickCheckLoading = false;
        draft.nickCheckDone = true;
        draft.nickCheck = action.data;
        break;
      case NICK_CHANGED:
        draft.nickCheck = false;
        break;
      case NICK_CHECK_FAILURE:
        draft.nickCheckError = action.error;
        draft.nickCheckLoading = false;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.me = action.data;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
