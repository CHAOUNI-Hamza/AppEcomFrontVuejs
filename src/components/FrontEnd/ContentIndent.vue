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
      if ( window.innerWidth >= 768 ) {
        this.slidesPerView = 4
      }
      else if ( window.innerWidth >= 576 ) {
        this.slidesPerView = 2
      }
      if ( window.innerWidth < 576 ) {
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
  margin: 45px;
  position: relative;
  }

.shopify-section-categorie .title {
  margin-bottom: 22px;
}
.shopify-section-categorie .title h3 {
    font-weight: 600;
    
}
.shopify-section-categorie .swiper {
  width: 100%;
  height: 100%;
}
.shopify-section-categorie .swiper-slide {
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

.shopify-section-categorie .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* end ContentIndent */
/* start cardContentIndent */
.shopify-section-categorie .card {
    position: relative;
    transition: all ease-out .4s;
    width: 100%;
    border-radius: 0 !important;
}
.shopify-section-categorie .contenu {
    position: absolute;
    bottom: -23px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 14px 18px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.shopify-section-categorie .contenu .btn {
    background: black;
    border-radius: 0;
    color: white;
    box-shadow: 28px 42px 58px rgb(34 28 7 / 22%);
    border: none;
}
.shopify-section-categorie .link {
  color: black;
  text-decoration: none;
}
.shopify-section-categorie .card .img {
    padding-bottom: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}
.shopify-section-categorie .card:hover .img {
  transform: scale(1.1);
}
/* @media  */
@media (max-width: 390px) {
  .shopify-section-categorie .card .img-wrap .img {
    height: 294px;
  }
  .shopify-section-categorie .contenu .btn {
    padding: 7px 8px;
  }
}
/* end cardContentIndent */
</style>



