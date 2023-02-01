<template>
  <!-- start setting Box -->
  <a
    class="a"
    type="button"
    @click="settingBox"
    v-click-outside="closeSettingBox">
    <i class="fa fa-cog" aria-hidden="true"></i>
  </a>
  <div
    class="settingsBox position-absolute p-3"
    :class="{
      'show-setting-box': showSettingBox,
      'none-setting-box': !showSettingBox,
    }">
    <div v-if="!authenticated" class="customer-links">
      <p>
        <router-link :to="{ name: 'login' }" class="btn">LOGIN</router-link>
      </p>
      <p class="new-user">
        NEW USER?
        <router-link :to="{ name: 'register' }" class="register-now"
          >REGISTER NOW</router-link
        >
      </p>
    </div>
    <div class="picker">
      <span class="title">Select Currency</span>
      <ul>
        <li :class="{ back: Currency == 'DH' }">
          <a
            :class="{ back: Currency == 'DH' }"
            @click="currency('DH', $event)"
            type="button"
            >DH</a
          >
        </li>
        <li :class="{ back: Currency == 'AUD' }">
          <a
            :class="{ back: Currency == 'AUD' }"
            @click="currency('AUD', $event)"
            type="button"
            >AUD</a
          >
        </li>
        <li :class="{ back: Currency == 'CAD' }">
          <a
            :class="{ back: Currency == 'CAD' }"
            @click="currency('CAD', $event)"
            type="button"
            >CAD</a
          >
        </li>
        <li :class="{ back: Currency == 'EUR' }">
          <a
            :class="{ back: Currency == 'EUR' }"
            @click="currency('EUR', $event)"
            type="button"
            >EUR</a
          >
        </li>
      </ul>
    </div>
  </div>
  <!-- start setting Box -->
</template>

<script>
//import ClickOutside from 'vue-click-outside'
export default {
  //props: ["showSettingBox"],
  components: {
    //ClickOutside,
  },
  data() {
    return {
      showSettingBox: false,
      Currency: this.$store.state.multiCurrency,
    };
  },
  methods: {
    settingBox() {
      this.showSettingBox = true;
    },
    closeSettingBox() {
      this.showSettingBox = false;
    },
    currency(value, event) {
      this.$store.state.multiCurrency = value;
      this.Currency = value;
      console.log(event);
    },
  },
};
</script>

<style>
.settingsBox {
  width: 300px;
  z-index: 999;
  background: var(--white);
  right: 76px;
  font-size: 13px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
  transition: 0.2s;
}
.settingsBox.show-setting-box {
  top: 100%;
  opacity: 1;
}
.settingsBox.none-setting-box {
  top: 140%;
  opacity: 0;
}
.settingsBox .customer-links .btn {
  background: var(--black);
  border-radius: 0;
  color: var(--white);
  font-weight: bold;
  width: 100%;
  font-size: 14px;
}
.settingsBox .customer-links .register-now {
  color: var(--black);
}
.settingsBox .customer-links .user-now {
  color: var(--black);
  letter-spacing: 1px;
}
.settingsBox .picker {
  text-align: left;
}
.settingsBox .picker .title {
  display: block;
  margin: 20px 0 10px;
  letter-spacing: 1.2px;
  color: var(--black);
  font-weight: 600;
}
.settingsBox .picker ul {
  display: block;
  padding: 0;
}
.settingsBox .picker ul li {
  list-style: none;
  border: 1px solid var(--black);
  border-radius: 3px;
  padding: 0px 9px;
  margin: 0 9px 4px 0;
  display: inline-block;
}
.settingsBox .picker ul li:hover {
  border: 1px solid var(--red);
}
.settingsBox .picker ul li a {
  text-decoration: none;
  color: black;
}
.settingsBox .picker ul li:hover a {
  color: var(--red);
}
.settingsBox .picker ul li.back {
  border: 1px solid var(--red);
}
.settingsBox .picker ul li a.back {
  color: var(--red);
}
</style>
