import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import itemSaga from './item';
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    // ? 'https://pockethive.ga/api'
    // : 'http://localhost:3080';
    ? 'https://pockethive.net/api'
    : 'http://localhost:3080';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(itemSaga)]);
}
