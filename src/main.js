import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import demo from "./assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

require("@/store/subscriber");

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  //createApp(App).use(store).use(router).mount('#app')
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount("#app");
  app.use(GlobalComponents);
  app.use(demo);
  app.use(GlobalDirectives);
});
