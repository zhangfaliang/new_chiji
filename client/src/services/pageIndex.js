import Taro from "@tarojs/taro";
import { testDB } from "../app";

export const getPageIndexDate = pageNum => {
  return testDB
    .collection("indexList")
    .orderBy('_id', 'desc')
    .skip(pageNum * 20) // 跳过结果集中的前 10 条，从第 11 条开始返回
    .limit((pageNum + 1) * 20) //
    .get()
    .then(res => {
      // res.data 包含该记录的数据
      return res;
    });
  // return testDB
  //   .collection("pageIndex")
  //   .get()
  //   .then(res => {
  //     // res.data 包含该记录的数据
  //     return res;
  //   });
};
