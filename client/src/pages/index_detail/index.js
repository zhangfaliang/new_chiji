import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { setPageIndexDetail } from "../../actions/index";
import { makeDetailData } from "../../selects/pageIndex";
import Layer from "../../components/layer";
import VideoPlay from "../../components/videoComponent/video-play";

@connect(
  createStructuredSelector({
    index_detail: makeDetailData
  }),
  dispatch => ({
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    }
  })
)
class IndexDetail extends Component {

  render() {
    const { index_detail, isPic } = this.props;
    return (
      <View>
        <navigator url="/pages/index/index" open-type="navigateBack">
          {isPic ? (
            <Layer {...index_detail} handleClose={this.handleClose} />
          ) : (
            <VideoPlay {...this.props} {...index_detail} />
          )}
        </navigator>
      </View>
    );
  }
}

export default IndexDetail;
