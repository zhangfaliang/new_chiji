import Nerv from "nervjs";
import {
  Block,
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  Image,
  Text
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./discovery.scss";
//discovery.js
var util = require("../../utils/util.js");

@withWeapp("Page")
class Discovery extends Taro.Component {
  state = {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      "../../images/24213.jpg",
      "../../images/24280.jpg",
      "../../images/1444983318907-_DSC1826.jpg"
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  };
  componentWillMount = () => {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    this.refresh();
  };
  switchTab = e => {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  };
  bindItemTap = () => {
    Taro.navigateTo({
      url: "../answer/answer"
    });
  };
  bindQueTap = () => {
    Taro.navigateTo({
      url: "../question/question"
    });
  };
  upper = () => {
    Taro.showNavigationBarLoading();
    this.refresh();
    console.log("upper");
    setTimeout(function() {
      Taro.hideNavigationBarLoading();
      Taro.stopPullDownRefresh();
    }, 2000);
  };
  lower = e => {
    Taro.showNavigationBarLoading();
    var that = this;
    setTimeout(function() {
      Taro.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000);
    console.log("lower");
  };
  refresh0 = () => {
    var index_api = "";
    util.getData(index_api).then(function(data) {
      //this.setData({
      //
      //});
      console.log(data);
    });
  };
  refresh = () => {
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  };
  nextLoad = () => {
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
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
      scrollTop: scrollTop,
      indicatorDots: indicatorDots,
      autoplay: autoplay,
      interval: interval,
      duration: duration,
      imgUrls: imgUrls,
      feed: feed,
      question_id: question_id,
      answer_id: answer_id
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
          className="container discovery withtab"
          onScrollToUpper={this.upper}
          onScrollToLower={this.lower}
          scrollIntoView={toView}
          scrollTop={scrollTop}
        >
          <View className="ctnt0" hidden={currentNavtab == 0 ? "" : true}>
            <Swiper
              className="activity"
              indicatorDots={indicatorDots}
              autoplay={autoplay}
              interval={interval}
              duration={duration}
            >
              {imgUrls.map((item, index) => {
                return (
                  <Block>
                    <SwiperItem>
                      <Image
                        src={item}
                        className="slide-image"
                        width="355"
                        height="155"
                      />
                    </SwiperItem>
                  </Block>
                );
              })}
            </Swiper>
            {feed.map((item, idx) => {
              return (
                <Block data-idx={idx}>
                  <View className="feed-item">
                    <View className="feed-source">
                      <A className>
                        <View className="avatar">
                          <Image src={item.feed_source_img} />
                        </View>
                        <Text>{item.feed_source_name}</Text>
                      </A>
                    </View>
                    <View className="feed-content">
                      <View
                        className="question"
                        qid={question_id}
                        onClick={this.bindQueTap}
                      >
                        <A className="question-link">
                          <Text>{item.question}</Text>
                        </A>
                      </View>
                      <View className="answer-body">
                        <View onClick={this.bindItemTap}>
                          <Text className="answer-txt" aid={answer_id}>
                            {item.answer_ctnt}
                          </Text>
                        </View>
                        <View
                          className="answer-actions"
                          onClick={this.bindItemTap}
                        >
                          <View className="like dot">
                            <A>{item.good_num + " 赞同"}</A>
                          </View>
                          <View className="comments dot">
                            <A>{item.comment_num + " 评论"}</A>
                          </View>
                          <View className="follow-it">
                            <A>关注问题</A>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Block>
              );
            })}
          </View>
          <View
            className="ctnt1 placehold"
            hidden={currentNavtab == 1 ? "" : true}
          >
            <Text>圆桌</Text>
          </View>
          <View
            className="ctnt2 placehold"
            hidden={currentNavtab == 2 ? "" : true}
          >
            <Text>热门</Text>
          </View>
          <View
            className="ctnt3 placehold"
            hidden={currentNavtab == 3 ? "" : true}
          >
            <Text>收藏</Text>
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

export default Discovery;
