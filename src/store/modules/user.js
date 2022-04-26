// import api from "@/public/request";
const user = {
  namespaced: true,
  state: () => ({
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {},
    requestPromise: null,
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
      if (state.requestPromise) return state.requestPromise;
      let fn = async function () {};
      return (state.requestPromise = fn());
    },
  },
  getters: {},
};
export default user;
