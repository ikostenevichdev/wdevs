import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSvgInlinePlugin from "vue-svg-inline-plugin";
import VueWebpImage from "vue-webp-image";
import VueAgile from "vue-agile";

// import Vuelidate from "vuelidate";

import "normalize.css";
import "./registerServiceWorker";

createApp(App)
  .use(router)
  .use(store)
  .use(VueSvgInlinePlugin)
  .use(VueWebpImage)
  .use(VueAgile)
  .mount("#app");
