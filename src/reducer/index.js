import user from './user';
import item from './item';
import { combineReducers } from 'redux';

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({ user, item });
  return combineReducer(state, action);
};

export default rootReducer;
