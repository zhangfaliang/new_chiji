import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { get } from "lodash";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import styles from "./index.module.scss";

class Layer extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    const { handleClose } = this.props;
    handleClose && handleClose();
  };
  render() {
    const { openLayer, pics, index } = this.props;
    const layerCls = classnames({
      [styles["layer"]]: true,
      [styles["close"]]: !openLayer
    });
    return (
      <View className={layerCls} onClick={this.handleClose}>
        <Swiper
          indicator-dots=""
          autoplay="{{autoplay}}"
          interval="{{interval}}"
          current={index}
          duration="{{duration}}"
          className={styles.swipe}
          onClick={this.handleClose}
        >
          {pics &&
            pics.map(pic => {
              const { large } = pic;
              return (
                <SwiperItem
                  className={styles.swipeItem}
                  style={{
                    display: "flex"
                  }}
                >
                  <Image
                    style={{
                      display: "block",
                      height: `${get(large, "geo.height")}rpx`,
                      width: `${+get(large, "geo.width")}rpx`
                    }}
                    src={get(large, "url")}
                  />
                </SwiperItem>
              );
            })}
        </Swiper>
      </View>
    );
  }
}

export default Layer;
