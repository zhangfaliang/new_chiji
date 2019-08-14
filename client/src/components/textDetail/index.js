import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image } from "@tarojs/components";

import styles from "./index.module.scss";

class TextDetail extends Component {
  constructor(props) {
    super(props);
  }
  videoClick = params => {};
  render() {
    const { datailText } = this.props;

    return (
      <View className={styles.wrap}>
        {datailText &&
          datailText.map((item, index) => {
            const { content, imgUrl, unitIds } = item;
            return (
              <View className={styles.content}>
                {content}
                <Image src={imgUrl} />
              </View>
            );
          })}
      </View>
    );
  }
}

export default TextDetail;
