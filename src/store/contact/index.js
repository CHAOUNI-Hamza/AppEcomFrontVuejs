import axios from "axios";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    AddContactAction(_, data) {
      axios
        .post("contact/store", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
