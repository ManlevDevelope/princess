import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3080';
// axios.defaults.baseURL = 'https://pockethive-server.herokuapp.com';
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
