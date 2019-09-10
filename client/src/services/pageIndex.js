import Taro from "@tarojs/taro";
import { get } from "lodash";
import { testDB } from "../app";
import { processRes } from "../utils/processRes";

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
