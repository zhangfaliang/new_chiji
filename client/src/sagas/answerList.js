import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Taro from "@tarojs/taro";

import { getAnswerList } from "../services/answerList";
import {
  ANSWER_PAGE_LIST_GET,
  ANSWER_PAGE_LIST_SET
} from "../constants/answer.js";
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchData(action) {
  const { question_id } = action;
  console.log(question_id, "ANSWER_PAGE_INDEX_SET");

  try {
    const data = yield call(getAnswerList, question_id);
    yield put({ type: ANSWER_PAGE_LIST_SET, data });
  } catch (e) {
    console.log("ANSWER_PAGE_INDEX_SET");
  }
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `PAGE_INDEX_SET` action 时，
  如果在这之前已经有一个 `PAGE_INDEX_SET` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
  yield takeEvery(ANSWER_PAGE_LIST_GET, fetchData);
}

export default mySaga;
