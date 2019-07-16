import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image, Icon, Video } from "@tarojs/components";
import VideoPlay from "./video-play";

import styles from "./index.module.scss";

class Node extends Component {
  constructor(props) {
    super(props);
  }
  videoClick = params => {
    this.props.videoClick && this.props.videoClick(params);
  };
  render() {
    //require("../../images/eye.png")
    const {
      page_pic,
      stream_url,
      stream_url_hd,
      mp4_sd_url,
      mp4_hd_url,
      title
    } = this.props;

    return (
      <View
        className={styles.video}
        onClick={() => {
          this.videoClick({
            stream_url,
            stream_url_hd,
            mp4_sd_url,
            mp4_hd_url,
            page_pic,
            title
          });
        }}
      >
        <View className={styles.play}>
          <Icon size="40" type="download" color="#ccc" />
        </View>
        <Image src={page_pic} />
      </View>
    );
  }
}

export default Node;