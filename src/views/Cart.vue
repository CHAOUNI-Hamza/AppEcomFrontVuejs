<template>
  <!-- start cart -->

  <!-- bar notification -->
  <BarNotification />

  <!-- start navbar -->
  <Navbar />

  <div class="container">
    <div class="cart">
      <div class="row">
        <div class="col-md-8 left">
          <div class="cart-left">
            <div class="content-top">
              <h3>PANIER</h3>
            </div>
            <hr />
            <div v-if="cart.length" class="cart-body">
              <ul>
                <li v-for="item in cart" :key="item.id" class="mt-4">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="img-wrap">
                        <img :src="item.image" alt="" width="100%" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="product-line-grid-body">
                        <div class="product-line-info">
                          <a
                            class="label"
                            href="http://demo.posthemes.com/pos_nego/layout3/fr/accueil/3-13-printed-dress.html#/1-taille-s/13-couleur-orange"
                            data-id_customization="0"
                            >{{ item.name }}</a
                          >
                        </div>
                        <div class="product-line-info product-price h5">
                          <div class="current-price">
                            <span class="price"
                              >{{
                                (item.price * calculCurrency).toFixed(2)
                              }}
                              &nbsp;{{ currency }}</span
                            >
                          </div>
                        </div>
                        <div class="product-line-info">
                          <span class="label">Taille : </span>
                          <span class="value">S</span>
                        </div>
                        <div class="product-line-info">
                          <span class="label">Couleur : </span>
                          <span class="value">Orange</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 text-center">
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
                    <div class="col-md-3">
                      <div class="price">
                        {{
                          (item.price * calculCurrency).toFixed(2) * item.qty
                        }}
                        &nbsp;{{ currency }}
                      </div>
                    </div>
                    <div class="col-md-1">
                      <div class="delete">
                        <button @click="removeItemFromCart(item.id)">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="cart-body">
              <p>he products were not added to the Products.</p>
            </div>
          </div>
        </div>
        <div v-if="cart.length" class="col-md-4 right">
          <div class="cart-summary">
            <div class="cart-detailed-totals">
              <div class="card-block">
                <div class="cart-summary-line" id="cart-subtotal-products">
                  <span class="label js-subtotal">{{ totalQty }} articles</span>
                  <span class="value"
                    >{{ (totalPrice * calculCurrency).toFixed(2) }} &nbsp;{{
                      currency
                    }}</span
                  >
                </div>
                <div class="cart-summary-line" id="cart-subtotal-shipping">
                  <span class="label">Livraison</span>
                  <span class="value">7,00&nbsp;$US</span>
                  <div>
                    <small class="value"></small>
                  </div>
                </div>
              </div>
              <hr />
              <div class="card-block">
                <div class="cart-summary-line cart-total">
                  <span class="label">Total (HT)</span>
                  <span class="value"
                    >{{ (totalPrice * calculCurrency).toFixed(2) }} &nbsp;{{
                      currency
                    }}</span
                  >
                </div>
              </div>
              <hr />
            </div>
            <div class="checkout cart-detailed-actions card-block">
              <div class="text-xs-center">
                <a
                  href="http://demo.posthemes.com/pos_nego/layout3/fr/commande"
                  class="btn btn-primary"
                  >Commander</a
                >
              </div>
            </div>
          </div>
        </div>

        <router-link class="label-continuer-achat" :to="{ name: 'categories' }">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>Continuer mes
          achats
        </router-link>
      </div>
    </div>
  </div>

  <!-- footer -->
  <Footer />

  <!-- ScrollTop -->
  <ScrollTop />

  <!-- ModalLogin -->
  <ModalLogin />

  <!-- end cart -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["reduceQty", "addQty", "removeItemFromCart"]),
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

<style scoped>
.cart {
  padding: 50px 0;
  font-family: "Roboto Condensed", sans-serif;
}
.cart .left {
  /*border: 1px solid #0000003b;*/
  margin: 0;
  padding: 0;
  box-shadow: 2px 2px 11px 0px rgb(0 0 0 / 10%);
}
.cart .left .cart-left .content-top {
  padding-top: 20px;
  padding-bottom: 5px;
  padding-left: 51px;
}
.cart .left .cart-left .content-top h3 {
  font-size: 19px;
  font-weight: 700;
  text-align: left;
}
.cart .left .cart-left hr {
  border-top: 1px solid #00000047;
  margin: 0;
}
.img-wrap {
  border-radius: 6px;
  box-shadow: var(--shadow);
}
.img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.cart .left .cart-left .cart-body {
  padding: 20px;
}
.cart .left .cart-left .cart-body ul li {
  margin-bottom: 11px;
}
.cart .left .cart-left .cart-body ul {
  list-style: none;
}
.cart .left .cart-left .cart-body .product-line-grid-body {
  text-align: left;
}

.cart
  .left
  .cart-left
  .cart-body
  .product-line-grid-body
  .product-line-info
  .label {
  text-decoration: none;
  color: #000000a3;
}

.cart .left .product-line-info .price {
  font-weight: 700;
  font-size: 18px;
}
.cart .left .product-line-info span {
  color: #000000a3;
}

.cart .left .cart-left .cart-body .price {
  font-weight: bolder;
  font-size: 18px;
}
.cart .left .cart-left .cart-body .delete button {
  background: none;
  border: none;
}
.cart .left .cart-left .cart-body .delete .fa-trash {
  font-size: 24px;
  color: var(--red);
}
.cart .right {
  text-align: left;
}

.cart .right .cart-summary {
  /*border: 1px solid #c4c4c4;*/
  box-shadow: 2px 2px 11px 0px rgb(0 0 0 / 10%);
}
.cart hr {
  border: 0;
  border-top: 1px solid #00000047;
  height: 0;
  margin: 0;
}
.cart .right .card-block {
  padding: 18px 25px;
}
.cart .right .cart-summary-line .label {
  color: #000000a3;
}
.cart .right .cart-summary-line .value {
  color: #000000a3;
  float: right !important;
}

.cart .right .checkout .btn {
  width: 100%;
  color: white;
  background-color: black;
  border: 0;
  border-radius: 0;
  font-weight: 600;
}

.cart .label-continuer-achat {
  text-align: left;
  color: #000000b8;
  text-decoration: none;
  margin-top: 15px;
}
.cart .label-continuer-achat .fa {
  margin-right: 13px;
}
.input-group .btn-outline-secondary {
  font-size: 11px;
  border-radius: 0;
  border: 1px solid #ced4da;
  padding: 8px 9px;
  box-shadow: 2px 2px 11px 0px rgb(0 0 0 / 10%);
}
.form-select {
  font-size: 9px;
  border-radius: 0;
  box-shadow: 2px 2px 11px 0px rgb(0 0 0 / 10%);
}

.qtyField {
  max-width: 75px;
  margin-left: auto;
  display: flex;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 0;
}
.qtyBtn {
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
</style>
