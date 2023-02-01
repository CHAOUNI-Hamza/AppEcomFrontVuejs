<template>
  <!-- start latest-blog -->
  <div class="latest-blog">
    <div class="blog container">
      <div class="title">
        <h3>FRESH FROM OUR BLOG</h3>
        <p>You are going to love this amazing shopify</p>
      </div>
      <div class="row justify-content-between">
        <div
          v-for="article in articles.data"
          :key="article.index"
          class="col-md-4 col-sm-4 col-xs-12 card">
          <div class="img-wrap">
            <router-link
              :to="{ name: 'categories' }"
              aria-current="page"
              href="#">
              <div
                class="img"
                v-bind:style="{
                  backgroundImage: 'url(' + article.image + ')',
                }"></div>
            </router-link>
          </div>
          <div class="details">
            <h4>7 Easy Rules to Write Product Descriptions That Sell</h4>
            <p>June 26, 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end latest-blog -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getArticles: "articles/getArticlesAction",
    }),
  },
  mounted() {
    this.getArticles();
  },
  computed: {
    ...mapGetters({
      articles: "articles/getArticlesGetters",
    }),
  },
};
</script>

<style scoped>
/* start latest-blog */
.latest-blog {
  background-color: var(--white);
  padding: 41px 0;
  margin: 30px 0;
  font-family: "Roboto Condensed", sans-serif;
}
.latest-blog .title h3 {
  font-size: 22px;
  line-height: 1.3;
  font-weight: bold;
  color: var(--black);
}
.latest-blog .card {
  position: relative;
  overflow: hidden;
  padding: 0 10px 0 0;
  border: 0;
  background: none;
  border-radius: 0;
}
.latest-blog .card .img-wrap .img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
}
.latest-blog .card .details h4 {
  font-size: 18px;
  font-weight: 700;
}
.latest-blog .card .details p {
  opacity: 0.8;
}
@media (max-width: 390px) {
  .latest-blog {
    padding: 41px 30px;
  }
}
/* end latest-blog */
</style>
