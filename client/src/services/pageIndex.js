import Taro from "@tarojs/taro";
import { get } from "lodash";
import { testDB } from "../app";
import { processRes, replaceReg } from "../utils/processRes";

export const getPageIndexSqlData = pageNum => {
  return testDB
    .collection("indexList")
    .orderBy("_id", "desc")
    .skip(pageNum * 20) // 跳过结果集中的前 10 条，从第 11 条开始返回
    .limit((pageNum + 1) * 20) //
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
};

export const getIndexUrlData = ({ pageNum, apiParams }) => {
  const { header, url, params } = apiParams;
  return Taro.request({
    url,
    data: {
      ...params,
      page: pageNum || 0
    },
    header
  }).then(res => {
    return JSON.parse(processRes(get(res, "data")));
  });
};

export const getIndexAdvertising = pageNum => {
  return testDB
    .collection("indexAdvertising")
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
};
export const getConfig = () => {
  return testDB
    .collection("appConfig")
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
};

export const getPageIndexDate = pageNum => {
  return Taro.request({
    url: "https://m.weibo.cn/api/container/getIndex",
    data: {
      uid: 5529945701,
      luicode: 10000011,
      lfid:
        "100103type%3D64%26q%3D%E5%88%BA%E6%BF%80%E6%88%98%E5%9C%BA%26t%3D0",
      type: "uid",
      value: "5529945701",
      containerid: "1076035529945701",
      page: pageNum || 0
    },
    header: {
      "content-type": "application/json"
    }
  }).then(res => {
    return JSON.parse(processRes(get(res, "data")));
  });
};
// 头部更新
export const getIndexTotal = () => {
  return testDB.collection("indexList").count();
};

export const getIndexAdvertising = () => {
  return testDB
    .collection("indexAdvertising")
    .orderBy("_id", "desc")
    .limit(20) //
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
};
