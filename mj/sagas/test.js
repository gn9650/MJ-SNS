import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {} from "../reducers/test";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
// function testAPI() {
//   return axios.get(`/testURL`);
// }

// function* test() {
//   try {
//     const result = yield call(testAPI);

//     yield put({
//       type: TEST_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: TEST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// function* watchTest() {
//   yield takeLatest(TEST_REQUEST, test);
// }

//////////////////////////////////////////////////////////////
export default function* testSaga() {
  yield all([
    // fork(watchTest),
    //
  ]);
}