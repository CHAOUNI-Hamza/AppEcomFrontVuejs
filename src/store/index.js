import { createStore } from 'vuex'
import auth from './auth/index';
import categories from './categories/index';
import colors from './colors/index';
import sizes from './sizes/index';
import types from './types/index';
import subscribe from './subscribe/index';
import sex from './sex/index';
import products from './products/index';
import contact from './contact/index';
import carousel from './carousel/index';
import articles from './articles/index';
import clients from './clients/index';

import router from '@/router'

export default createStore({
  state: {
    multiCurrency: 'DH',
    calucle: 1,
    cart: [],
    wish: []
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    wish(state) {
      return state.wish;
    },
    currency(state) {
      return state.multiCurrency;
    },
    calculCurrency(state) {
      if( state.multiCurrency == 'AUD' ) {
        return state.calucle = 0.14
      }
      else if( state.multiCurrency == 'CAD' ) {
        return state.calucle = 0.12
      }
      else if( state.multiCurrency == 'EUR' ) {
        return state.calucle = 0.9
      }
      else if( state.multiCurrency == 'DH' ) {
        return state.calucle
      }
    }
  },
  mutations: {
    // Cart
    addToCart(state, product) {
      const productInCart = state.cart.find((pro) => pro.id === product.id);
      if (!productInCart) {
        state.cart.push({ ...product, qty: 1 });
      } else {
        productInCart.qty++;
      }
      console.log(state.cart);
    },
    reduceQty(state, id) {
      const productInCart = state.cart.find((product) => product.id === id);
      if (productInCart.qty > 1) {
        productInCart.qty--;
      } else {
        state.cart.splice(state.cart.indexOf(productInCart, 1));
      }
    },
    addQty(state, id) {
      const productInCart = state.cart.find((product) => product.id === id);
      productInCart.qty++;
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    // Wish
    addToWish(state, product) {
      const productInWish = state.wish.find((pro) => pro.id === product.id);
      console.log(productInWish)
      if (!productInWish) {
        state.wish.push({ ...product, qty: 1 });
      } else {
        router.replace({name: 'wishlist'})
      }
      console.log(state.wish);
    },
    reduceQtyWish(state, id) {
      const productInWish = state.wish.find((product) => product.id === id);
      if (productInWish.qty > 1) {
        productInWish.qty--;
      } else {
        state.wish.splice(state.wish.indexOf(productInWish, 1));
      }
    },
    addQtyWish(state, id) {
      const productInWish = state.wish.find((product) => product.id === id);
      productInWish.qty++;
    },
    removeFromWish(state, id) {
      state.wish = state.wish.filter((item) => item.id !== id);
    }

  },
  actions: {

    // Cart
    addItemToCart({ commit }, product) {
      commit("addToCart", product);
    },
    reduceQty({ commit }, id) {
      commit("reduceQty", id);
    },
    addQty({ commit }, id) {
      commit("addQty", id);
    },
    removeItemFromCart({ commit }, id) {
      commit("removeFromCart", id);
    },

    // Wish
    addItemToWish({ commit }, product) {
      commit("addToWish", product);
    },
    reduceQtyWish({ commit }, id) {
      commit("reduceQtyWish", id);
    },
    addQtyWish({ commit }, id) {
      commit("addQtyWish", id);
    },
    removeItemFromWish({ commit }, id) {
      commit("removeFromWish", id);
    }

  },
  modules: {
    auth,
    categories,
    colors,
    sizes,
    types,
    subscribe,
    sex,
    products,
    contact,
    carousel,
    articles,
    clients
  }
})
