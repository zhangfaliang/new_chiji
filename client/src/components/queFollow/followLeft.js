import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

class FollowLeft extends Component {
  static COMPONENT_NAME = "FOLLOW_LEFT";
  render() {
    //require("../../images/eye.png")
    const { children } = this.props;
    return <View className={styles["left"]}>{children}</View>;
  }
}


export default FollowLeft;
