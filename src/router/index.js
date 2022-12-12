import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Categories from '../views/Categories.vue'
import About from '../views/About.vue'
import Faqs from '../views/Faqs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Resetpassword from '../views/Resetpassword.vue'
import Wishlist from '../views/Wishlist.vue'

import store from '@/store';

import Dashboard from '../views/BackEnd/Dashboard.vue'

const routes = [
  /* Start route Back End */
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'login' })
      }

      next()

    }
  },
  /* End route Back End */
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/categories/:id?',
    name: 'categories',
    component: Categories
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: Faqs
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      
      if(store.getters['auth/authenticated']) {
        return next({ name: 'home' })
      }

      next()

    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      
      if(store.getters['auth/authenticated']) {
        return next({ name: 'home' })
      }

      next()

    }
  },
  {
    path: '/reset-password/:token',
    name: 'resetpassword',
    component: Resetpassword
  },
  {
    path: '/product/:slug',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  { path: "/:pathMatch(.*)*",
    component: PageNotFound,
    name: 'NotFound' 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
