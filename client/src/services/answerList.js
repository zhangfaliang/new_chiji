import { get } from "lodash";

import { testDB } from "../app";
export const getAnswerList = question_id => {

  return testDB
    .collection("answerList")
    .where({
      question_id: question_id
    })
    .get()
    .then(res => {
      return get(res, "data.0", {});
    });
};
