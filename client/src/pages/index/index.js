import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import {
  Block,
  ScrollView,
  View,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { isEmpty } from "lodash";
import "./index.scss";
import {
  getData,
  getDataUpper,
  getDataLower,
  setPageIndexDetail,
  initPage
} from "../../actions/index";
import {
  makePageIndex,
  makeFeed,
  makeIndexAdvertising
} from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import QuestionName from "../../components/questionName/index";
import ImageWrap from "../../components/images";
import VideoComponent from "../../components/videoComponent";
import EssayList from "../../components/essayList";
const titleList = [
  {
    title: "新手吃鸡必看 绝地求生大逃杀生存指南",
    imgUrl:
      "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
    idNum: "01"
  },
  {
    title: "新手吃鸡，自定义操作",
    imgUrl:
      "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
    idNum: "02"
  },
  {
    title: "绝地求生刺激战场怎么瞄准",
    imgUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
    idNum: "03"
  },
  {
    title: "超级干货贴! 教你如何用手机操作稳吃鸡",
    imgUrl: "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
    idNum: "04"
  }
];
@connect(
  createStructuredSelector({
    pageIndex: makePageIndex,
    feedData: makeFeed,
    counter: makeCounter,
    indexAdvertising: makeIndexAdvertising
  }),
  dispatch => ({
    initPage: () => {
      dispatch(initPage());
    },
    asyncPageIndexGetData: pageNum => {
      dispatch(getData(pageNum));
    },
    getDataUpper(pageNum) {
      dispatch(getDataUpper(pageNum));
    },
    getDataLower(pageNum) {
      dispatch(getDataLower(pageNum));
    },
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    }
  })
)
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      large: {}
    };
  }
  upper = () => {
    this.props.getDataUpper(0);
  };
  lower = e => {
    const { feedData } = this.props;
    const { feed_length } = feedData;
    const pageNum = feed_length / 10;
    this.props.getDataLower(pageNum <= 1 ? 2 : pageNum);
  };
  bindItemTap = answer_id => {
    Taro.navigateTo({
      url: `../answer/answer?answer_id=${answer_id}`
    });
  };
  bindQueTap = question_id => {};

  handleImgClick = (pics, index) => {
    this.props.onSetPageIndexDetail({
      openLayer: true,
      pics,
      index,
      isPic: true
    });
    Taro.navigateTo({
      url: `/pages/index_detail/index`
    });
  };

  videoClick = videoParams => {
    this.props.onSetPageIndexDetail({
      openLayer: true,
      ...videoParams,
      isMedia: true
    });
    Taro.navigateTo({
      url: `/pages/index_detail/index`
    });
  };
  handleClose = () => {
    this.setState({
      openLayer: false,
      large: {}
    });
  };
  onTitleClick = idNum => {
    console.log(idNum);
  };

  componentWillMount() {
    this.props.initPage();
    this.props.asyncPageIndexGetData(0);
  }

  render() {
    const { feedData, indexAdvertising } = this.props;
    const { feed } = feedData;
    return (
      <View>
        {/* <Search /> */}
        <Swiper autoplay={true} interval={1000} duration={300}>
          {indexAdvertising &&
            indexAdvertising.map(unitId => {
              return (
                <SwiperItem>
                  <ad
                    class="ad"
                    style="width:'100%',height:'100%'"
                    unit-id={unitId}
                  />
                </SwiperItem>
              );
            })}
        </Swiper>
        <ScrollView
          scrollY="true"
          className="container"
          onScrollToUpper={this.upper}
          upperThreshold="10"
          lowerThreshold="5"
          onScrollToLower={this.lower}
          scrollIntoView={true}
          scrollTop={true}
        >
          <View className="todo">
            {titleList &&
              titleList.map(item => {
                const { imgUrl, title, idNum } = item;
                return (
                  <EssayList
                    key={idNum}
                    imgUrl={imgUrl}
                    idNum={idNum}
                    title={title}
                    titleClick={this.onTitleClick}
                  />
                );
              })}
            {feed &&
              !titleList &&
              feed
                .filter(item => !isEmpty(item))
                .map((item, idx) => {
                  const {
                    title,
                    original_pic,
                    _id,
                    pics,
                    bmiddle_pic,
                    isPic
                  } = item;
                  return (
                    <Block data-idx={idx}>
                      <View className="feed-item">
                        <View className="feed-content">
                          <QuestionName
                            question_id={_id}
                            bindQueTap={this.bindQueTap.bind(this, _id)}
                            question={title}
                          />
                          <View className="answer-body">
                            {isPic ? (
                              <ImageWrap
                                pics={pics}
                                handleImgClick={this.handleImgClick}
                                imageUrl={bmiddle_pic}
                                bigImgUrl={original_pic}
                              />
                            ) : (
                              <VideoComponent
                                videoClick={this.videoClick}
                                {...item}
                              />
                            )}
                          </View>
                        </View>
                      </View>
                    </Block>
                  );
                })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
