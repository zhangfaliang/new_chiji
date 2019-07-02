import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import styles from "./index.module.scss";

class UserLabel extends Component {
  render() {
    const { user_label, classNames } = this.props;
    return (
      <View className={styles[classNames || "que-content"]}>{user_label}</View>
    );
  }
}

export default UserLabel;
