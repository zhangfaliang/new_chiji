import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image } from "@tarojs/components";

import styles from "./index.module.scss";

class EssayList extends Component {
  onTitleClick = () => {
    const { idNum, titleClick } = this.props;
    titleClick && titleClick(idNum);
  };
  render() {
    const { imgUrl, title } = this.props;
    return (
      <View className={styles.title_wrap} onClick={this.onTitleClick}>
        <Image className={styles.img} src={imgUrl} />
        <View className={styles.title}>{title}</View>
      </View>
    );
  }
}

export default EssayList;
