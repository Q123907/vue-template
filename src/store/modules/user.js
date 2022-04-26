// import api from "@/public/request";
const user = {
  namespaced: true,
  state: () => ({
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {},
    reqestPromise: null,
    baInfo: sessionStorage.getItem("baInfo")
      ? JSON.parse(sessionStorage.getItem("baInfo"))
      : {},
  }),
  mutations: {
    //设置用户信息
    setUerInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    login({ state }) {
      if (state.reqestPromise) return state.reqestPromise;
      let fn = async function () {};
      return (state.reqestPromise = fn());
    },
  },
  getters: {},
};
export default user;
