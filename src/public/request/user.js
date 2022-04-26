import axios from "./http";
import config from "@/config";
const user = {
  //微信用户授权登录
  wxLogin(params) {
    return axios.get({
      url: `/api/loreal-portal/bu/${config.storeCode}/auth/wxLogin`,
      params,
    });
  },
};
export default user;
