//输入校验
const verification = {
  verPhone(phone) {
    return phone && String(phone).length == 11;
  },
  //只能输入中英文
  verGbOrEn(value) {
    var regu = "^[a-zA-Z\u4e00-\u9fa5]+$";
    var re = new RegExp(regu);
    return value.search(re) != -1;
  },
  //验证emoji表情
  verEmoji(value) {
    let char = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/;
    return !char.test(value);
  },
  //验证emoji表情
  verGbOrEnNumber(value) {
    var regu = /^[\s()，。,/.（）0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D]*$/;
    return regu.test(value);
  },
};
export default verification;
