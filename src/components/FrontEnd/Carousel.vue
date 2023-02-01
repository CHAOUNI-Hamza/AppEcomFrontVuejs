<template>
  <!-- start carousel -->
  <div class="slider">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      ref="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item carousel-one"
          v-for="(carousel, index) in carousels.data"
          :key="carousel.id"
          v-bind:style="{
            backgroundImage: 'url(' + carousel.image + ')',
            height: heightCarousel + 'px',
          }"
          :class="{ active: index == 1 }">
          <div class="carousel-caption caption-one d-md-block">
            <p>{{ carousel.title }}</p>
            <h2>
              <b>{{ carousel.description }}</b>
            </h2>
            <span>The Powerful Theme You can Trust</span>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- end carousel -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      heightCarousel: "",
    };
  },
  methods: {
    getHeightCarousel() {
      this.heightCarousel =
        window.innerHeight - (this.heightBarMessage + this.heightNavbar);
    },
    ...mapActions({
      getCarousels: "carousel/getCarouselsAction",
    }),
  },
  mounted() {
    this.getHeightCarousel();
    this.getCarousels();
  },
  computed: {
    ...mapGetters({
      carousels: "carousel/getCarouselsGetters",
      heightBarMessage: "carousel/getHeightBarMessage",
      heightNavbar: "carousel/getHeightNavbar",
    }),
  },
};
</script>

<style scoped>
/* start carousel */
.slider {
  font-family: "Roboto Condensed", sans-serif;
}
.slider .carousel-one {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30%;
}
.slider .carousel-two {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 70%;
}
.slider .caption-one {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 34%;
}
.slider .caption-two {
  position: absolute;
  top: 50%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 34%;
}
.slider .carousel-caption h2 {
  color: var(--black);
  font-weight: 900;
}
.slider .carousel-caption span {
  color: var(--black);
}

.slider .carousel-caption p {
  color: var(--black);
  margin-bottom: 0;
}
.slider .carousel-control-next-icon,
.slider .carousel-control-prev-icon {
  width: 40px;
  border-radius: 5px;
  height: 40px;
  line-height: 38px;
  background-color: #ffffff80;
}

/* start media */
@media (max-width: 983px) {
  .slider .caption-one,
  .slider .caption-two {
    top: 50%;
    left: 50%;
    width: 70%;
  }
}
/* end media */

/* end carousel */
</style>
