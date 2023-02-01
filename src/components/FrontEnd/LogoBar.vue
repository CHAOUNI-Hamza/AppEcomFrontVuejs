<template>
  <!-- start logo bar -->
  <div class="logoBar">
    <div class="grid container">
      <div class="row justify-content-between">
        <div
          v-for="clien in clients.data"
          :key="clien.id"
          class="col-md-2 col-sm-6 col-xs-12 marks text-center">
          <div
            class="img"
            v-bind:style="{
              backgroundImage: 'url(' + clien.image + ')',
            }"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- end logo bar -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getClients: "clients/getClientsAction",
    }),
  },
  mounted() {
    this.getClients();
  },
  computed: {
    ...mapGetters({
      clients: "clients/getClientsGetters",
    }),
  },
};
</script>

<style>
/* start logo Bar */
.logoBar {
  margin-top: 64px;
}
.logoBar .img {
  background-size: contain;
  background-repeat: no-repeat;
  height: 132px;
  justify-items: center;
}
/* @media */
@media (max-width: 390px) {
  .logoBar {
    padding: 44px;
  }
}
/* end logo Bar */
</style>
