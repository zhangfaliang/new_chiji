import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

export default class Login extends Component {
  state = {
    context: {}
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud.callFunction({
      name: "add",
      data: { a: 3, b: 4 },
      complete: res => {
        console.log("callFunction test result: ", res);
      }
    });
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.getLogin}>RUN CLOUD</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    );
  }
}
