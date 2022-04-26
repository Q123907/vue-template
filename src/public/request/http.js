import axios from "axios";
import { Toast } from "vant";
import config from "@/config";
import store from "../../store/index";
// 默认超时设置
axios.defaults.timeout = 120000;

// 相对路径设置
axios.defaults.baseURL = config.baseURL;

//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 设置参数格式
    if (!config.headers["Content-Type"]) {
      config.headers = {
        "Content-Type": "application/json",
      };
    }
    config.headers.Authorization = sessionStorage.getItem("token");
    store.state.loading = true;
    return config;
  },
  (err) => {
    console.log("请求错误了", err);
    return Promise.reject(err);
  }
);
//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    //一些统一code的返回处理
    // if (response.data) {
    //   console.log('response.data', response.data)
    //   console.log('response.data', response)
    // }
    store.state.loading = false;
    // console.log('返回的结果', response)
    if (response.data.code == 0 || response.data.code == 200) {
      //返回成功处理  这里传的啥 后续调用的时候 res就是啥
      return response.data;
    }
    if (response.data.message) {
      Toast(response.data.message);
    }
    return response;
  },
  (error) => {
    store.state.loading = false;
    store.state.loading = false;
    console.log("错误了", error.response);

    let message =
      (error.response && error.response.data.message) || "请求失败！请检查网络";
    //错误返回

    if (!error.response) {
      Toast(message);
      return;
    }

    Toast(message);
    return Promise.reject(error);
  }
);
export default axios;
