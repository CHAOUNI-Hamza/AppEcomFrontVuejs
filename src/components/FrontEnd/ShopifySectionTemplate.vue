<template>
<!-- start Shopify Section Template -->
<div class="shopify-section-template template-test">
      <div class="container text-center">
        <div class="row">
          <div v-for="sex in sexs.data" :key="sex.id" class="col-md-6 grid-two">
            <div class="collection-grid-item">
              <a href="" class="collection-grid-item-link">
                <div class="imgWrap">
                  <div class="img" v-bind:style="{ backgroundImage: 'url(' + sex.image + ')' }"></div>
                </div>
                <div class="details">
                  <h3>ACCESSORIES {{ sex.title.toUpperCase() }}</h3>
                  <p>Add finishing touch to you outfit</p>
                  <router-link :to="{name: 'categories'}" class="nav-link btn" aria-current="page" href="#">Show Now</router-link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
</div>
<!-- end Shopify Section Template -->
</template>

<script>
import {  mapGetters, mapActions } from "vuex"
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
        'getSexs' : 'sex/getSexsAction'
    })
  },
  mounted() {
    this.getSexs()
  },
  computed: {
    ...mapGetters({
        'sexs' : 'sex/getSexsGetters',
    }),
  }
}
</script>

<style>
.shopify-section-template {
  font-family: 'Roboto Condensed', sans-serif;
}
@media (max-width: 768px) {
  .shopify-section-template .collection-grid-item .details h3 {
  font-size: 18px;
}
.shopify-section-template .collection-grid-item .details p {
  font-size: 11px;
}
.shopify-section-template .collection-grid-item .details .btn {
    font-size: 11px;
}
}

@media (max-width: 390px) {
.shopify-section-template .collection-grid-item .details p {
  font-size: 9px;
}
}
@media (max-width: 390px) {
.logoBar .img {
    background-position: center;
    margin-bottom: 37px;
}
}

@media (max-width: 868px) {
.shopify-section-template .img {
    height: 400px;
}
.card .img-wrap .img {
    height: 268px;
}
.contenue {
    top: 78%;
    padding: 13px;
    width: 53%;
}
}


</style>



