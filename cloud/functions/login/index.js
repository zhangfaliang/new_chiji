const cloud = require('wx-server-sdk')

cloud.init({env:'chiji-test',traceUser: true})


exports.main = async (event, context) => {
  let { userInfo, a, b} = event
  const wxContext = cloud.getWXContext()
  console.log(wxContext,'wxContext')
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    userInfo,userInfo,
    message:'wernjwekrhiwjekrhjwekrhjwekrhjwe'
  }
}
