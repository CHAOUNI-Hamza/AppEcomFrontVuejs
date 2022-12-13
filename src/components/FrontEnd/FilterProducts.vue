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
<style>
/* start FilterProducts */
.categories label {
    position: relative;
}
.categories input {
    -webkit-appearance: none;
    appearance: none;
}
.categories label::before {
    content: '';
    width: 15px;
    height: 15px;
    border: 1px solid #DDD;
    display: inline-block;
    position: relative;
}
.categories input[type="checkbox"]:checked + span::after { 
    font-family: "FontAwesome";
    content: '\f0c8';
    width: 50px;
    height: 50px;
    position: absolute;
    left: 1px;
    top: -2px;
}
.categories .list-categories, .color, .size, .product-type, .brands {
    text-align: left;
    color: black;
    margin-bottom: 30px;
}
.categories .list-categories .title, .color .title, .size .title, .product-type .title, .brands .title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 11px;
}
.categories .list-categories ul, .color ul, .size ul, .product-type ul, .brands ul {
    list-style: none;
    padding: 0;
}
.categories .list-categories ul li a, .product-type ul li a, .brands ul li a {
    color: black;
    text-decoration: none;
    font-size: 12px;
    transition: .4s;
}
.categories .list-categories ul li a:hover, .product-type ul li a:hover, .brands ul li a:hover {
    color: rgba(255, 0, 0, 0.131);
}
.categories .color li {
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
.categories .size .checkbox label {
    font-size: 12px;
}
.categories .size .checkbox label input {
    display: none;
}
.categories .size .checkbox-input {
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
.categories .type span {
    margin-left: 8px;
}
.categories .size span {
    margin-left: 8px;
} 
/* end FilterProducts */
</style>



