// src/actions/counter.js
import { testDB } from "../app";
import {
  PAGE_INDEX_GET,
  PAGE_INDEX_SET,
  PAGE_INDEX_UPPER,
  PAGE_INDEX_LOWER,
  PAGE_INDEX_CLEAR,
  PAGE_INDEX_DETAIL_SET,
  API_LAST_PAGE_NUM,
  API_UPDATE_PAGE_NUM,
  SET_CONFIG,
  GET_CONFIG,
  GET_DATEIL_SQL_DATA,
  SET_DATEIL_SQL_DATA,
  INIT_PAGE
} from "../constants/index.js";

export const getData = pageNum => {
  return {
    type: PAGE_INDEX_GET,
    pageNum
  };
};
export const setData = data => {
  return {
    type: PAGE_INDEX_SET,
    data
  };
};
export const getDataUpper = pageNum => {
  return {
    type: PAGE_INDEX_UPPER,
    pageNum
  };
};

export const getDataLower = pageNum => {
  return {
    type: PAGE_INDEX_LOWER,
    pageNum
  };
};

export const clearData = () => {
  return {
    type: PAGE_INDEX_CLEAR
  };
};
export const setPageIndexDetail = detailData => {
  return {
    type: PAGE_INDEX_DETAIL_SET,
    detailData
  };
};

export const setLastPageNum = lastPageNum => {
  return {
    type: API_LAST_PAGE_NUM,
    lastPageNum
  };
};
export const setUpdatePageNum = updatePageNum => {
  return {
    type: API_UPDATE_PAGE_NUM,
    updatePageNum
  };
};

export const getConfig = () => {
  return {
    type: GET_CONFIG
  };
};

export const setConfig = configData => {
  return {
    type: SET_CONFIG,
    configData
  };
};

export const initPage = () => {
  return {
    type: INIT_PAGE
  };
};


export const getDatailSQL = () => {
  return {
    type: GET_DATEIL_SQL_DATA
  };
};
export const setDatailSQL = (data) => {
  return {
    type: SET_DATEIL_SQL_DATA,
    data
  };
};
