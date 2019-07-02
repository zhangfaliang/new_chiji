import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./index.scss";
class OperationBtn extends Component {
  handleClick = e => {
    const { handleClick, text } = this.props;
    handleClick(text);
  };
  render() {
    const { imgUrl, text } = this.props;
    return (
      <View className="operation-btn flex-item" onClick={this.handleClick}>
        <Image src={imgUrl && imgUrl} />
        <Text>{text && text}</Text>
      </View>
    );
  }
}
export default OperationBtn;
