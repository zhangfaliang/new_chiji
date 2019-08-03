import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image, Icon, Video } from "@tarojs/components";
import VideoPlay from "./video-play";
import playPng from '../../images/play.png';

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
      mp4_hd_url,
      title
    } = this.props;

    return (
      <View
        className={styles.video}
        onClick={() => {
          this.videoClick({
            mp4_hd_url,
            page_pic,
            title
          });
        }}
      >
        <View className={styles.play}>
          <Image src={playPng} alt=""/>
        </View>
        <Image src={page_pic} />
      </View>
    );
  }
}

export default Node;
