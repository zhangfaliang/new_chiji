import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import styles  from "./index.module.scss";
class AnswerUserInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <View className={styles['answerer-wrp']}>
          <View className={styles['bg-half']} />
          <View className={`${styles['answerer']} ${styles['flex-wrp']}`}>
            <View className= {`${styles['avatar']} ${styles['flex-item']}`}>
              <Image src={userInfo.userImg} />
            </View>
            <View className={`${styles['answerer-info']} ${styles['flex-item']}`}>
              <Text className={`${styles['answerer-name']}`}>
                {userInfo.name}
              </Text>
              <Text className= {`${styles['answerer-des']}`}>
                {userInfo.label}
              </Text>
            </View>
            <View className= {`${styles['follow']} ${styles['flex-item']}`}>
              <Text>十 关注</Text>
            </View>
          </View>
        </View>
    );
  }
}

export default AnswerUserInfo;
