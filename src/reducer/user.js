import produce from '../utils';

const initialState = {
  me: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
};
export const loginRequestAction = (data) => {
  console.log('reducer login request:', data);
  return {
    type: 'LOGIN_REQUEST',
    data,
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case 'LOGIN_SUCCESS':
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case 'LOG_IN_FAILURE':
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
