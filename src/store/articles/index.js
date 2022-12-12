import axios from 'axios'

export default {
    namespaced: true,
    state: {
        articles: {}
    },
    mutations: {
        getArticlesMutation(state, pyload) {
            state.articles = pyload;
        }
    },
    getters: {
        getArticlesGetters(state) {
            return state.articles;
        }
    },
    actions: {
        getArticlesAction({ commit }) {
            axios.get('article/index', {params: { paginate: 3 }})
            .then( res => {
                commit('getArticlesMutation', res.data)
            })
            .catch( err => {
                console.log(err)
            } )
        }
    }
}



