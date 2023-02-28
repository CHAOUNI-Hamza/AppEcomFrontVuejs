import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, data) {
      state.user = data;
    },
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      try {
        const response = await axios.post("auth/login", credentials);
        router.replace({ name: "home" });
        return dispatch("attempt", response.data.access_token);
      } catch (error) {
        console.log(error);
      }
    },
    async attempt({ commit, state }, token) {
      try {
        if (token) {
          commit("setToken", token);
        }

        if (!state.token) {
          return;
        }

        const response = await axios.get("auth/me");

        commit("setUser", response.data);

        console.log("success");
      } catch (error) {
        commit("setUser", null);
        commit("setToken", null);
      }
    },
    signOut({ commit }) {
      console.log("fdsfdsf");
      return axios.post("auth/logout").then(() => {
        localStorage.removeItem("token");
        commit("setUser", null);
        commit("setToken", null);
        router.replace({ name: "home" });
      });
    },
    signUp(_, credentials) {
      axios
        .post("auth/register", credentials)
        .then(() => {
          router.replace({ name: "login" });
          /*Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Welcome here',
                        showConfirmButton: false,
                        timer: 1500
                        })*/
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
