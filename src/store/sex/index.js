import axios from 'axios'

export default {
    namespaced: true,
    state: {
        sexs: {}
    },
    mutations: {
        getSexsMutation(state, pyload) {
            state.sexs = pyload;
        }
    },
    getters: {
        getSexsGetters(state) {
            return state.sexs;
        }
    },
    actions: {
        getSexsAction({ commit }) {
            axios.get('sex/index')
            .then( res => {
              commit('getSexsMutation', res.data)
            } )
            .catch( err => {
              console.log(err)
            } )
          }
    }
}



