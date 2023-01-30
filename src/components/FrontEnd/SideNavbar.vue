<template>
  <!-- start side navbar -->
  <div
    id="cart-drawer"
    class="cart-drawer"
    :class="[{ active: !showcartfixed, none: showcartfixed }]">
    <a href="javascript:void(0);" @click="closecartfixedd()" class="close-cart"
      ><i class="fa fa-times fa-timess" aria-hidden="true"></i
    ></a>
    <h4>Your cart</h4>
    <ul
      v-if="cart.length"
      class="mini-products-list"
      data-cart-view="data-cart-view">
      <li
        id="cart-title"
        rv-show="cart.item_count | lt 1"
        style="display: none">
        You don't have any items in your cart.
      </li>
      <!-- rivets: each-item -->
      <li class="grid">
        <div class="row cart">
          <div class="col-md-12 mb-1" v-for="item in cart" :key="item.id">
            <div class="row">
              <div class="col-4">
                <a class="grid__item">
                  <img
                    class="imgFl"
                    width="100"
                    height="100"
                    :src="item.image"
                    alt="Button Up Top Black - S" />
                </a>
              </div>
              <div class="col-8">
                <div class="grid__item">
                  <a
                    type="button"
                    @click="removeItemFromCart(item.id)"
                    class="remove">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </a>
                  <a class="pName" href="#">{{ item.name }}</a>
                  <div class="vropts">Green / S</div>
                  <div class="vropts" style="display: none"></div>
                  <ul style="display: none">
                    <!-- rivets: each-property -->
                  </ul>
                  <div class="priceRow flex">
                    <span class="product-price"
                      >{{ item.price * item.qty }} DH</span
                    >
                    <div class="qtyField" title="Quantity">
                      <a
                        class="qtyBtn"
                        type="button"
                        @click="reduceQty(item.id)"
                        >-</a
                      >
                      <span class="qtyBtn">{{ item.qty }}</span>
                      <a class="qtyBtn" type="button" @click="addQty(item.id)"
                        >+</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul style="padding: 0 10px">
              <li class="freeshiping">
                <i class="fa fa-truck" aria-hidden="true"></i>
                You have got <b>FREE SHIPPING</b>
              </li>
              <li class="subtotal">
                <span>SUBTOTAL:</span>
                <span
                  >{{ (totalPrice * calculCurrency).toFixed(2) }}
                  {{ currency }}</span
                >
              </li>
              <li class="shipping-button">
                <p>Shipping & taxes calculated at chackout</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="valideToCheckout"
                    type="checkbox"
                    id="flexCheckIndeterminate" />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    I agree with the terms and conditions
                  </label>
                </div>
                <router-link
                  :to="{ name: 'cart' }"
                  :class="{ disabled: !valideToCheckout }"
                  class="btn checkout"
                  >PROCEED TO CKECKOUT</router-link
                >
                <router-link class="btn cart" :to="{ name: 'cart' }">
                  VIEW CART
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <ul class="cart-vide" v-else>
      <p>You don't have any items in your cart.</p>
    </ul>
  </div>
  <!-- end side navbar -->
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["showcartfixed"],
  components: {},
  data() {
    return {
      valideToCheckout: false,
    };
  },
  methods: {
    ...mapActions(["reduceQty", "addQty", "removeItemFromCart"]),
    closecartfixedd() {
      this.$emit("closecartfixedd");
    },
  },
  computed: {
    ...mapGetters(["cart", "calculCurrency", "currency"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    },
  },
};
</script>

<style>
#cart-drawer {
  font-family: "Roboto Condensed", sans-serif;
}
#cart-drawer .mb-1 {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  padding-top: 10px;
}
.grid .cart {
  overflow-y: auto;
  max-height: 382px;
}
.cart-vide {
  margin-right: 23px;
  font-size: 14px;
  margin-top: 10px;
}
.disabled {
  pointer-events: none;
}

/* start cart-drawer */
.cart-drawer {
  width: 300px;
  height: 100%;
  background: white;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  transition: 1s;
}
.cart-drawer .fa-timess {
  color: #000;
  font-size: 20px;
  opacity: 0.6;
  position: absolute;
  right: 10px;
  top: 7px;
}
.cart-drawer.active {
  transform: translate(400px);
}
.cart-drawer.none {
  transform: translate(0);
}
.cart-drawer .ad-times-r {
  color: #000;
  font-size: 20px;
  opacity: 0.6;
  position: absolute;
  right: 10px;
  top: 7px;
}
.cart-drawer h4 {
  color: #000;
  font-size: 18px;
  text-align: left;
  margin: 10px 15px;
  font-weight: 900;
}
.cart-drawer .ad-times-r:before {
  content: "\eb41";
}
.cart-drawer .mini-products-list {
  padding: 0 15px;
  overflow-x: hidden;
  overflow-y: auto;
}

.cart-drawer .grid {
  padding: 10px 0;
  line-height: normal;
  border-top: 1px solid #eeeeeeee;
  list-style: none;
}

.cart-drawer .grid img {
  width: 100%;
  height: auto;
  display: block;
}
.cart-drawer .grid .grid__item {
  text-align: left;
}
.cart-drawer .grid .grid__item .remove {
  color: black;
  opacity: 0.5;
  float: right;
  padding: 7px;
  margin: -7px -7px 0 0;
}
.cart-drawer .grid .grid__item .pName {
  color: black;
  white-space: normal;
  text-decoration: none;
  line-height: 1.3;
  margin-right: 25px;
  font-size: 14px;
  text-align: left;
}
.cart-drawer .grid .grid__item .vropts {
  color: black;
  opacity: 0.6;
  padding: 5px 0;
  text-align: left;
}
.cart-drawer .grid .grid__item .priceRow {
  align-items: center;
  display: flex;
}

.cart-drawer .grid .grid__item .priceRow .qtyField {
  max-width: 75px;
  margin-left: auto;
  display: flex;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 0;
  text-align: center;
}

.cart-drawer .grid .grid__item .priceRow .qtyBtn {
  width: 25px;
  height: 25px;
  line-height: 25px;
  padding: 0;
  color: black;
  margin: 0;
  background: none;
  border-radius: 0;
  text-decoration: none;
}

.cart-drawer .grid .freeshiping {
  list-style: none;
  background: #efefef;
  padding: 10px 15px;
  margin: 18px -19px 11px -48px;
  font-size: 14px;
}
.cart-drawer .shipping-button .form-check-label {
  font-size: 13px;
  margin-top: 5px;
  width: 100%;
}
.cart-drawer .shipping-button .form-check-input {
  border-radius: 0;
}
.cart-drawer .shipping-button .checkout {
  background: #a3a0a0;
  width: 100%;
  border-radius: 0;
  color: white;
  font-weight: bold;
  font-size: 13px;
  margin-top: 10px;
}
.cart-drawer .shipping-button {
  list-style: none;
}
.cart-drawer .shipping-button p {
  font-size: 13px;
}
.cart-drawer .shipping-button .cart {
  background: #ff0000;
  width: 100%;
  border-radius: 0;
  color: white;
  font-weight: bold;
  font-size: 13px;
  margin-top: 10px;
}
.cart-drawer .subtotal {
  list-style: none;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  justify-content: space-between;
  display: flex;
  margin-bottom: 11px;
}
/* end cart-drawer */
</style>
