import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
} from '@redux-saga/core/effects';
import axios from 'axios';

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
      type: 'LOGIN_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: 'LOGIN_FAILURE',
    });
  }
}

function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
