import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  UPLOAD_ITEM_REQUEST,
  UPLOAD_ITEM_FAILURE,
  UPLOAD_ITEM_SUCCESS,
} from '../Actions';

function uploadItemAPI(data) {
  console.log(data);
  return axios.post('/item/upload', data);
}

function* uploadItem(action) {
  try {
    yield call(uploadItemAPI, action.data);
    yield put({
      type: UPLOAD_ITEM_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_ITEM_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadItem() {
  yield takeLatest(UPLOAD_ITEM_REQUEST, uploadItem);
}

export default function* registSaga() {
  yield all([fork(watchUploadItem)]);
}
