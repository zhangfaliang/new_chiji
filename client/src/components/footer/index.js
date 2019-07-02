import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import GoodBadLabel from "./goodBadLabel";
import OperationBtn from "./operationBtn";
import "./index.scss";
const arr = [
  { imgUrl: require("../../images/flag.png"), text: "没有帮助" },
  { imgUrl: require("../../images/heart2.png"), text: "感谢" },
  { imgUrl: require("../../images/star2.png"), text: "收藏" },
  { imgUrl: require("../../images/comment.png"), text: "304" }
];
class Footer extends Component {
  handleClick = text => {
    console.log(text);
  };
  render() {
    const { answerDetail } = this.props;
    return (
      <View className="answer-footer flex-wrp">
        <View className="good flex-item">
          <GoodBadLabel goodNum={answerDetail&&answerDetail.goodNum} />
        </View>
        <View className="operation-wrp flex-item">
          <View className="operation flex-wrp flex-tab">
            {arr.map(item => {
              return (
                <OperationBtn
                  handleClick={this.handleClick}
                  imgUrl={item.imgUrl}
                  text={item.text}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Footer;
