import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
// import styles from "./index.module.scss";
class AnswerUserInfo extends Component {
    render() {
        const { bindItemTap, answer_ctnt, answer_id } = this.props;
        return (
            <View onClick={() => bindItemTap && bindItemTap(answer_id)}>
                <Text className="answer-txt" aid={answer_id}>
                    {answer_ctnt}
                </Text>
            </View>
        );
    }
}

export default AnswerUserInfo;
