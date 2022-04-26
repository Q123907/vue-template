import axios from "./http";
// import config from "@/config";
const user = {
  //微信用户授权登录
  wxLogin(params) {
    return axios.get({
      url: ``,
      params,
    });
  },
};
export default user;
