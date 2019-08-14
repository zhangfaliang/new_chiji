import { get } from "lodash";
import { testDB } from "../app";
export const getAnswerDetail = answer_id => {
  return testDB
    .collection("answerDetail")
    .where({
      answer_id: answer_id
    })
    .get()
    .then(res => {
      return get(res, "data.0", {});
    });
};

export const getTextDetail = key_id => {
  return testDB
    .collection("cj_detail")
    .where({
      key_id: key_id
    })
    .get()
    .then(res => {
      return get(res, "data.0", {});
    });
};
