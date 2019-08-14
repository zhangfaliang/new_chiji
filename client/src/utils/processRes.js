const { get } = require("lodash");

const processRes = data => {
  return JSON.stringify(
    get(data, "data.cards", []).map(item => {
      const mblog = get(item, "mblog", {});
      let { text, page_info, retweeted_status } = mblog;
      if (retweeted_status) {
        // 图片展示
        const {
          pics,
          bmiddle_pic,
          original_pic
        } = retweeted_status;
        let texts = [],
          reg = /[^A-z|0-9|=|>|<|\-|\；|\:|\"|\\|/|.|;|\? |+, +|,|\?|\.|\&|\%]+/g;
        let res = true;
        while (res) {
          res = get(reg.exec(text), "0");
          res && texts.push(res);
        }
       return {}
        // return {
        //   isPic: true,
        //   bmiddle_pic,
        //   original_pic,
        //   title: texts.join(","),
        //   pics
        // };
      } else if (page_info) {
        // 视频展示
        let texts = [],
          reg = /[^A-z|0-9|=|>|<|\-|\；|\:|\"|\\|/|.|;|\? |+, +|,|\?|\.|\&|\%]+/g;
        let res = true;
        while (res) {
          res = get(reg.exec(text), "0");
          res && texts.push(res);
        }

        const media_info = get(page_info, "media_info", {});

        const { page_pic, type } = page_info;
        const {
          mp4_hd_url,
        } = media_info;
        return {
          // text: text,
          title: texts.join(",").replace(/,|'/g,''),
          mp4_hd_url,
          page_pic: get(page_pic, "url"),
          type,
          isMedia: true
          // video_details,
        };
      }
    })
  );
};
const replaceReg = (data = "") => {
  return data
    .replace(/\[|\]/gim, "")
    .replace(/\"pics\":/gim, '"pics":[')
    .replace(/false\}\}\}\}/gim, "false}}}]}")
    .replace(/true\}\}\}\}/gim, "true}}}]}")
    .replace(/\},/gim, "}")
    .replace(/\}\"large\"/gim, '},"large"')
    .replace(/\}\}\}\{\"pid\"/gim, '}}},{"pid"')
    .replace(/',|#,/gim, "")
    .replace(/null,/gim, "");
};

module.exports.replaceReg = replaceReg;
module.exports.processRes = processRes;
