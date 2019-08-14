import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import Taro from "@tarojs/taro";
import { get } from "lodash";
import { clearData } from "../actions/index";
import { makeConfigAll } from '../selects/pageIndex'
import {
  getConfig,
  getPageIndexSqlData,
  getIndexUrlData,
  getIndexAdvertising
} from "../services/pageIndex";
import {
  getTextDetail
} from "../services/answerDetail";
import {
  PAGE_INDEX_GET,
  PAGE_INDEX_SET,
  PAGE_INDEX_UPPER,
  PAGE_INDEX_LOWER,
  INIT_PAGE,
  SET_CONFIG,
  SET_SQL_DATA,
  GET_DATEIL_SQL_DATA,
  SET_DATEIL_SQL_DATA,
  SET_PAGE_INDEX_ADVERTISING
} from "../constants/index";
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用


function* initPage() {
  const data = yield call(getConfig);
  const indexAdvertising = yield call(getIndexAdvertising);  
  yield put({ type: SET_PAGE_INDEX_ADVERTISING, indexAdvertising });
  const res = get(data, "data.0", {});
  yield put({ type: SET_CONFIG, config: res });
  const { isApi, apiParams } = res;

  if (isApi) {
    const apiData = yield call(getIndexUrlData, { pageNum: 0, apiParams });
    yield put({ type: PAGE_INDEX_SET, data: apiData });
  } else {
    const sqlData = yield call(getPageIndexSqlData, 0);
    const titleList = get(sqlData, "data", []);
    yield put({ type: SET_SQL_DATA, titleList });
  }
}

function* getDatalSQL(action) {
  try {
    const { key_id } = action;
    const data = yield call(getTextDetail, key_id);
    yield put({ type: SET_DATEIL_SQL_DATA, data });
  } catch (e) {
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
  }
}


function* fetchData(action) {
  try {
    const { apiParams, isApi
    } = yield select(makeConfigAll);
    const { pageNum } = action;
    if (!isApi) return
    const data = yield call(getIndexUrlData, { pageNum, apiParams });
    yield put({ type: PAGE_INDEX_SET, data });
  } catch (e) {
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
  }
}

// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchUpdate(action) {
  try {
    const { apiParams, isApi
    } = yield select(makeConfigAll);
    Taro.showNavigationBarLoading();
    yield put(clearData());
    if (isApi) {
      const data = yield call(getIndexUrlData, { pageNum: 0, apiParams });
      yield put({ type: PAGE_INDEX_SET, data });
    }
    Taro.hideNavigationBarLoading();
    Taro.stopPullDownRefresh();
  } catch (e) {
    console.log(e);
  }
}
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchLower(action) {
  try {
    const { pageNum } = action;
    const { apiParams, isApi } = yield select(makeConfigAll);
    Taro.showNavigationBarLoading();
    Taro.showToast({
      title: "加载中",
      icon: "loading"
    });
    if (isApi&&apiParams) {
      const data = yield call(getIndexUrlData, { pageNum, apiParams });
      yield put({ type: PAGE_INDEX_SET, data });
    }
    Taro.showToast({
      title: "加载成功",
      icon: "success"
    });
    Taro.hideNavigationBarLoading();

  } catch (e) {
    console.log(e);
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
  }
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `PAGE_INDEX_SET` action 时，
  如果在这之前已经有一个 `PAGE_INDEX_SET` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
  yield takeLatest(INIT_PAGE, initPage);
  yield takeEvery(PAGE_INDEX_GET, fetchData);
  yield takeLatest(PAGE_INDEX_UPPER, fetchUpdate);
  yield takeLatest(PAGE_INDEX_LOWER, fetchLower);
  yield takeLatest(GET_DATEIL_SQL_DATA, getDatalSQL);


}

export default mySaga;
