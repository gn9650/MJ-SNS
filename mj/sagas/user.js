import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  TESTCALL_FAILURE,
  TESTCALL_REQUEST,
  TESTCALL_SUCCESS,
  //
  USERCALL_REQUEST,
  USERCALL_SUCCESS,
  USERCALL_FAILURE,
  //
  LOGINUSER_REQUEST,
  LOGINUSER_SUCCESS,
  LOGINUSER_FAILURE,
  //
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  //
  
  GET_FEED_REQUEST,
  GET_FEED_SUCCESS,
  GET_FEED_FAILURE,
} from "../reducers/user";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
function testAPI() {
  return axios.get(`http://localhost:4000/api/sns/user`);
}

function* test(action) {
  try {
    const result = yield call(testAPI);

    yield put({
      type: TESTCALL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: TESTCALL_FAILURE,
      error: err.response.data,
    });
  }
}

function* user() {
  try {
    const result = yield call(testAPI);

    yield put({
      type: USERCALL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USERCALL_FAILURE,
      error: err.response.data,
    });
  }
}
/////////////////////////////////////////////

function getLoginUserAPI(data) {
  return axios.post(`http://localhost:4000/api/sns/get/one`, data);
}

function* getLoginUser(action) {
  try {
    const result = yield call(getLoginUserAPI, action.data);

    yield put({
      type: LOGINUSER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGINUSER_FAILURE,
      error: err.response.data,
    });
  }
}

//

function getFriendsAPI(data) {
  return axios.post(`http://localhost:4000/api/sns/get/friends`, data);
}

function* getFriends(action) {
  try {
    const result = yield call(getFriendsAPI, action.data);

    yield put({
      type: GET_FRIENDS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_FRIENDS_FAILURE,
      error: err.response.data,
    });
  }
}
//

function getFeedAPI(data) {
  return axios.post(`http://localhost:4000/api/sns/get/feed`, data);
}

function* getFeed(action) {
  try {
    const result = yield call(getFeedAPI, action.data);

    yield put({
      type: GET_FEED_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_FEED_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

function* watchTestCall() {
  yield takeLatest(TESTCALL_REQUEST, test);
}

function* watchUserCall() {
  yield takeLatest(USERCALL_REQUEST, user);
}

function* watchLoginUser() {
  yield takeLatest(LOGINUSER_REQUEST, getLoginUser);
}

function* watchGetFriends() {
  yield takeLatest(GET_FRIENDS_REQUEST, getFriends);
}

function* watchGetFeed() {
  yield takeLatest(GET_FEED_REQUEST, getFeed);
}

//////////////////////////////////////////////////////////////
export default function* userSaga() {
  yield all([
    fork(watchTestCall),
    fork(watchUserCall),
    fork(watchLoginUser),
    fork(watchGetFriends),
    fork(watchGetFeed),

    //
  ]);
}