import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import styles from "./index.module.scss";

class QuestionTag extends Component {
  render() {
    const { tags } = this.props;
    return (
      <View className={styles["que-tag"]}>
        {tags && tags.map(item => <Text className={styles["tag"]}>{item}</Text>)}
      </View>
    );
  }
}

export default QuestionTag;
