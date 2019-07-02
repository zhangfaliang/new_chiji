import Nerv from "nervjs";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./chat.scss";
//logs.js
var util = require("../../utils/util.js");
// Page({
//  data: {
//    logs: []
//  },
//  onLoad: function () {
//    this.setData({
//      logs: (wx.getStorageSync('logs') || []).map(function (log) {
//        return util.formatTime(new Date(log))
//      })
//    })
//  }
// })

@withWeapp("Page")
class Chat extends Taro.Component {
  state = {
    focus: false,
    inputValue: ""
  };
  bindButtonTap = () => {
    this.setData({
      focus: Date.now()
    });
  };
  bindKeyInput = e => {
    this.setData({
      inputValue: e.detail.value
    });
  };
  bindReplaceInput = e => {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos);
      //计算光标的位置
      pos = left.replace(/11/g, "2").length;
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, "2"),
      cursor: pos

      //或者直接返回字符串,光标在最后边
      //return value.replace(/11/g,'2'),
    };
  };
  bindHideKeyboard = e => {
    if (e.detail.value === "123") {
      //收起键盘
      Taro.hideKeyboard();
    }
  };
  config = {
    navigationBarTitleText: "私信"
  };

  render() {
    return (
      <View className="container chat">
        <View className="chat-item flex-wrp">
          <View className="avatar flex-item">
            <Image src={require("../../images/icon8.jpg")} />
          </View>
          <View className="chat-content flex-item">
            <View className="chat-source">
              <Text className="chatmate">Alex</Text>
              <Text className="lasttime">1 个月前</Text>
            </View>
            <Text className="chat-txt">你好~ 你好~ 你好~</Text>
          </View>
        </View>
        <View className="chat-item flex-wrp">
          <View className="avatar flex-item">
            <Image src={require("../../images/icon9.jpeg")} />
          </View>
          <View className="chat-content flex-item">
            <View className="chat-source">
              <Text className="chatmate">George</Text>
              <Text className="lasttime">3 个月前</Text>
            </View>
            <Text className="chat-txt">你好~ 你好~ 你好~</Text>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }
}

export default Chat;
