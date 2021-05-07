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
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../Actions';

// function api(data) {
//   // return axios.get('http://localhost:3080');
//   console.log('saga api test');
// }

// function* initModel(action) {
//   try {
//     yield call(api, action.data);
//     yield delay(1000);

//     yield put({
//       type: 'INIT_SUCCESS',
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: 'INIT_FAILURE',
//     });
//   }
// }

// function* watchInitModel() {
//   yield takeLatest('INIT', initModel);
// }

function loginAPI(data) {
  return axios.get('/user/login', data);
  // console.log('saga api test');
}

function* login(action) {
  try {
    yield delay(1000);
    const { history, email, password } = action.data;
    // yield call(loginAPI, {email, password});
    history.replace('/');
    yield put({
      type: LOG_IN_SUCCESS,
      data: { email, password },
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
  return axios.get('/user', data);
  // console.log('saga api test');
}

function* signUp(action) {
  try {
    yield delay(1000);
    const { history, nickname } = action.data;
    // const {}=action.data;

    // yield call(signUpAPI, action.data);
    history.replace('/');
    yield put({
      type: SIGN_UP_SUCCESS,
      data: { nickname },
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

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchSignUp)]);
}
