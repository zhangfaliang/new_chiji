import { combineReducers } from 'redux'
import counter from './counter.js'
import pageIndex from './pageIndex';
import answerDetail from './answer';
import answerList from './answerList';

export default combineReducers({
  counter,
  pageIndex,
  answerDetail,
  answerList
})