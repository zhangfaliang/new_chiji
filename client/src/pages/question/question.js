import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { get } from "lodash";
import { View, Text, Image } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

import "./question.scss";
import QuestionTag from "../../components/questionTag";
import QuestionName from "../../components/questionName";
import UserLabel from "../../components//answerUserInfo/userLabel";
import {
  QueFollow,
  FollowLeft,
  QuestionLabel
} from "../../components/queFollow";
import { AnswerTodo, AnswerTodoWrap } from "../../components/answerTodo";
import AnswerAction from "../../components/answerActions";
import IndexAnswerInfo from "../../components/indexAnswerInfo/index";
import AnswerQuestionContent from "../../components/answerQuestionContent/index";
import { getAnswerListPageData } from "../../actions/answerList";
import Buttons from "../../components/button/index";
import { makeAnswerList } from "../../selects/answerList";

@connect(
  createStructuredSelector({
    answerList: makeAnswerList
  }),
  dispatch => ({
    onGetAnswerListPageData: question_id => {
      dispatch(getAnswerListPageData(question_id));
    }
  })
)
class Question extends Component {
  bindItemTap = answer_id => {
    Taro.navigateTo({
      url: `../answer/answer?answer_id=${answer_id}`
    });
  };
  componentWillMount() {
    const question_id = get(this, "$router.params.question_id");
    this.props.onGetAnswerListPageData(question_id);
  }
  render() {
    const { answerList } = this.props;
    return (
      <View className="container">
        <View className="question-wrp">
          <View className="question-item">
            <QuestionTag tags={answerList.tag} />
            <QuestionName classNames="que-title" question={answerList.title} />
            <UserLabel user_label={answerList.user_label} />
            <QueFollow>
              <FollowLeft>
                <QuestionLabel
                  imageUrl={require("../../images/eye.png")}
                  text={answerList.watch_num}
                />
                <QuestionLabel
                  imageUrl={require("../../images/comment2.png")}
                  text={answerList.comment_num}
                />
              </FollowLeft>
              <Buttons />
            </QueFollow>
          </View>
          <AnswerTodoWrap>
            <AnswerTodo
              text="邀请回答"
              imageUrl={require("../../images/invite.png")}
            />
            <AnswerTodo
              text="写回答"
              imageUrl={require("../../images/write.png")}
            />
          </AnswerTodoWrap>
          <View className="answer-feed">
            {answerList.answerInfo &&
              answerList.answerInfo.map((item, idx) => {
                const { answer_name, answer_txt, texts, answer_id } = item;
                return (
                  <View
                    onClick={this.bindItemTap.bind(this, answer_id)}
                    className="feed-item"
                  >
                    <IndexAnswerInfo
                      feed_source_img={require("../../images/icon1.jpeg")}
                      feed_source_name={answer_name}
                      feed_source_txt={""}
                    />

                    <View className="feed-content">
                      <View className="answer-body">
                        <View>
                          <AnswerQuestionContent
                            bindItemTap={this.bindItemTap}
                            answer_ctnt={answer_txt}
                            answer_id={1}
                          />
                          <View>
                            <Text className="answer-txt" />
                          </View>
                          <AnswerAction texts={texts} />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}

export default Question;
