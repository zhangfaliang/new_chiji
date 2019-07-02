import {
  ANSWER_PAGE_INDEX_SET,
  ANSWER_PAGE_INDEX_GET
} from "../constants/answer";
const INITIAL_STAT ={

}
export default (state = INITIAL_STAT, action) => {
  switch (action.type) {

    case ANSWER_PAGE_INDEX_SET:
      return {
          ...state,
          data:action.data
      }
    default:
      return state
  }
};
