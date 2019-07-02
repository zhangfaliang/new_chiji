import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image, Icon, Video } from "@tarojs/components";
import VideoPlay from "./video-play";

import styles from "./index.module.scss";

class Node extends Component {
  constructor(props) {
    super(props);
  }

  handlePlay = () => {
    this.setState({
      openDisplay: true
    });
  };
  render() {
    //require("../../images/eye.png")
    const { page_pic } = this.props;

    return (
      <View className={styles.video}>
        <View className={styles.play} onClick={this.handlePlay}>
          <Icon size="40" type="download" color="#ccc" />
        </View>
        <Image src={page_pic} />
        <VideoPlay {...this.props} {...this.state} />
      </View>
    );
  }
}

export default Node;
