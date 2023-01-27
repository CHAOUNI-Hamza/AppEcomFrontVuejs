import ScrollTop from "./components/FrontEnd/ScrollTop.vue";
import Footer from "./components/FrontEnd/Footer.vue";
import ModalLogin from "./components/FrontEnd/ModalLogin.vue";
import Navbar from "./components/FrontEnd/Navbar.vue";
import BarNotification from "./components/FrontEnd/BarNotification.vue";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("ScrollTop", ScrollTop);
    Vue.component("Footer", Footer);
    Vue.component("ModalLogin", ModalLogin);
    Vue.component("Navbar", Navbar);
    Vue.component("BarNotification", BarNotification);
  },
};

export default GlobalComponents;
