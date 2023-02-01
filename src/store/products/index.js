import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: {},
    product: {},
  },
  mutations: {
    getProductsMutation(state, pyload) {
      state.products = pyload;
    },
    getOneProductMutation(state, pyload) {
      state.product = pyload;
    },
  },
  getters: {
    getProductsGetters(state) {
      return state.products;
    },
    getOneProductGetters(state) {
      return state.product;
    },
  },
  actions: {
    getProductsAction({ commit }, params) {
      axios
        .get("product/index", { params: { search: params } })
        .then((res) => {
          commit("getProductsMutation", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOneProductAction({ commit }, slug) {
      axios
        .get(`product/show/${slug}`)
        .then((res) => {
          commit("getOneProductMutation", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
