import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { get } from "lodash";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";
class Layer extends Component {
    constructor(props) {
        super(props);
    }
    handleClose = () => {
        const { handleClose, large } = this.props;
        handleClose && handleClose();
    };
    render() {
        const { openLayer, large } = this.props;
        const geo = get(large, "geo", {});
        const layerCls = classnames({
            [styles["layer"]]: true,
            [styles["close"]]: !openLayer
        });
       
        return (
            <View className={layerCls} onClick={this.handleClose}>
                <Image
                    style={{
                        height: `${get(geo, "height")}rpx`,
                        width: `${+get(geo, "width") }rpx`
                    }}
                    src={get(large, "url")}
                />
            </View>
        );
    }
}

export default Layer;
