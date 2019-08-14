import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { setPageIndexDetail } from "../../actions/index";
import {
  makeDetailData,
  makeIndexDetailAdvertising,
  makeDatailText
} from "../../selects/pageIndex";
import Layer from "../../components/layer";
import VideoPlay from "../../components/videoComponent/video-play";
import TextDetail from "../../components/textDetail";

@connect(
  createStructuredSelector({
    index_detail: makeDetailData,
    detailAdvertising: makeIndexDetailAdvertising,
    datailText: makeDatailText
  }),
  dispatch => ({
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    }
  })
)
class IndexDetail extends Component {
  render() {
    const { index_detail, detailAdvertising, datailText } = this.props;
    const { pics, isMedia, isText } = index_detail;
    return (
      <View>
        <Swiper autoplay={true} interval={1000} duration={300}>
          {detailAdvertising &&
            detailAdvertising.map(unitId => {
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
        <view>
          {" "}
          {pics ? (
            <Layer {...index_detail} handleClose={this.handleClose} />
          ) : (
            ""
          )}
          {isMedia ? <VideoPlay {...index_detail} /> : ""}
          {isText ? <TextDetail datailText={datailText} /> : ""}
        </view>
      </View>
    );
  }
}

export default IndexDetail;
