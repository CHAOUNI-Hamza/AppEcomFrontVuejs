<template>
  <!-- start shopify-section -->
  <div class="shopify-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 title">
          <h3>NEW PRODUCTS</h3>
          <p>Shop our new products from established brands</p>
        </div>
      </div>
      <div class="row">
        <swiper
          :slides-per-view="slidesPerView"
          :space-between="5"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide v-for="product in products.data" :key="product.id">
            <div class="col-md-3 col-sm-6 col-xs-12 card carde">
              <!-- Product -->
              <Product :product="product" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- end shopify-section -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { mapGetters, mapActions } from "vuex";
import Product from "./Product.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Product,
  },
  data() {
    return {
      barMessage: true,
      slidesPerView: window.innerWidth,
    };
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProductsAction",
    }),
    calculSlides() {
      if (window.innerWidth >= 768) {
        this.slidesPerView = 4;
      } else if (window.innerWidth >= 576) {
        this.slidesPerView = 2;
      }
      if (window.innerWidth < 576) {
        this.slidesPerView = 1;
      }
    },
  },
  mounted() {
    this.getProducts();
    this.calculSlides();
  },
  computed: {
    ...mapGetters({
      products: "products/getProductsGetters",
    }),
  },
};
</script>

<style>
/* start shopify-section */
.shopify-section {
  font-family: "Roboto Condensed", sans-serif;
}
.shopify-section-template {
  margin: 30px;
  position: relative;
}
.shopify-section-template .img {
  background-repeat: no-repeat;
  transition: all ease-out 0.4s;
  background-size: 100% 100%;
  height: 800px;
  border-radius: 17px;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 69%), 0 0 9px 0 rgb(0 0 0 / 19%) !important;
}
.shopify-section-template .img:hover {
  transform: scale(1.1);
}
.shopify-section-template .collection-grid-item {
  position: relative;
  overflow: hidden;
}
.shopify-section-template .collection-grid-item .details {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 50px;
  right: 0;
  padding: 20px;
  text-align: center;
  background: rgb(255, 255, 255);
  border-radius: 9px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.10968137254901966) 100%
  );
  color: black;
  width: 60%;
}
.shopify-section-template .collection-grid-item .details h3 {
  font-family: fantasy;
  font-size: 24px;
}
.shopify-section-template .collection-grid-item .details p {
  font-family: inherit;
  color: black;
}
.shopify-section-template .collection-grid-item .details .btn {
  background: radial-gradient(
    circle,
    rgba(63, 165, 251, 1) 0%,
    rgba(70, 245, 252, 1) 100%
  );
  border-radius: 5px;
  border-radius: 0;
  color: white;
  font-weight: 700;
  padding: 8px 27px;
}
.link {
  color: black;
  text-decoration: none;
}
.shopify-section .card.carde {
  width: 100%;
}
/* end shopify-section */

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
