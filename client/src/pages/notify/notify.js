import Nerv from "nervjs";
import { Block, View, ScrollView, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./notify.scss";
//logs.js
var util = require("../../utils/util.js");

@withWeapp("Page")
class Notify extends Taro.Component {
  state = {
    navTab: ["通知", "赞与感谢", "关注"],
    currentNavtab: "0"
  };
  componentWillMount = () => {};
  switchTab = e => {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  };
  config = {
    navigationBarTitleText: ""
  };

  render() {
    const {
      currentNavtab: currentNavtab,
      navTab: navTab,
      toView: toView,
      scrollTop: scrollTop
    } = this.state;
    return (
      <Block>
        <View className="top-tab flex-wrp flex-tab">
          {navTab.map((itemName, idx) => {
            return (
              <View
                className={
                  "toptab flex-item " + (currentNavtab == idx ? "active" : "")
                }
                data-idx={idx}
                onClick={this.switchTab}
              >
                {itemName}
              </View>
            );
          })}
        </View>
        <ScrollView
          scrollY="true"
          className="container notify withtab"
          onScrollToUpper={this.upper}
          onScrollToLower={this.lower}
          onScroll={this.scroll}
          scrollIntoView={toView}
          scrollTop={scrollTop}
        >
          <View className="ctnt0" hidden={currentNavtab == 0 ? "" : true}>
            <View className="unread">
              <Text>0 条未读</Text>
              <Image src={require("../../images/allread.png")} />
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
            <View className="notify-item flex-wrp">
              <View className="avatar flex-item">
                <Image src={require("../../images/icon1.jpeg")} />
              </View>
              <View className="notify-content flex-item">
                <Text className="notify-source">Rebecca 回答了问题</Text>
                <Text className="notify-title">
                  C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？
                </Text>
              </View>
            </View>
          </View>
          <View
            className="ctnt1 placehold"
            hidden={currentNavtab == 1 ? "" : true}
          >
            <Text>赞与感谢</Text>
          </View>
          <View
            className="ctnt2 placehold"
            hidden={currentNavtab == 2 ? "" : true}
          >
            <Text>关注</Text>
          </View>
        </ScrollView>
      </Block>
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

export default Notify;
