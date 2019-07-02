import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text } from "@tarojs/components";
import styles from './index.module.scss';
class answerTodo extends Component {
  render() {
    const {  text, imageUrl } = this.props;
    const todoCls = classnames({
      [styles["invite"]]: true,
      [styles["flex-item"]]: true,
    });
    return (
      <View className={todoCls}>
        <Image src={imageUrl} />
        <Text>{text}</Text>
      </View>
    );
  }
}

export default answerTodo;
