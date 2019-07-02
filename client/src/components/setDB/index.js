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
    // const todos = db.collection('todos')
    const todo = db.collection('todos').doc('1c4318c9-cc93-494c-adea-741d1cf1d2ef').get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
      }
    })
    db.collection("todos")
      .add({
        // data 字段表示需新增的 JSON 数据
        data: {
          description: "learn cloud database",
          due: new Date("2018-09-01"),
          tags: ["cloud", "database"],
          location: new db.Geo.Point(113, 23),
          done: false
        }
      })
      .then(res => {
        console.log(res);
      });

    Taro.cloud
      .callFunction({
        name: "login",
        data: { shiny: "shiny" }
      })
      .then(res => {
        this.setState({
          context: res.result
        });
      });
 

    // 当然 promise 方式也是支持的
    Taro.cloud
      .callFunction({
        name: "add",
        data: {
          a: 12,
          b: 19
        }
      })
      .then(console.log);
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.getLogin}>SET DB</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    );
  }
}
