import Taro, { Component } from "@tarojs/taro";
import classnames from 'classnames';
import { View } from "@tarojs/components";
import styles from "./index.module.scss";


class QuestionName extends Component {

    render() {
        const { question_id, bindQueTap, question, classNames } = this.props;
  
        return (
            <View
                className={styles['question']}
                qid={question_id&&question_id}
                onClick={bindQueTap&&bindQueTap}
            >
                <A className={styles['question-link']}>
                    <Text   className={styles[classNames||'text']}>{question}</Text>
                </A>
            </View>
        );
    }
}
export default QuestionName;


