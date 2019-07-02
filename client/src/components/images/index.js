import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import styles from "./index.module.scss";
class ImageWrap extends Component {
  handleImgClick = bigImgUrl => {
    const { handleImgClick } = this.props;
    handleImgClick && handleImgClick(bigImgUrl);
  };
  render() {
    const { imageUrl, bigImgUrl, pics } = this.props;
    const todoCls = classnames({
      [styles["imageWrap"]]: true
    });

    return (
      <View className={todoCls}>
        {pics &&
          pics.map(pic => {
            const { geo, large, url, pid } = pic;
            const { height, width } = geo;
            return (
              <Image
                key={pid}
                style={{ height:`${height> 400 ? 400 : height}rpx`, width: `${width}rpx` }}
                src={url}
                onClick={this.handleImgClick.bind(this, large)}
              />
            );
          })}
      </View>
    );
  }
}

export default ImageWrap;
