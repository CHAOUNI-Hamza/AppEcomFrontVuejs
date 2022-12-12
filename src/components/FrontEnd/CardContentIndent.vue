<template>
<!-- start cardContentIndent -->
<div class="collection">
  <router-link :to="{name: 'categories', params: { id: category.id }}" class="link">
    <div class="img-wrap">
      <div class="img" v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }"></div>
      <div class="contenue">
        <h6>Women</h6>
        <router-link :to="{name: 'categories'}" class="btn">SHOW NOW</router-link>
      </div>
    </div>
  </router-link>
</div>
<!-- end cardContentIndent -->
</template>

<script>
export default {
  props: [ 'category' ],
  components: {},
  data() {
    return {}
  }
}
</script>
<style>
/* start cardContentIndent */
/* end cardContentIndent */
</style>




