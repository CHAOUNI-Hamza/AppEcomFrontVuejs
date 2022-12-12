<template>
<!-- start categories -->

    <!-- start bar notification -->
    <BarNotification />
    <!-- start navbar -->
    <Navbar />

    <div class="categories">
        <div class="container">
            <div class="row">
                <div class="col-md-3 left">

                <!-- filter product -->
                <FilterProducts @changeFilter="changeFilter($event)" />

                </div>
                <div class="col-md-9 right">
                    <div class="row">

                        <!-- Top Categories -->
                        <TopCategories />

                        <hr>
                        <div class="row justify-content-between">
                            <div class="col-md-4 toolbar">
                                <button @click="(positionGrid = !positionGrid)">
                                    <i class="fa fa-th-list" aria-hidden="true"></i>
                                </button>
                                <button @click="(positionGrid = !positionGrid)">
                                    <i class="fa fa-th-large" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="col-md-4 result">
                                <p>Showing: {{ products.to }} Result</p>
                            </div>
                        </div>
                        <hr>
                        <div class="shopify-section">
                                <div v-if="positionGrid" class="row" >
                                    <div class="col-md-4 col-sm-6 col-6 card"  v-for="(product, index) in products.data" :key="index">
                                       <Product :product="product" />
                                    </div>
                                </div>

                                <div v-if="!positionGrid" class="row">
                                    <div class="col-md-12 col-sm-12 col-12 card card-horizontal" v-for="(product, index) in products.data" :key="index">
                                        <ProductHorizontal :product="product"/>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-md-12">
                                        <!-- start pagination -->
                                            <v-pagination
                                                v-model="query.page"
                                                :pages="products.last_page"
                                                :range-size="1"
                                                active-color="#DCEDFF"
                                                @update:modelValue="getProducts"
                                            />
                                        <!-- end pagination -->
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <Footer />

    <!-- ScrollTop -->
    <ScrollTop />

    <!-- ModalLogin -->
    <ModalLogin />

<!-- end categories -->
</template>

<script>
import axios from 'axios'
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import FilterProducts from '../components/FrontEnd/FilterProducts.vue';
import Product from '../components/FrontEnd/Product.vue'
import ProductHorizontal from '../components/FrontEnd/ProductHorizontal.vue'
import  TopCategories from '../components/FrontEnd/TopCategories.vue'
export default {
  components: {
    VPagination,
    FilterProducts,
    Product,
    ProductHorizontal,
    TopCategories
  },
  data() {
    return {
        positionGrid: true,
        products: {},
        query: {
           page: 1,
        },
        filters: {
            category: null,
            type: [],
            size: [],
            color: []
        }
    }
  },
  watch: {
    filters: {
      handler() {
        this.getProducts()
      },
      deep: true
    }
  },
  methods: {
    getProducts() {
        axios.get('product/index',{ params: this.filters})
            .then( res => {
                this.products = res.data
            } )
            .catch( err => {
                console.log(err)
            } )
    },
    changeFilter(data)
    {
        this.filters = {
            category : data.category,
            type : data.type,
            size : data.size,
            color : data.color
        }
    }
  },
  mounted() {
    this.getProducts()
    if(this.$route.params.id) {
        this.filters.category = this.$route.params.id
    }
    
  }
}
</script>

<style>

.Pagination {
    margin-top: 20px;
}
.list-view-item__title-column {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
}
.list-view-item__title-column .fa-star {
    color: #ffd400!important;
}
.list-view-item__image-column {
    display: table-cell;
    vertical-align: middle;
    width: 260px;
}
.list-view-item__title {
    color: #000;
    font-size: 17px;
    font-weight: 700;
    display: block;
    text-decoration: none;
    transition: .2s;
}
.list-view-item__title:hover { 
    color: rgb(71, 71, 71);
}
.spr-badge {
    display: block;
    margin: 10px 13px 10px 0;
}

