import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./index.scss";
class GoodBadLabel extends Component {
  render() {
    const { goodNum } = this.props;
    return (
      <View className='goodBad'>
        <View className="good-bad">
          <Image src={require("../../images/good-bad.png")} />
        </View>
        <View className="good-num">{goodNum&&goodNum}</View>
      </View>
    );
  }
}

export default GoodBadLabel;
