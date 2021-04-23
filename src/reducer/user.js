import produce from '../utils';

const initialState = {
  name: '',
  me: null,
  loginData: {},
  signUpData: {},
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'INIT':
        console.log('saga test in reducer');
        break;
      default:
        break;
    }
  });

export default reducer;
