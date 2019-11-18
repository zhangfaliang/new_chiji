import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import {
  Block,
  ScrollView,
  View,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { isEmpty, get } from "lodash";
// import "./index.scss";
import {
  getData,
  getDataUpper,
  getDataLower,
  setPageIndexDetail,
  initPage,
  getDatailSQL
} from "../../actions/index";
import {
  makePageIndex,
  makeFeed,
  makeIndexAdvertising,
  makeTitleList,
  makeIsAPI,
  makeIndexVideolAdvertising,
  makeIndexDetailAdvertising
} from "../../selects/pageIndex";
import QuestionName from "../../components/questionName/index";
import ImageWrap from "../../components/images";
import VideoComponent from "../../components/videoComponent";
import EssayList from "../../components/essayList";
import TextDetail from "../../components/textDetail";

@connect(
  createStructuredSelector({
    pageIndex: makePageIndex,
    feedData: makeFeed,
    indexAdvertising: makeIndexAdvertising,
    videolAdvertising: makeIndexVideolAdvertising,
    titleList: makeTitleList,
    isAPI: makeIsAPI,
    detailAdvertising: makeIndexDetailAdvertising
  }),
  dispatch => ({
    initPage: () => {
      dispatch(initPage());
    },
    getDataUpper(pageNum) {
      dispatch(getDataUpper(pageNum));
    },
    getDataLower(pageNum) {
      dispatch(getDataLower(pageNum));
    },
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    },
    onGetDatailSQL: key_id => {
      dispatch(getDatailSQL(key_id));
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
    this.props.onSetPageIndexDetail({
      openLayer: true,
      idNum: idNum,
      isText: true
    });
    this.props.onGetDatailSQL(idNum);
    Taro.navigateTo({
      url: `/pages/index_detail/index`
    });
  };

  componentWillMount() {
    this.props.initPage();
  }

  render() {
    const {
      feedData,
      indexAdvertising,
      titleList,
      isAPI,
      detailAdvertising
    } = this.props;
    const { feed } = feedData;

    // 添加广告
    return (
      <View>
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
            {!isAPI &&
              titleList &&
              titleList.map((item, index) => {
                const { imgUrl, title, idNum } = item;

                return index === 0 ? (
                  <div>
                    <Swiper autoplay={false} interval={4000} duration={300}>
                      <SwiperItem>
                        <Image
                          src={
                            "http://img2.imgtn.bdimg.com/it/u=2618478855,3890988105&fm=26&gp=0.jpg"
                          }
                        />
                      </SwiperItem>
                    </Swiper>
                    <EssayList
                      key={idNum}
                      imgUrl={imgUrl}
                      idNum={idNum}
                      title={title}
                      titleClick={this.onTitleClick}
                    />
                  </div>
                ) : (
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
              isAPI &&
              feed.map((item, idx) => {
                const {
                  title,
                  original_pic,
                  _id,
                  pics,
                  bmiddle_pic,
                  isPic
                } = item;
                const detailAdverti = get(indexAdvertising, `${idx}`, {});
                return (
                  <Block data-idx={idx}>
                    <View className="feed-item">
                      {get(detailAdverti, "ad-type") ? (
                        <ad
                          class="ad"
                          unit-id={get(detailAdverti, "id")}
                          ad-type={get(detailAdverti, "ad-type")}
                          ad-theme={get(detailAdverti, "ad-theme")}
                        />
                      ) : (
                        <ad unit-id={get(detailAdverti, "id")}></ad>
                      )}

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
