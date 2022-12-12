import axios from 'axios'

export default {
    namespaced: true,
    state: {
        clients: {}
    },
    mutations: {
        getClientsMutation(state, pyload) {
            state.clients = pyload;
        }
    },
    getters: {
        getClientsGetters(state) {
            return state.clients;
        }
    },
    actions: {
        getClientsAction({ commit }) {
            axios.get('client/index', {params: { paginate: 6 }})
            .then( res => {
                commit('getClientsMutation', res.data)
            })
            .catch( err => {
                console.log(err)
            } )
        }
    }
}



