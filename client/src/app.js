import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";
import Taro from "@tarojs/taro";
import configStore from "./store";
import "./app.scss";
import Index from "./pages/index";
//  env: "chiji-test-3e054b"
Taro.cloud.init({
  env: "chiji-test-3e054b"
});
export const testDB = Taro.cloud.database();
const store = configStore();

class App extends Taro.Component {
  componentWillMount = () => {
    //调用API从本地缓存中获取数据
    var logs = Taro.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    Taro.setStorageSync("logs", logs);
  };
  getUserInfo = cb => {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      //调用登录接口
      Taro.login({
        success: function() {
          Taro.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  };
  globalData = {
    userInfo: null
  };
  config = {
    pages: [
      "pages/index/index",
      "pages/index_detail/index",
  
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#0068C4",
      navigationBarTitleText: "吃鸡吃鸡",
      navigationBarTextStyle: "white",
      enablePullDownRefresh: true
    },
    networkTimeout: {
      request: 10000,
      downloadFile: 10000
    },
    debug: true,
    sitemapLocation: "sitemap.json"
  };

  componentWillMount() {
    this.$app.globalData = this.globalData;
    getUserInfo((userInfo)=>{console.log('--------',userInfo,'00000000------------------')})
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
} //app.js

export default App;
Taro.render(<App />, document.getElementById("app"));
