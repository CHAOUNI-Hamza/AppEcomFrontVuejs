<template>
<!-- start setting Box -->
<a class="a" type="button" @click="settingBox()">
  <i class="fa fa-cog" aria-hidden="true"></i>
</a>
<div class="settingsBox" :class="{ 'show-setting-box': showSettingBox, 'none-setting-box': !showSettingBox }">
  <div v-if="!authenticated" class="customer-links">
    <p>
      <router-link :to="{name: 'login'}" class="btn">LOGIN</router-link>
    </p>
    <p class="new-user">
      NEW USER? <router-link :to="{name: 'register'}" class="register-now">REGISTER NOW</router-link>
    </p>
  </div>
  <div class="picker">
    <span class="title">Select Currency</span>
    <ul>
      <li :class="{ 'back' : Currency == 'DH' }">
        <a :class="{ 'back' : Currency == 'DH' }" @click="currency('DH', $event)" type="button">DH</a>
      </li>
      <li :class="{ 'back' : Currency == 'AUD' }">
        <a :class="{ 'back' : Currency == 'AUD' }" @click="currency('AUD', $event)" type="button">AUD</a>
      </li>
      <li :class="{ 'back' : Currency == 'CAD' }">
        <a :class="{ 'back' : Currency == 'CAD' }" @click="currency('CAD', $event)" type="button">CAD</a>
      </li>
      <li :class="{ 'back' : Currency == 'EUR' }">
        <a :class="{ 'back' : Currency == 'EUR' }" @click="currency('EUR', $event)" type="button">EUR</a>
      </li>
    </ul>
  </div>
</div>
<!-- start setting Box -->
</template>

<script>
export default {
    props: ['showSettingBox' ],
  components: {},
  data() {
    return {
        Currency: this.$store.state.multiCurrency
    }
  },
  methods: {
    settingBox() {
        this.$emit('showettingbox')
    },
    currency(value, event) {
      this.$store.state.multiCurrency = value
      this.Currency = value
      console.log(event)
    }
  }
}
</script>

<style>

</style>




