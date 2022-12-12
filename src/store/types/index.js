import axios from 'axios'

export default {
    namespaced: true,
    state: {
        types: {}
    },
    mutations: {
        getTypesMutation(state, pyload) {
            state.types = pyload;
        }
    },
    getters: {
        getTypesGetters(state) {
            return state.types;
        }
    },
    actions: {
        getTypesAction({ commit }) {
            axios.get('type/index')
            .then( res => {
              commit('getTypesMutation', res.data)
            } )
            .catch( err => {
              console.log(err)
            } )
          }
    }
}



