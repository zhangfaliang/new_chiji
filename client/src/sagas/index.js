import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import pageIndex from './pageIndex';
import answer from './answer';
import answerList from './answerList';

export default function* rootSaga() {
  yield all([
    pageIndex(),
    answer(),
    answerList()
  ])
}