import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  UPLOAD_ITEM_REQUEST,
  UPLOAD_ITEM_FAILURE,
  UPLOAD_ITEM_SUCCESS,
  GIVE_ITEM_REQUEST,
  GIVE_ITEM_FAILURE,
  GIVE_ITEM_SUCCESS,
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

function giveItemAPI(data) {
  console.log(data);
  return axios.post('/item/give', data);
}

function* giveItem(action) {
  try {
    yield call(giveItemAPI, action.data);
    yield put({
      type: GIVE_ITEM_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GIVE_ITEM_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchGiveItem() {
  yield takeLatest(GIVE_ITEM_REQUEST, giveItem);
}
export default function* registSaga() {
  yield all([fork(watchUploadItem), fork(watchGiveItem)]);
}
