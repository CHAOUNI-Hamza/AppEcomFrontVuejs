<template>
  <!-- start barSearchNavbar -->
  <button href="" @click="showCloseBarSearch()">
    <i class="fa fa-search" aria-hidden="true"></i>
  </button>
  <div
    id="search-popup"
    class="search-popup"
    :class="{ 'search-popup-none': barSearch }">
    <button href="" class="closeSearch" @click="showCloseBarSearch()">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>

    <h4>What are you looking for ?</h4>

    <div class="input-group">
      <input
        v-model="search"
        class="form-control border-top-0 border-left-0 border-right-0 border-bottom"
        type="text"
        placeholder="Search for products"
        id="example-search-input" />
      <span class="input-group-append">
        <button
          class="btn btn-outline-secondary bg-white ms-n3 border-0"
          type="button">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>

    <div class="result" v-show="search.length > 0">
      <div class="row">
        <div
          v-for="(product, index) in products.data"
          :key="index"
          class="col-md-3">
          <div class="card">
            <router-link :to="{ name: 'wishlist' }" class="product">
              <div class="row">
                <div class="col-md-3">
                  <span class="img">
                    <img :src="product.image" alt="" width="100%" />
                  </span>
                </div>
                <div class="col-md-6">
                  <span class="details">
                    {{ product.name }}<br />
                    <span class="price">
                      {{ (product.price * calculCurrency).toFixed(2) }}
                      {{ currency }}
                    </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end barSearchNavbar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["barSearch"],
  components: {},
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      this.getProducts(this.search);
    },
  },
  methods: {
    showCloseBarSearch() {
      this.$emit("showCloseBarSearch");
    },
    ...mapActions({
      getProducts: "products/getProductsAction",
    }),
  },
  computed: {
    ...mapGetters({
      products: "products/getProductsGetters",
      calculCurrency: "calculCurrency",
      currency: "currency",
    }),
  },
};
</script>

<style scoped>
/* start barSearchNavbar */
.search-popup img {
  width: 100%;
}
.search-popup .card .row {
  transition: 0.5s;
}
.search-popup .card .row:hover {
  background: rgb(240, 238, 238);
}

.search-popup .card .product {
  text-decoration: none;
  color: #717171;
}
.search-popup .price {
  font-weight: bold;
}
/* end barSearchNavbar */
</style>
