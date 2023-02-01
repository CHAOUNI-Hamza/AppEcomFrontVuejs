<template>
  <!-- start scroll top -->
  <button id="btn-scroll" class="button-scroll" @click="scrollToTop">
    <i class="fa fa-angle-double-up" aria-hidden="true"></i>
  </button>
  <!-- end scroll top -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showScrollBtn: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    },
    scrollTop() {
      window.onscroll = function () {
        let btnScroll = document.getElementById("btn-scroll");
        if (window.scrollY >= 600) {
          btnScroll.classList.add("showscroll");
          btnScroll.classList.remove("removescroll");
        } else {
          btnScroll.classList.add("removescroll");
          btnScroll.classList.remove("showscroll");
        }
      };
    },
  },
  mounted() {
    this.scrollTop();
  },
};
</script>

<style scoped>
/* start scroll top */
.button-scroll {
  position: fixed;
  right: 30px;
  transition: 1s;
  border: none;
  background: #7cfcff8a;
  font-size: 21px;
  padding: 5px 12px;
  border-radius: 50%;
  color: black;
  transition: 0.2s;
}
.button-scroll:hover {
  bottom: 40px;
}
.button-scroll.showscroll {
  bottom: 30px;
}
.button-scroll.removescroll {
  bottom: -60px;
}
/* end scroll top */
</style>
