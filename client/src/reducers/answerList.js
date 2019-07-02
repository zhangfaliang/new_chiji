import {
    ANSWER_PAGE_LIST_SET,
  } from "../constants/answer";
  const INITIAL_STAT ={
  
  }
  export default (state = INITIAL_STAT, action) => {
    switch (action.type) {
  
      case ANSWER_PAGE_LIST_SET:
        return {
            ...state,
            data:action.data
        }
      default:
        return state
    }
  };
  