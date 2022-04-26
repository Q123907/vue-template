//获取微信参数
export default function isWxBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  let isWx = ua.match(/MicroMessenger/i) == "micromessenger";
  if (!isWx) {
    return "other";
  } else {
    let isWxWork = ua.match(/WxWork/i) == "wxwork";
    if (isWxWork) {
      console.log("企业微信中");
      return "wxwork";
    } else {
      console.log("微信中");
      return "wx";
    }
  }
}
