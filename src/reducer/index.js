import user from './user';
import { combineReducers } from 'redux';

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({ user });
  return combineReducer(state, action);
};

export default rootReducer;
