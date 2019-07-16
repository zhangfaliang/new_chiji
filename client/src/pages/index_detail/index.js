import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { setPageIndexDetail } from "../../actions/index";
import { makeDetailData } from "../../selects/pageIndex";
import Layer from "../../components/layer";
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
  handleClose = () => {
    // const currentPages = Taro.getCurrentPages();
    // console.log(currentPages,'-----currentPages')
    // Taro.navigateBack({ delta: 1 })
    // this.props.onSetPageIndexDetail({
    //   openLayer: false,
    //   pics: [],
    //   index: 0
    // });
  };
  render() {
    const { index_detail } = this.props;
    return (
      <View>
        <navigator url="/pages/index/index" open-type="navigateBack">
          <Layer {...index_detail} handleClose={this.handleClose} />
        </navigator>
      </View>
    );
  }
}

export default IndexDetail;
