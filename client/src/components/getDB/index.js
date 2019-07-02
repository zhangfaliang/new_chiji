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
    const db = Taro.cloud.database();
    // const todos = db.collection('todos'
    db.collection('todos').doc('57896b495cf5d2240b45a61b0c2bb536').get().then(res => {
      // res.data 包含该记录的数据
      console.log(res.data)
    })
    

  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.getLogin}>GET DB</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    );
  }
}
