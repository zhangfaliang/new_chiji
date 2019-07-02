import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import {  View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { get } from "lodash";
import { makeAnswerDetail } from '../../selects/answer';
import "./answer.scss";
import { getAnswerPageData } from "../../actions/answer";
@connect(
  createStructuredSelector({
    answerDetail:makeAnswerDetail
  }),
  dispatch => ({
    getAnswerPageData: answer_id => {
      dispatch(getAnswerPageData(answer_id));
    }
  })
)
class Answer extends Component {

  // toQuestion = () => {
  //   Taro.navigateTo({
  //     url: "../question/question"
  //   });
  // };
  // tapName = event => {
  //   console.log(event);
  // };
  // config = {
  //   navigationBarTitleText: "回答"
  // };
  componentWillMount = () => {
    const answer_id = get(this, "$router.params.answer_id");
    this.props.getAnswerPageData(answer_id);  
  };


  render() {
    const data = get(this.props,'answerDetail',{});
    return (
      <View className="container">
        {/* <View className="question" onClick={this.toQuestion}>
          <Text className="question-title">{data.title}</Text>
        </View>
        <View className="answerer-wrp">
          <View className="bg-half" />
          <View className="answerer flex-wrp">
            <View className="avatar flex-item">
              <Image src={data.userInfo.userImg} />
            </View>
            <View className="answerer-info flex-item">
              <Text className="answerer-name">{data.userInfo.name}</Text>
              <Text className="answerer-des">{data.userInfo.label}</Text>
            </View>
            <View className="follow flex-item">
              <Text>十 关注</Text>
            </View>
          </View>
        </View>
        <View className="answer-content">
          {data.content&&data.content.map(item => {
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
        <View className="answer-footer flex-wrp">
          <View className="good flex-item">
            <View className="good-bad">
              <Image src={require("../../images/good-bad.png")} />
            </View>
            <View className="good-num">{data.goodNum}</View>
          </View>
          <View className="operation-wrp flex-item">
            <View className="operation flex-wrp flex-tab">
              <View className="operation-btn flex-item">
                <Image src={require("../../images/flag.png")} />
                <Text>没有帮助</Text>
              </View>
              <View className="operation-btn flex-item">
                <Image src={require("../../images/heart2.png")} />
                <Text>感谢</Text>
              </View>
              <View className="operation-btn flex-item">
                <Image src={require("../../images/star2.png")} />
                <Text>收藏</Text>
              </View>
              <View className="operation-btn flex-item">
                <Image src={require("../../images/comment.png")} />
                <Text>{data.commentNum}</Text>
              </View>
            </View>
          </View>
        </View> */}
      </View>
    );
  }
}

export default Answer;
