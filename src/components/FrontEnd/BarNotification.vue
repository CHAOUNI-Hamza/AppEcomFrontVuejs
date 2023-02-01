<template>
  <!-- start bar notification -->
  <Transition name="slide-fade">
    <div v-if="show" id="bar-notification" ref="barmessage">
      <router-link
        :to="{ name: 'categories' }"
        class="bar-notification-message">
        <b>BLAZING FAST !</b>
        PURCHASE THIS INCREDIBLE THEME NOW
        <b>FOR THE SUCCESS OF YOUR BUSINESS !</b>
      </router-link>
      <span @click="show = !show" class="close-bar-notification">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </span>
    </div>
  </Transition>
  <!-- end bar notification -->
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.$store.state.carousel.heightBarMessage =
      this.$refs.barmessage.clientHeight;
  },
};
</script>

<style scoped>
/* start bar notification */
#bar-notification {
  background-color: black;
  position: relative;
  text-align: center;
  z-index: 1;
  translate: 0;
  transition: 2s;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
}
#bar-notification.bar-notification-none {
  translate: 0 -53px;
}
#bar-notification.bar-notification-none-none {
  display: none;
}
#bar-notification .bar-notification-message {
  color: white;
  font-size: 1vw;
  display: block;
  letter-spacing: 0.5px;
  padding: 6px 10px;
  text-decoration: none;
}
#bar-notification .close-bar-notification {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -12px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  line-height: 23px;
  height: 25px;
  width: 25px;
}
#bar-notification .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

#bar-notification .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 0.2);
}

#bar-notification .slide-fade-enter-from,
#bar-notification .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/* end bar notification */
</style>
