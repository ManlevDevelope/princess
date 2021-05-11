import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
} from '@redux-saga/core/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  NICK_CHECK_FAILURE,
  NICK_CHECK_REQUEST,
  NICK_CHECK_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../Actions';

function loginAPI(data) {
  return axios.post('/user/login', data);
  // console.log('saga api test');
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function logOutAPI(data) {
  return axios.get('/user/logout', data);
  // console.log('saga api test');
}

function* logOut(action) {
  try {
    // yield call(logOutAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function signUpAPI(data) {
  return axios.post('/user', data);
  // console.log('saga api test');
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function checkNickAPI(data) {
  return axios.post('/user/nickname', data);
}

function* checkNickname(action) {
  try {
    console.log(action);
    const result = yield call(checkNickAPI, { nickname: action.data });
    yield put({
      type: NICK_CHECK_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NICK_CHECK_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchCheckNickname() {
  yield takeLatest(NICK_CHECK_REQUEST, checkNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchCheckNickname),
  ]);
}
