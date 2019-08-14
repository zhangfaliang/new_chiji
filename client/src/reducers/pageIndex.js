import {
  PAGE_INDEX_SET,
  PAGE_INDEX_CLEAR,
  PAGE_INDEX_DETAIL_SET,
  API_LAST_PAGE_NUM,
  API_UPDATE_PAGE_NUM,
  SET_PAGE_INDEX_ADVERTISING,
  SET_CONFIG,
  SET_SQL_DATA,
  SET_DATEIL_SQL_DATA
} from "../constants/index";

const INITIAL_STATE = {
  pageDate: [],
  index_detail: {},
  lastPageNum: 0,
  updatePageNum: 1,
  indexAdvertising: {},
  config: {},
  titleList: [],
  datailText: {}
};

export default function pageIndex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGE_INDEX_SET:
      return {
        ...state,
        pageDate: [...state.pageDate, ...action.data]
      };
    case PAGE_INDEX_CLEAR:
      return {
        ...state,
        pageDate: []
      };
    case PAGE_INDEX_DETAIL_SET:
      return {
        ...state,
        index_detail: action.detailData
      };
    case API_LAST_PAGE_NUM:
      return {
        ...state,
        lastPageNum: action.lastPageNum
      };
    case API_UPDATE_PAGE_NUM:
      return {
        ...state,
        lastPageNum: action.updatePageNum
      };
    case SET_PAGE_INDEX_ADVERTISING:
      return {
        ...state,
        indexAdvertising: action.indexAdvertising
      };
    case SET_CONFIG:
      return {
        ...state,
        config: action.config
      };
    case SET_SQL_DATA:
      return {
        ...state,
        titleList: action.titleList
      };
    case SET_DATEIL_SQL_DATA:
      return {
        ...state,
        datailText: action.data
      };

    default:
      return state;
  }
}
