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

            <hr />
            <div class="row justify-content-between">
              <div class="col-md-4 toolbar">
                <button @click="positionGrid = !positionGrid">
                  <i class="fa fa-th-list" aria-hidden="true"></i>
                </button>
                <button @click="positionGrid = !positionGrid">
                  <i class="fa fa-th-large" aria-hidden="true"></i>
                </button>
              </div>
              <div class="col-md-4 result">
                <p>Showing: {{ products.to }} Result</p>
              </div>
            </div>
            <hr />
            <div class="shopify-section">
              <div v-if="positionGrid" class="row">
                <div
                  class="col-md-4 col-sm-6 col-6 card"
                  v-for="(product, index) in products.data"
                  :key="index">
                  <Product :product="product" />
                </div>
              </div>

              <div v-if="!positionGrid" class="row">
                <div
                  class="col-md-12 col-sm-12 col-12 card card-horizontal"
                  v-for="(product, index) in products.data"
                  :key="index">
                  <ProductHorizontal :product="product" />
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
                    @update:modelValue="getProducts" />
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
import axios from "axios";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import FilterProducts from "../components/FrontEnd/FilterProducts.vue";
import Product from "../components/FrontEnd/Product.vue";
import ProductHorizontal from "../components/FrontEnd/ProductHorizontal.vue";
import TopCategories from "../components/FrontEnd/TopCategories.vue";
export default {
  components: {
    VPagination,
    FilterProducts,
    Product,
    ProductHorizontal,
    TopCategories,
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
        color: [],
      },
    };
  },
  watch: {
    filters: {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  methods: {
    getProducts() {
      axios
        .get("product/index", { params: this.filters })
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeFilter(data) {
      this.filters = {
        category: data.category,
        type: data.type,
        size: data.size,
        color: data.color,
      };
    },
  },
  mounted() {
    this.getProducts();
    if (this.$route.params.id) {
      this.filters.category = this.$route.params.id;
    }
  },
};
</script>

<style>
/* start categories */
.categories {
  padding: 27px 0;
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
  transition: 0.5s;
}
.categories .right .toolbar button:hover .fa {
  color: rgb(251, 203, 140);
}
.categories .list-view-item__title-column {
  display: table-cell;
  vertical-align: middle;
  text-align: left;
}
.categories .list-view-item__title-column .fa-star {
  color: #ffd400 !important;
}
.categories .list-view-item__image-column {
  display: table-cell;
  vertical-align: middle;
  width: 260px;
}
.categories .list-view-item__title {
  color: #000;
  font-size: 17px;
  font-weight: 700;
  display: block;
  text-decoration: none;
  transition: 0.2s;
}
.categories .list-view-item__title:hover {
  color: rgb(71, 71, 71);
}
.categories .spr-badge {
  display: block;
  margin: 10px 13px 10px 0;
}
.categories .spr-badge-caption {
  font-size: 13px;
  margin-left: 4px;
}
.categories .list-view-item__title-column p {
  margin: 0 0 15px;
}
.categories .list-view-item__title-column .product-price__price {
  font-weight: 700;
  display: inline-block;
}
.categories .product-price__sale {
  color: #f77575;
  margin-left: 9px;
}
.categories .listview-button {
  display: flex;
}
.categories .listview-button .btn-options {
  background: black;
  color: white;
  font-weight: bold;
  border-radius: 0;
  font-size: 15px;
  padding: 9px 33px;
  height: 40px;
  line-height: 21px;
}
.categories .listview-button .addto-wishlist {
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
.categories .listview-button .quick-view {
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
.categories .card-horizontal {
  margin-top: 10px !important;
}
/* @media */
@media (max-width: 390px) {
  .categories .left {
    display: none;
  }
  .categories .shopify-section .card .img-wrap .img {
    height: 160px;
  }
  .categories .card .img-wrap {
    padding: 5px;
  }
  .categories .card:hover .img-wrap .icone {
    top: 77%;
    font-size: 14px;
  }
  .categories .card .details {
    margin-top: -2px;
  }
}
/* end categories */
</style>
