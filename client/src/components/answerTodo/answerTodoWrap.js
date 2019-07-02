import Taro, { Component } from "@tarojs/taro";
import classnames from 'classnames';
import { View, Text } from "@tarojs/components";
import styles from './index.module.scss';
class answerTodo extends Component {
  render() {
    //require("../../images/eye.png")
    const { children } = this.props;
    const wrapCls = classnames({
        [styles['que-operate']]:true,
        [styles['flex-wrp']]:true,
    })
    return <View className={wrapCls}>{children}</View>;
  }
}

export default answerTodo;
