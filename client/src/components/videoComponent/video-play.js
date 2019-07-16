import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Video } from "@tarojs/components";

import styles from "./index.module.scss";

class VideoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mp4_hd_url, title, openDisplay } = this.props;
    const videoCls = classnames({
      [styles.module]: true
      // [styles.close]: !openDisplay
    });
    return (
      <View className={videoCls}>
        <Video
          className={styles.video}
          src={mp4_hd_url}
          page-gesture={true}
          show-fullscreen-btn={true}
          enable-progress-gesture
          title={title}
          autoplay={openDisplay}
        />
      </View>
    );
  }
}

export default VideoComponent;
