import {
    ANSWER_PAGE_INDEX_GET,
    ANSWER_PAGE_INDEX_SET,
  } from '../constants/answer.js'

  export const getAnswerPageData =(answer_id)=>{
      return{
          type:ANSWER_PAGE_INDEX_GET,
          answer_id
      }
  }
  
  export const setAnswerPageData =(data)=>{
    return{
        type:ANSWER_PAGE_INDEX_SET,
        data
    }
}