.spr-badge-caption {
    font-size: 13px;
    margin-left: 4px;
}
.list-view-item__title-column p {
    margin: 0 0 15px;
}
.list-view-item__title-column .product-price__price {
    font-weight: 700;
    display: inline-block;
}
.product-price__sale {
    color: #f77575;
    margin-left: 9px;
}
.listview-button {
    display: flex;
}
.listview-button .btn-options {
    background: black;
    color: white;
    font-weight: bold;
    border-radius: 0;
    font-size: 15px;
    padding: 9px 33px;
    height: 40px;
    line-height: 21px;
}
.listview-button  .addto-wishlist  {
    background: black;
    color: white;
    font-weight: bold;
    border-radius: 0;
    font-size: 20px;
    padding: 9px 15px;
    height: 40px;
    line-height: 21px;
    margin-left: 5px;
}
.listview-button  .quick-view  {
    background: black;
    color: white;
    font-weight: bold;
    border-radius: 0;
    font-size: 20px;
    padding: 9px 15px;
    height: 40px;
    line-height: 21px;
    margin-left: 5px;
}
.card-horizontal {
    margin-top: 10px!important;
}










.categories {
    padding: 27px 0;
    font-family: 'Roboto Condensed', sans-serif;
}
.list-categories, .color, .size, .product-type, .brands {
    text-align: left;
    color: black;
    margin-bottom: 30px;
}
.list-categories .title, .color .title, .size .title, .product-type .title, .brands .title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 11px;
}
.list-categories ul, .color ul, .size ul, .product-type ul, .brands ul {
    list-style: none;
    padding: 0;
}
.list-categories ul li {
    
}
.list-categories ul li a, .product-type ul li a, .brands ul li a {
    color: black;
    text-decoration: none;
    font-size: 12px;
    transition: .4s;
}
.list-categories ul li a:hover, .product-type ul li a:hover, .brands ul li a:hover {
    color: rgba(255, 0, 0, 0.131);
}
.color li {
    overflow: hidden;
    display: inline-block;
    position: relative;
    height: 17px;
    width: 17px;
    margin: 3px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 0 1px 1px #ddd;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: .4s;
}
.color .color1 {
    background-color: red;
}
.color .color2 {
    background-color: rgb(10, 250, 94);
}
.color .color3 {
    background-color: rgb(0, 51, 255);
}
.color .color4 {
    background-color: rgb(255, 0, 102);
}
.color .color5 {
    background-color: rgb(0, 221, 255);
}
.color .color6 {
    background-color: rgb(234, 255, 0);
}
.color .color7 {
    background-color: rgb(242, 0, 255);
}
.size .checkbox label {
    font-size: 12px;
}
.size .checkbox label input {
    display: none;
}
.size .checkbox-input {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 5px 0 0;
    background: white;
    vertical-align: middle;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    border: 1px solid #00000030;
}



.categories .right .img-top {
    width: 100%;
    height: auto;
}
.categories .right .title {
    text-align: left;
    margin-top: 20px;
}
.categories .right h3 {
    font-size: 17px;
    font-weight: 700;
}
.categories .right p {
    font-size: 13px;
}


.categories .right .toolbar button {
    background: none;
    border: none;
}
.categories .right .toolbar button .fa {
    transition: .5s;
}
.categories .right .toolbar button:hover .fa {
    color: rgb(251, 203, 140);
}


.shopify-section-baror .img img {
    width: 100%;
}
.shopify-section-baror .detailes {
    text-align: left;
}
.shopify-section-baror .detailes .etoiles .fa {
    color: #ff9800;
}
.shopify-section-baror .detailes .btn {
    background: black;
    border-radius: 0;
    color: white;
    font-size: 13px;
    font-weight: 600;
    padding: 5px 14px;
    margin-right: 10px;
}
.shopify-section-baror .detailes h4 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 30px;
}
.shopify-section-baror .detailes p {
    font-size: 13px;
    margin-top: 14px;
}
.shopify-section-baror .card {
    margin-bottom: 15px;
}



@media (max-width: 390px) {
    .categories .left {
        display: none;
    }
.categories .shopify-section .card .img-wrap .img {
    height: 350px;
}
.categories .card .img-wrap {
    padding: 5px;
}
}
</style>



