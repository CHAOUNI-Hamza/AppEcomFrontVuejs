import { directive as ClickOutside } from "vue3-click-away";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", ClickOutside);
  },
};

export default GlobalDirectives;
