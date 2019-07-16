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
    const { index_detail } = this.props;
    const { isPic } = index_detail;
    return (
      <View>
        {isPic ? (
          <Layer {...index_detail} handleClose={this.handleClose} />
        ) : (
          <VideoPlay {...index_detail} />
        )}
      </View>
    );
  }
}

export default IndexDetail;
