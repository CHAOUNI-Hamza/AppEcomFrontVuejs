import axios from 'axios'

export default {
    namespaced: true,
    state: {
        categories: {}
    },
    mutations: {
        getCategoriesMutation(state, pyload) {
            state.categories = pyload;
        }
    },
    getters: {
        getCategoriesGetters(state) {
            return state.categories;
        }
    },
    actions: {
        getCategoriesAction({ commit }) {
            axios.get('category/index')
            .then( res => {
              commit('getCategoriesMutation', res.data)
            } )
            .catch( err => {
              console.log(err)
            } )
          }
    }
}



