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
  LOG_OUT_REQUEST,
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
    // yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
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
      type: LOG_IN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut)]);
}
