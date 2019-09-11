import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
const pageIndex = state => state.pageIndex;

export const makePageIndex = createSelector(
  pageIndex,
  pageIndex => {
    return pageIndex;
  }
);
export const makeFeed = createSelector(
  pageIndex,
  pageIndex => {
    return {
      feed: get(pageIndex, "pageDate", []).filter(
        item => !isEmpty(item) && !/微博投票/.test(item.title)
      ),
      feed_length: get(pageIndex, "pageDate", []).length
    };
  }
);

export const makeDetailData = createSelector(
  pageIndex,
  pageIndex => {
    return get(pageIndex, "index_detail", { isMedia: false, isText: false });
  }
);
export const makeLastPageNum = createSelector(
  pageIndex,
  pageIndex => {
    return get(pageIndex, "lastPageNum", 0);
  }
);
export const makeAdvertising = createSelector(
  pageIndex,
  pageIndex => {
    const { advertising, advertisingIndexDetail, video } = get(
      pageIndex,
      "indexAdvertising",
      {}
    );
    return {
      advertising,
      advertisingIndexDetail,
      video
    };
  }
);

export const makeIndexAdvertising = createSelector(
  makeAdvertising,
  advertising => {
    return get(advertising, "advertising");
  }
);
export const makeIndexDetailAdvertising = createSelector(
  makeAdvertising,
  advertising => {
    return get(advertising, "advertisingIndexDetail");
  }
);
export const makeIndexVideolAdvertising = createSelector(
  makeAdvertising,
  advertising => {
    return get(advertising, "video");
  }
);
export const makeConfig = createSelector(
  pageIndex,
  data => {
    return get(data, "config", {});
  }
);

export const makeIsAPI = createSelector(
  makeConfig,
  config => {
    return get(config, "isApi", false);
  }
);

export const makeTitleList = createSelector(
  pageIndex,
  data => {
    return get(data, "titleList", []);
  }
);

export const makeDatailText = createSelector(
  pageIndex,
  data => {
    return get(data, "datailText.data", {});
  }
);

export const makeConfigAll = createSelector(
  pageIndex,
  data => {
    const apiParams = get(data, "config.apiParams", {
      header: { "content-type": "application/json" },
      params: {
        uid: 5529945701,
        luicode: 10000011,
        lfid:
          "100103type%3D64%26q%3D%E5%88%BA%E6%BF%80%E6%88%98%E5%9C%BA%26t%3D0",
        type: "uid",
        value: "5529945701",
        containerid: "1076035529945701",
        page: 0
      },
      url: "https://m.weibo.cn/api/container/getIndex"
    });
    return {
      apiParams,
      isApi: get(data, "config.isApi")
    };
  }
);
