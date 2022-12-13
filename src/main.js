import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
/* Globaly Components */
import ScrollTop from './components/FrontEnd/ScrollTop.vue'
import Footer from './components/FrontEnd/Footer.vue'
import ModalLogin from './components/FrontEnd/ModalLogin.vue'
import Navbar from './components/FrontEnd/Navbar.vue'
import BarNotification from './components/FrontEnd/BarNotification.vue'   
/* End Globaly Components */




require('@/store/subscriber')

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'




store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {

    //createApp(App).use(store).use(router).mount('#app')
    const app = createApp(App);
    app.use(store);
    app.use(router);
    app.mount('#app');


    app.component('ScrollTop', ScrollTop)
    app.component('ModalLogin', ModalLogin)
    app.component('Footer', Footer)
    app.component('Navbar', Navbar)
    app.component('BarNotification', BarNotification)

})