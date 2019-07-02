import { get } from "lodash";
import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./answer.scss";
import { getAnswerPageData } from "../../actions/answer";
import { makeAnswerDetail } from "../../selects/answer";
import Footer from "../../components/footer/index";
import AnswerUserInfo from "../../components/answerUserInfo/index";
@connect(
  createStructuredSelector({
    answerDetail: makeAnswerDetail
  }),
  dispatch => ({
    onGetAnswerPageData: answer_id => {
      dispatch(getAnswerPageData(answer_id));
    }
  })
)
class Toggle extends Component {
  componentWillMount() {
    const answer_id = get(this, "$router.params.answer_id");
    this.props.onGetAnswerPageData(answer_id);
  }
  toQuestion = () => {
    Taro.navigateTo({
      url: "../question/question"
    });
  };
  tapName = event => {
    console.log(event);
  };
  config = {
    navigationBarTitleText: "回答"
  };
  render() {
    const { answerDetail } = this.props;
    return (
      <View className="container">
        <View className="question" onClick={this.toQuestion}>
          <Text className="question-title">{answerDetail.title}</Text>
        </View>
        <AnswerUserInfo userInfo={answerDetail.userInfo} />
        <View className="answer-content">
          {answerDetail.content &&
            answerDetail.content.map(item => {
              const { text, img } = item;
              return (
                <view>
                  {text ? <Text>{text}</Text> : ""}
                  {img ? (
                    <Image src={"../../images/1444983318907-_DSC1826.jpg"} />
                  ) : (
                    ""
                  )}
                </view>
              );
            })}
        </View>
        <View className="answer-footer-content">
          <Footer answerDetail={answerDetail} />
        </View>
      </View>
    );
  }
}

export default Toggle;
