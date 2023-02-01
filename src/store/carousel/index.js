import axios from "axios";

export default {
  namespaced: true,
  state: {
    carousels: {},
    heightBarMessage: "",
    heightNavbar: "",
  },
  mutations: {
    getCarouselsMutation(state, pyload) {
      state.carousels = pyload;
    },
  },
  getters: {
    getCarouselsGetters(state) {
      return state.carousels;
    },
    getHeightBarMessage(state) {
      return state.heightBarMessage;
    },
    getHeightNavbar(state) {
      return state.heightNavbar;
    },
  },
  actions: {
    getCarouselsAction({ commit }) {
      axios
        .get("carousel/index")
        .then((res) => {
          commit("getCarouselsMutation", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
