<template>
  <!-- start product -->
  <div class="collection">
    <div class="img-wrap">
      <router-link :to="{ name: 'product', params: { slug: product.slug } }">
        <div
          class="img img-three"
          v-bind:style="{
            backgroundImage: 'url(' + product.image + ')',
          }"></div>
      </router-link>
      <div class="icone">
        <a @click="addItemToWish(product)" type="button" class="faa">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </a>
        <router-link
          type="button"
          :to="{ name: 'product', params: { slug: product.slug } }"
          class="faa">
          <i class="fa fa-search-plus" aria-hidden="true"></i>
        </router-link>
        <a @click="addItemToCart(product)" type="button" class="faa">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="details">
      <p>{{ product.name }}</p>
      <p>{{ (product.price * calculCurrency).toFixed(2) }} {{ currency }}</p>
      <span class="etoiles">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </span>
      <ul class="gridSwatches">
        <li class="swatch one">
          <span class="tooltip-label"></span>
        </li>
        <li class="swatch two"></li>
        <li class="swatch three"></li>
      </ul>
    </div>
  </div>
  <!-- end product -->
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
  computed: {
    ...mapGetters({
      calculCurrency: "calculCurrency",
      currency: "currency",
    }),
  },
};
</script>
<style>
.img-wrap .img {
  border-radius: 10px;
}
</style>
