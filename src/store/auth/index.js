import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, data) {
            state.user = data
        }
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {

            try {
              
                const response = await axios.post('auth/login', credentials)

                // start swal
                /*let timerInterval
                Swal.fire({
                title: 'Please wait a bit',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    router.replace({name: 'home'}) 
                }
                })*/
                // end swal

                router.replace({name: 'home'}) 
                
               return dispatch('attempt', response.data.access_token)

               

            } catch (error) {
                console.log(error)
            }
        },
        async attempt({ commit, state }, token) {
            
            try {
                
                if(token) {
                    commit('setToken', token)
                }

                if(!state.token) {
                    return;
                }

                const response = await axios.post('auth/me')
                console.log(response)

                commit('setUser', response.data)

             console.log('success')

            } catch (error) {
                console.log('hiho')
                commit('setUser', null)
                commit('setToken', null)
               
            }

        },
        signOut({ commit }) {
            return axios.post('auth/logout').then(() => {
                commit('setUser', null)
                commit('setToken', null)
            })
        },
        signUp(_, credentials) {
                axios.post('auth/register', credentials)
                .then( () => {
                    router.replace({name: 'login'}) 
                    /*Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Welcome here',
                        showConfirmButton: false,
                        timer: 1500
                        })*/
                } )
                .catch( err => {
                    console.log(err)
                } )
            }
    }
}