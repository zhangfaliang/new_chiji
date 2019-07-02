import {
    ANSWER_PAGE_LIST_GET,
    ANSWER_PAGE_LIST_SET,
  } from '../constants/answer.js'

  export const getAnswerListPageData =(question_id)=>{
    return{
        type:ANSWER_PAGE_LIST_GET,
        question_id
    }
}

export const setAnswerListPageData =(data)=>{
  return{
      type:ANSWER_PAGE_LIST_SET,
      data
  }
}