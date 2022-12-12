import axios from 'axios'

export default {
    namespaced: true,
    state: {
        subscribes: {}
    },
    mutations: {

    },
    getters: {

    },
    actions: {
        AddSubscribeAction(_, data) {
            axios.post('subscribe/store', data)
            .then( res => {
                console.log('res')
                console.log(res)
            } )
            .catch( err => {
              console.log(err)
            } )
          }
    }
}



