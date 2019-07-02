import { get } from 'lodash';
import { createSelector } from 'reselect'
const answerDetail = (state) =>get(state,'answerDetail',{}) 

export const makeAnswerDetail = createSelector(
  answerDetail,
  (answerDetail) => {
     return get(answerDetail,'data',{}) 
  }
)
