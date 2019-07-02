// index.js 是入口文件，云函数被调用时会执行该文件导出的 main 方法
// event 包含了调用端（小程序端）调用该函数时传过来的参数，同时还包含了可以通过 getWXContext 方法获取的用户登录态 `openId` 和小程序 `appId` 信息
const cloud = require('wx-server-sdk')
cloud.init({env:'chiji-test',traceUser: true})

exports.main = (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  let { OPENID, APPID, UNIONID,a,d } = cloud.getWXContext()

  return {
    OPENID,
    APPID,
    UNIONID,
    sum:a+d
  }
}