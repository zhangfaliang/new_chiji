import { PAGE_INDEX_SET, PAGE_INDEX_CLEAR } from "../constants/index";

const INITIAL_STATE = {
  pageDate: []
};

export default function pageIndex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGE_INDEX_SET:
      return {
        ...state,
        pageDate: [...state.pageDate, ...action.data.data]
      };
    case PAGE_INDEX_CLEAR:
      return {
        ...state,
        pageDate: []
      };

    default:
      return state;
  }
}
