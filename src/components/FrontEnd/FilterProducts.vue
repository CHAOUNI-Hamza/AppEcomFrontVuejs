<template>
<!-- start FilterProducts -->
<div class="list-categories">
    <div class="title">CATEGORIES</div>
        <ul class="categorie">
            <li v-for="( categorie, index ) in categories.data" :key="index">
                <a class="btn_categorie" type="button" @click="toCategoriesSlug(categorie.id)">{{ categorie.title }}</a>
            </li>
        </ul>
</div>

<div class="color">
    <div class="title">COLOR</div>
        <ul class="color">
            <li v-for="( color, index ) in colors.data" :key="index" v-bind:style="{ 'background-color': color.code }">
                <label v-bind:for="color.id+'3'">
                    <input class="check" type="checkbox" v-model="filters.color" v-bind:value="color.id" v-bind:id="color.id+'3'">
                    <span>{{ color.code }}</span>
                </label>
            </li>
        </ul>
</div>

<div class="size">
    <div class="title">SIZE</div>
        <ul class="size">
            <li v-for="( size, index ) in sizes.data" :key="index">
                <label v-bind:for="size.id+'2'">
                    <input class="check" type="checkbox" v-model="filters.size" v-bind:value="size.id" v-bind:id="size.id+'2'">
                    <span>{{ size.name }}</span>
                </label>
            </li>
         </ul>
</div>

<div class="product-type">
    <div class="title">PRODUCT TYPE</div>
        <ul class="type">
            <li v-for="( type, index ) in types.data" :key="index">
                <label v-bind:for="type.id+'1'">
                    <input class="check" type="checkbox" v-model="filters.type" v-bind:value="type.id" v-bind:id="type.id+'1'">
                    <span>{{ type.name }}</span>
                </label>
            </li>
        </ul>                     
</div>
<!-- end FilterProducts -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
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
        this.$emit('changeFilter', this.filters)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
        'getCategories' : 'categories/getCategoriesAction',
        'getColors' : 'colors/getColorsAction',
        'getSizes' : 'sizes/getSizesAction',
        'getTypes' : 'types/getTypesAction'
    }),
    toCategoriesSlug(catId) {
        this.$router.push({ name: 'categories', params: { id: catId } })
        this.filters.category = catId
    }
  },
  mounted() {
    this.getCategories()
    this.getColors()
    this.getSizes()
    this.getTypes()
  },
  computed: {
    ...mapGetters({
        'categories' : 'categories/getCategoriesGetters',
        'colors' : 'colors/getColorsGetters',
        'sizes' : 'sizes/getSizesGetters',
        'types' : 'types/getTypesGetters'
    })
  }
}
</script>

<style scoped>
/* start FilterProducts */
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




label {
    position: relative;
}

input {
    -webkit-appearance: none;
    appearance: none;
}

label::before {
    content: '';
    width: 15px;
    height: 15px;
    border: 1px solid #DDD;
    display: inline-block;
    position: relative;
}

input[type="checkbox"]:checked + span::after { 
    font-family: "FontAwesome";
    content: '\f0c8';
    width: 50px;
    height: 50px;
    position: absolute;
    left: 1px;
    top: -2px;
}





.categories {
    padding: 27px 0;
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

.type span {
    margin-left: 8px;
}
.size span {
    margin-left: 8px;
}


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
}
/* end FilterProducts */
</style>



