import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueToast from "vue-toast-notification";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "animate.css";
import axios from "axios";
import VueAxios from "vue-axios";

// Import one of the available themes
// import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

import "./assets/scss/style.scss";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueToast, {
  // One of the options
  position: "top-right",
});

import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

import BackToTop from "vue-backtotop";

Vue.use(BackToTop);

import VueAnimateOnScroll from "vue-animate-onscroll";

Vue.use(VueAnimateOnScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
