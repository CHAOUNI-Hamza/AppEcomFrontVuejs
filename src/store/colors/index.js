import axios from "axios";

export default {
  namespaced: true,
  state: {
    colors: {},
  },
  mutations: {
    getColorsMutation(state, pyload) {
      state.colors = pyload;
    },
  },
  getters: {
    getColorsGetters(state) {
      return state.colors;
    },
  },
  actions: {
    getColorsAction({ commit }) {
      axios
        .get("color/index")
        .then((res) => {
          commit("getColorsMutation", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
