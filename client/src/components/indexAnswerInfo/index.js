import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import styles from "./index.module.scss";

class IndexAnswerInfo extends Component {
  render() {
    const { feed_source_img, feed_source_name, feed_source_txt } = this.props;
    return (
      <View className={styles["feed-source"]}>
        <A className>
          <View className={styles["avatar"]}>
            <Image src={feed_source_img} />
          </View>
          <Text>{feed_source_name + feed_source_txt}</Text>
        </A>
        <Image
          className={styles["item-more"]}
          mode="aspectFit"
          src={require("../../images/more.png")}
        />
      </View>
    );
  }
}

export default IndexAnswerInfo;
