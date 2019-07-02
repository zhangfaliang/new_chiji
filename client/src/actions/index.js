// src/actions/counter.js
import { testDB } from '../app';
import {
    PAGE_INDEX_GET,
    PAGE_INDEX_SET,
    PAGE_INDEX_UPPER,
    PAGE_INDEX_LOWER,
    PAGE_INDEX_CLEAR
  } from '../constants/index.js'
  
  export const getData = (pageNum) => {
    return {
      type: PAGE_INDEX_GET,
      pageNum
    }
  }
  export const setData = (data) => {
    return {
      type: PAGE_INDEX_SET,
      data
    }
  }
  export const getDataUpper = (pageNum) => {
    return {
      type: PAGE_INDEX_UPPER,
      pageNum
    }
  }

  export const getDataLower = (pageNum) => {
    return {
      type: PAGE_INDEX_LOWER,
      pageNum
    }
  }

  export const clearData = () => {
    return {
      type: PAGE_INDEX_CLEAR,
    }
  }

  