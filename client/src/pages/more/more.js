import Nerv from "nervjs";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./more.scss";
//logs.js
var util = require("../../utils/util.js");
var app = Taro.getApp();

@withWeapp("Page")
class More extends Taro.Component {
  state = {
    motto: "Hello World",
    userInfo: {}
  };
  bindViewTap = () => {
    Taro.navigateTo({
      url: ""
    });
  };
  componentWillMount = () => {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  };
  config = {
    navigationBarTitleText: "更多"
  };

  render() {
    const { userInfo: userInfo } = this.state;
    return (
      <View className="container more">
        <View className="user flex-wrp">
          <View className="avatar flex-item">
            <Image
              className="userinfo-avatar"
              src={userInfo.avatarUrl}
              backgroundSize="cover"
            />
          </View>
          <View className="user-info flex-item">
            <Text className="userinfo-nickname">{userInfo.nickName}</Text>
            <Text className="edit">查看或编辑个人主页</Text>
          </View>
        </View>
        <View className="my">
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/eye.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的关注</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/star.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的收藏</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/draft.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/recent.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>最近浏览</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/book.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的书架</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/live.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的 Live</Text>
            </View>
          </View>
          <View className="my-item flex-wrp">
            <View className="myitem-icon flex-item">
              <Image src={require("../../images/zhi.png")} />
            </View>
            <View className="myitem-name flex-item">
              <Text>我的值乎</Text>
            </View>
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

export default More;
