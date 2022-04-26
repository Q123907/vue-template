import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);
// const windowHeight = window.innerHeight;
const store = new Vuex.Store({
  state: {
    loading: false, //是否显示加载
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  modules: modules,
});
export default store;
