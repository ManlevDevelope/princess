import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import registSaga from './regist';
axios.defaults.baseURL = 'http://localhost:3080';
// axios.defaults.baseURL = 'https://pockethive-server.herokuapp.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(registSaga)]);
}
