import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View } from "@tarojs/components";

import styles from "./index.module.scss";
class AnswerAction extends Component {
  render() {
    const { bindItemTap, good_num, comment_num, texts } = this.props;
    const viewCls = classnames({
      [styles["dot"]]: true,
      [styles["view"]]: true
    });
    const wrapCls = classnames({
      [styles["answer-actions"]]: true
    });
    return (
      <View className={wrapCls} onClick={bindItemTap}>
        {texts &&
          texts.map(item => {
            const { text, showDot } = item;
            return (
              <View key={item} className={viewCls}>
                <A>{text}</A>
                {showDot && <View />}
              </View>
            );
          })}
      </View>
    );
  }
}
export default AnswerAction;
