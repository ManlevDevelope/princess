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
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
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
  WHO_FAILURE,
  WHO_REQUEST,
  WHO_SUCCESS,
} from '../Actions';

function loginAPI(data) {
  return axios.post('/user/login', data);
  // console.log('saga api test');
}

function takeToken(data) {
  axios.defaults.headers.common['Authorization'] = data;
  return localStorage.setItem('user', data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    console.log(result);
    yield call(takeToken, result.data.accessToken);

    const { nickname } = result.data;
    yield put({
      type: LOG_IN_SUCCESS,
      data: { nickname },
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

function whoAPI(data) {
  return axios.post('/user/who', data);
}

function* who(action) {
  try {
    const result = yield call(whoAPI, { nickname: action.data });
    yield put({
      type: WHO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WHO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchWho() {
  yield takeLatest(WHO_REQUEST, who);
}

// load user
function loadMyInfoAPI() {
  return axios.post('/user/auth');
}

function* loadMyInfo() {
  try {
    // yield delay(1000);
    const result = yield call(loadMyInfoAPI); // call ?????? ?????????
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
    // put??? dispatch?????? ?????????
  } catch (err) {
    yield put({ type: LOAD_MY_INFO_FAILURE, error: err.response.data });
  }
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
  // ????????? ?????? ???????????????
  // ????????? ???????????? ??????
  // ?????? take??? ???????????? ?????????
  // ????????? while(true)????????? takeEvery??? ?????????
  // takeLatest??? ?????? ?????? ??????????????? ?????? ????????? ?????? ????????????(???????????????) ????????? ????????? ??????. ????????? ?????? ??????
  // takeReading??? ???????????????????????? ??????????????? ??????
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchWho),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchCheckNickname),
    fork(watchLoadMyInfo),
  ]);
}
