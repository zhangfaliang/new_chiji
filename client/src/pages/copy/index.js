import Nerv from "nervjs";
import { connect } from '@tarojs/redux'
import { createStructuredSelector } from 'reselect';
import {
  Block,
  ScrollView,
  View,
  Image,
  Input,
  Text
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./index.scss";
//index.js
var util = require("../../utils/util.js");
import { getData } from '../../actions/index'
import { makePageIndex,makeFeed } from '../../selects/pageIndex';
import { makeCounter } from '../../selects/count';
import { add } from '../../actions/counter'


 @connect(createStructuredSelector({
  pageIndex:makePageIndex,
  feed:makeFeed,
  counter:makeCounter
 }),
(dispatch) => ({
  asyncPageIndexGetData: ()=> {
    dispatch(getData())
  },
  add () {
    dispatch(add())
  },
})
)
@withWeapp("Page")
class _C extends Taro.Component {
  state = {
    feed: [],
    feed_length: 0
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
  componentWillMount = () => {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    this.props.asyncPageIndexGetData()
    this.getData();
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
  getData = () => {
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  };
  refresh = () => {
    Taro.showToast({
      title: "刷新中",
      icon: "loading",
      duration: 3000
    });
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    setTimeout(function() {
      Taro.showToast({
        title: "刷新成功",
        icon: "success",
        duration: 2000
      });
    }, 3000);
  };
  nextLoad = () => {
    Taro.showToast({
      title: "加载中",
      icon: "loading",
      duration: 4000
    });
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
    setTimeout(function() {
      Taro.showToast({
        title: "加载成功",
        icon: "success",
        duration: 2000
      });
    }, 3000);
  };
  config = {};
 
  render() {
    console.log(this.props)

    const {
      toView: toView,
      scrollTop: scrollTop,
      feed: feed,
      question_id: question_id,
      answer_id: answer_id
    } = this.state;
    return (
      <ScrollView
        scrollY="true"
        className="container"
        onScrollToUpper={this.upper}
        upperThreshold="10"
        lowerThreshold="5"
        onScrollToLower={this.lower}
        scrollIntoView={toView}
        scrollTop={scrollTop}
      >
       <View className='todo'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <View>{this.props.counter.num}</View>
      </View>
        <View className="search flex-wrp">
          <View className="search-left flex-item">
            <Image src={require("../../images/search.png")} />
            <Input
              placeholder="搜索话题, 问题或人"
              placeholderClass="search-placeholder"
            />
          </View>
          <View className="search-right flex-item" onClick={this.upper}>
            <Image src={require("../../images/lighting.png")} />
          </View>
        </View>
        {feed.map((item, idx) => {
          return (
            <Block data-idx={idx}>
              <View className="feed-item">
                <View className="feed-source">
                  <A className>
                    <View className="avatar">
                      <Image src={item.feed_source_img} />
                    </View>
                    <Text>{item.feed_source_name + item.feed_source_txt}</Text>
                  </A>
                  <Image
                    className="item-more"
                    mode="aspectFit"
                    src={require("../../images/more.png")}
                  />
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
                    <View className="answer-actions" onClick={this.bindItemTap}>
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
      </ScrollView>
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

export default _C;
