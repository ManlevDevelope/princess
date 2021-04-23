import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({ userReducer });
  return combineReducer(state, action);
};

export default rootReducer;
