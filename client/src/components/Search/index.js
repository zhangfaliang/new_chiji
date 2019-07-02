import Taro, { Component } from "@tarojs/taro";
import {
    View,
    Image,
    Input,
  } from "@tarojs/components";
import   './index.scss';

class Search extends Component{
    onSearch =(e)=>{
        e.stopPropagation();
      console.log(e)
      //../../images/search.png
    }
    onInput =(e)=>{
        // e.stopPropagation();
      console.log(e)
      //../../images/search.png
    }
    render(){
        return(
            <View className="search flex-wrp">
            <View className="search-left flex-item">
              <Image src={require("../../images/search.png")} />
              <Input
                placeholder="搜索话题, 问题或人  werwe"
                placeholderClass="search-placeholder"
                value={this.state.value}
                onInput={this.onInput}

              />
            </View>
            <View className="search-right flex-item" onClick={this.onSearch}>
              <Image src={require("../../images/lighting.png")} />
            </View>
          </View>
        )
    }
}

export default Search;