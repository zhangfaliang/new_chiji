import { get } from 'lodash';
import { createSelector } from 'reselect'
const answerDetail = (state) =>get(state,'answerList',{}) 

export const makeAnswerList = createSelector(
  answerDetail,
  (answerDetail) => {
     return get(answerDetail,'data',{}) 
  }
)
