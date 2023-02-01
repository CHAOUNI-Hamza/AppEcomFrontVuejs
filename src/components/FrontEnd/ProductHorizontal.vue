<template>
  <!-- start product horizontal -->
  <div class="collection">
    <div class="row">
      <div class="col-md-4 col-sm-12 col-12">
        <div class="img-wrap">
          <div
            class="img img-one"
            v-bind:style="{
              backgroundImage: 'url(' + product.image + ')',
            }"></div>
        </div>
      </div>
      <div class="col-md-8 col-sm-12 col-12 text-left res-horizontal">
        <div class="list-view-item__title-column">
          <a
            href="/collections/women/products/innerbloom-puffer-jacket"
            class="list-view-item__title"
            >{{ product.name }}</a
          >
          <span class="spr-badge">
            <span class="etoiles">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>
            <span class="spr-badge-caption">15 reviews</span>
          </span>
          <p>{{ product.description }}</p>
          <p class="list-view-item__meta">
            <!-- Show min to max price -->
            <span class="visually-hidden">Regular price</span>
            <s class="product-price__price regular"
              >{{ (product.price * calculCurrency).toFixed(2) }}
              {{ currency }}</s
            >
            <span class="product-price__price product-price__sale"
              >{{ product.price }}DH</span
            >
          </p>
          <div class="listview-button">
            <a
              class="btn btn-options"
              href="/collections/women/products/innerbloom-puffer-jacket"
              >Select Options</a
            >
            <form
              action="/cart/add"
              method="post"
              enctype="multipart/form-data"
              class="hide">
              <input type="hidden" name="id" value="19553805631555" />
            </form>
            <a
              @click="addItemToWish(product)"
              type="button"
              class="btn wishlist addto-wishlist"
              rel="innerbloom-puffer-jacket">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <a
              href="/collections/women/products/innerbloom-puffer-jacket?view=quick_view"
              rel="nofollow"
              class="btn quick-view">
              <i class="fa fa-search-plus" aria-hidden="true"></i>
            </a>
            <a
              @click="addItemToCart(product)"
              type="button"
              rel="nofollow"
              class="btn quick-view">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- start product horizontal -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["product"],
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      addItemToCart: "addItemToCart",
      addItemToWish: "addItemToWish",
    }),
  },
  mounted() {},
  computed: {
    ...mapGetters({
      calculCurrency: "calculCurrency",
      currency: "currency",
    }),
  },
};
</script>

<style scoped>
/* @media */
@media (max-width: 390px) {
  .categories .left {
    display: none;
  }
  .categories .shopify-section .card .img-wrap .img {
    height: 300px;
  }
  .res-horizontal {
    padding: 15px 38px;
  }
  .categories .listview-button .btn-options {
    padding: 9px 21px;
  }
}
</style>
