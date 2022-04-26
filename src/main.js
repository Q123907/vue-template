import Vue from "vue";
import {
  Picker,
  Field,
  Popup,
  Toast,
  ActionSheet,
  Icon,
  Loading,
  ImagePreview,
  Dialog,
  List,
  Empty,
} from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import verification from "@/public/util/verification";
import util from "@/public/util/index";
import api from "@/public/request";
import directive from "@/public/directive";
import store from "@/store";
import config from "@/config";
import isBottom from "@/components/isBottom";
Vue.use(Picker);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(ActionSheet);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(ImagePreview);
Vue.use(Dialog);
Vue.use(List);
Vue.use(Empty);

Vue.use(isBottom);

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.VUE_APP_TITLE", process.env.VUE_APP_TITLE);

Vue.directive("fixedInput", directive.fixedInput);

Vue.config.productionTip = false;
Vue.prototype.myVer = verification;
Vue.prototype.$util = util;
Vue.prototype.$api = api;
Vue.prototype.$config = config;
Vue.prototype.$imagePreview = ImagePreview;
Vue.prototype.$dialog = Dialog;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
