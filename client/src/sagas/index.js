import { put, takeEvery, all } from 'redux-saga/effects'
import pageIndex from './pageIndex';

export default function* rootSaga() {
  yield all([
    pageIndex(),
  ])
}