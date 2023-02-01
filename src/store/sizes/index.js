import axios from "axios";

export default {
  namespaced: true,
  state: {
    sizes: {},
  },
  mutations: {
    getSizesMutation(state, pyload) {
      state.sizes = pyload;
    },
  },
  getters: {
    getSizesGetters(state) {
      return state.sizes;
    },
  },
  actions: {
    getSizesAction({ commit }) {
      axios
        .get("size/index")
        .then((res) => {
          commit("getSizesMutation", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
