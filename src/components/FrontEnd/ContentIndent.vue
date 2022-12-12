<template>
<!-- start ContentIndent -->
    <div class="shopify-section-categorie">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title">
            <h3>CATEGORIES</h3>
            <p>Products for all categories</p>
          </div>
        </div>
        <div class="row">

          <swiper
          :slides-per-view="slidesPerView"
          :space-between="5"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          >
          <swiper-slide v-for="category in categories.data" :key="category.id"> 
            <div class="col-md-3 col-sm-6 col-xs-12 card">
              <CardContentIndent :category="category"/>
            </div>
          </swiper-slide>
        </swiper>   
        </div>
      </div>
    </div>
<!-- end ContentIndent -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {  mapGetters, mapActions } from "vuex"
import CardContentIndent from "./CardContentIndent.vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardContentIndent
  },
  data() {
    return {
      barMessage: true,
      slidesPerView : window.innerWidth 
    } 
  },
  methods: {
    ...mapActions({
        'getCategories' : 'categories/getCategoriesAction'
    }),
    calculSlides() {
      if( window.innerWidth >= 768 ) {
        this.slidesPerView = 4
      }
      else if( window.innerWidth >= 576 ) {
        this.slidesPerView = 2
      }
      if( window.innerWidth < 576 ) {
        this.slidesPerView = 1
      }
    }
  },
  mounted() {
    this.getCategories()
    this.calculSlides()  
  },
  computed: {
    ...mapGetters({
        'categories' : 'categories/getCategoriesGetters'
    }),
  }
}
</script>

<style>
/* start ContentIndent */
.shopify-section-categorie {
  font-family: 'Roboto Condensed', sans-serif;
  }
.contenue {
  position: absolute;
    top: 78%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    background: white;
    padding: 21px;
    width: 58%;
}
.contenue .btn {
    background: black;
    border-radius: 0;
    color: white;
    font-size: 12px;
}
.shopify-section-categorie {
  margin: 45px;
  position: relative;
}
.shopify-section-categorie .img {
    padding-bottom: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all ease-out .4s;
}
.shopify-section-categorie .title {
  margin-bottom: 22px;
}
.shopify-section-categorie .title h3 {
    font-weight: 600;
    
}
.shopify-section-categorie .img:hover {
  transform: scale(1.1);
}
.shopify-section-categorie .collection-grid-item {
  position: relative;
  overflow: hidden;
}
.shopify-section-categorie .collection-grid-item .details {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 50px;
    right: 0;
    padding: 20px;
    text-align: center;
    background: white;
    color: black;
    width: 60%;
}
.shopify-section-categorie .collection-grid-item .details h3 {
  font-family: fantasy;
    font-size: 24px;
}
.shopify-section-categorie .collection-grid-item .details p {
  font-family: inherit;
  color: black;
}
.shopify-section-categorie .collection-grid-item .details .btn {
  background: black;
    border-radius: 0;
    color: white;
    font-weight: 700;
    padding: 8px 27px;
}
.link {
  color: black;
  text-decoration: none;
}
.shopify-section-categorie .card {
  width: 100%;
  border-radius: 0 !important;
}
/* end ContentIndent */












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



