<template>
  <!-- start wishlist -->

  <!-- bar notification -->
  <BarNotification />
  <!-- navbar -->
  <Navbar />

  <div class="container">
    <div class="cart">
      <div class="row justify-content-center">
        <div class="col-md-8 left">
          <div class="cart-left">
            <div class="content-top">
              <h3>List wish</h3>
            </div>
            <hr />
            <div v-if="wish.length" class="cart-body">
              <ul>
                <li v-for="item in wish" :key="item.id">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="img-wrap">
                        <img :src="item.image" alt="" width="100%" />
                      </div>
                    </div>
                    <div class="col-md-3">
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
                            <span class="price">{{ item.price }} &nbsp;DH</span>
                          </div>
                        </div>
                        <div class="product-line-info">
                          <span class="label">Taille : </span>
                          <span class="value"> S</span>
                        </div>
                        <div class="product-line-info">
                          <span class="label">Couleur : </span>
                          <span class="value">Orange</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <span>
                        <router-link
                          :to="{ name: 'home' }"
                          class="btn v-product"
                          >View Product</router-link
                        >
                      </span>
                      <span>
                        <button
                          @click="removeItemFromWish(item.id)"
                          class="btn-delete">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="cart-body">
              <p>he products were not added to the wishlist.</p>
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

  <!-- end wishlist -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["reduceQtyWish", "addQtyWish", "removeItemFromWish"]),
  },
  mounted() {},
  computed: {
    ...mapGetters(["wish"]),
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
  height: 140px;
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
  color: black;
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

.v-product {
  background: black;
  border-radius: 0;
  color: white;
  font-size: 15px;
  padding: 6px 18px;
}
.btn-delete {
  background: var(--red);
  border: navajowhite;
  padding: 6px 11px;
  color: white;
  margin-left: 10px;
}
</style>
