import axios from 'axios';
import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';

function api(data) {
  // return axios.get('http://localhost:3080');
  console.log('saga api test');
}

function* initModel(action) {
  try {
    yield call(api, action.data);
    yield delay(1000);

    yield put({
      type: 'INIT_SUCCESS',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: 'INIT_FAILURE',
    });
  }
}

function* watchInitModel() {
  yield takeLatest('INIT', initModel);
}

export default function* rootSaga() {
  yield all([fork(watchInitModel)]);
}
