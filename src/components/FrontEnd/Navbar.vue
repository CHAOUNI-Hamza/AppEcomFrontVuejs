<template>
  <!-- start navbar -->
  <nav class="navbar navbar-expand-lg bg-light d-flex" ref="navbar">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <LinkNavbar />
      </div>
      <div class="icons-col">
        <!-- Search -->
        <BarSearchNavbar
          @showCloseBarSearch="barSearch = !barSearch"
          :barSearch="barSearch" />

        <!-- settingsBox -->
        <!--<SettingBox
          @showettingbox="showSettingBox = !showSettingBox"
          :showSettingBox="showSettingBox" />-->

        <SettingBox />

        <!-- Wish -->
        <router-link
          :to="{ name: 'wishlist' }"
          class="a position-relative"
          type="button">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <span v-if="totalQtyWish" class="wish">{{ totalQtyWish }}</span>
        </router-link>
        <!-- Cart -->
        <a
          class="a position-relative"
          type="button"
          @click="showCartFixed = true">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span v-if="totalQty" class="cart position-absolute">{{
            totalQty
          }}</span>
        </a>
        <!-- User -->
        <!-- start drop down menu -->

        <DropProfile />
        <!-- end drop down menu -->
      </div>
      <!-- Show navbar responsive -->
      <label
        for=""
        class="checkbtn"
        @click="showNavbaResponsive = !showNavbaResponsive">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </label>
    </div>
  </nav>
  <!-- start navbar responsive -->
  <div class="navbar-responsive" :class="{ active: showNavbaResponsive }">
    <div class="closemmn" @click="showNavbaResponsive = !showNavbaResponsive">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </div>
    <div>
      <LinkNavbar />
    </div>
  </div>
  <!--<div @click="(showNavbaResponsive = !showNavbaResponsive)" :class="{ 'modalOverly' : showNavbaResponsive }"></div>-->
  <div
    @click="barSearch = !barSearch"
    :class="{ modalOverly: barSearch }"></div>
  <!--<div @click="(showSettingBox = !showSettingBox)" :class="{ 'modalOverly' : showSettingBox }"></div>-->
  <div
    @click="showCartFixed = !showCartFixed"
    :class="{ modalOverly: showCartFixed }"></div>
  <!--<div @click="dropdownProfile = !dropdownProfile" :class="{ 'modalOverly' : dropdownProfile }"></div>-->
  <!-- end navbar responsive -->

  <!-- Side Navbar -->
  <SideNavbar
    @closecartfixedd="showCartFixed = false"
    :showcartfixed="showCartFixed" />

  <!-- end navbar -->
</template>

<script>
import { mapGetters } from "vuex";
import SideNavbar from "./SideNavbar.vue";
import LinkNavbar from "./LinkNavbar.vue";
import BarSearchNavbar from "./BarSearchNavbar.vue";
import SettingBox from "./SettingBox.vue";
import DropProfile from "./DropProfile.vue";
export default {
  components: {
    SideNavbar,
    LinkNavbar,
    BarSearchNavbar,
    SettingBox,
    DropProfile,
  },
  data() {
    return {
      barSearch: false,
      showNavbaResponsive: false,
      showCartFixed: false,
      //showSettingBox: false,
    };
  },
  methods: {},
  mounted() {
    this.$store.state.carousel.HeightNavbar = this.$refs.navbar.clientHeight;
  },
  computed: {
    ...mapGetters({
      cart: "cart",
      wish: "wish",
    }),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
    totalQtyWish() {
      return this.wish.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style>
.navbar .dropdown-menu-profile.dropdown-menu-profile-hide {
  bottom: 60px;
  opacity: 0;
}
.navbar .dropdown-menu-profile.dropdown-menu-profile-show {
  bottom: -148px;
  opacity: 1;
}
.navbar .dropdown-itemm span,
.navbar .dropdown-item-logout span {
  font-size: 13px;
  font-family: revert;
}
.navbar {
  font-family: "Roboto Condensed", sans-serif;
}
.navbar .navbar-brand.router-link-active {
  border-bottom: none;
}
.navbar .nav-link {
  transition: 5s;
}
.navbar .nav-link.router-link-active {
  border-bottom: 2px solid #2196f3;
}
.navbar .navbar-brand {
  margin-right: 110px;
}
.navbar .navbar-brand img {
  height: 25px;
}
.navbar .collapse .nav-link {
  font-weight: 600;
}

.navbar .icons-col .a {
  color: var(--black);
  display: inline-block;
  text-align: center;
  padding: 0 9px;
}
.navbar .icons-col button {
  background: none;
  border: none;
}
.navbar .icons-col a .cart {
  background: #f46a6a;
  color: white;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  line-height: 17px;
  right: -8px;
  top: -5px;
  font-size: 11px;
}
.navbar .icons-col a .wish {
  position: absolute;
  background: #f46a6a;
  color: white;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  line-height: 17px;
  right: -8px;
  top: -5px;
  font-size: 11px;
}
.navbar .navbar-nav a {
  position: relative;
  color: black;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;
  line-height: 40px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.navbar .navbar-nav a span {
  position: absolute;
  top: -10px;
  left: 55%;
  font-size: 8px;
  background-color: green;
  display: inline-block;
  padding: 3px 4px;
  vertical-align: middle;
  color: white;
  line-height: 1;
  z-index: 4;
}
.navbar .navbar-nav a span::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 5px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid green;
  top: 7px;
  left: 3px;
}
.navbar .search-popup {
  width: 100%;
  padding: 40px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  text-align: left;
  opacity: 0;
  transform: translateY(-100%);
  transition: 0.2s;
}
.navbar .search-popup button {
  background: none;
  border: none;
}
.navbar .search-popup .closeSearch {
  position: absolute;
  color: black;
  font-size: 17px;
  top: 10px;
  right: 20px;
}
.navbar .search-popup h4 {
  font-weight: 800;
  color: black;
  font-size: 16px;
}
.navbar .input-group .form-control {
  border-left: 0;
  border-right: 0;
  border-radius: 0;
}
.navbar .input-group .form-control::placeholder {
  font-size: 12px;
}
.navbar .search-popup.search-popup-none {
  opacity: 1;
  transform: translateY(0);
}
.navbar .a img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #00000021;
  padding: 3px;
}

.navbar .fa-angle-down {
  margin-left: 5px;
}
.navbar .checkbtn {
  display: none;
  cursor: pointer;
}
/* end navbar */

/* Navbar Responsive */

.navbar-responsive {
  display: flex;
  position: fixed;
  z-index: 999;
  background: #ffffff;
  height: 100%;
  justify-content: left;
  top: 0;
  left: -419px;
  transition: all 1s ease-in-out;
  font-family: "Poppins", sans-serif;
}
.navbar-responsive .closemmn {
  color: #73d0f3;
  background-color: #fff;
  position: absolute;
  top: 15px;
  right: -27px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  /* box-shadow: 0 0 5px #00000080; */
  font-size: 34px;
  border-radius: 50%;
}

.navbar-responsive .navbar-brand {
  margin-right: 110px;
}

.navbar-responsive .navbar-nav {
  width: 215px;
  padding: 10px;
}
.navbar-responsive .collapse .nav-link {
  font-weight: 600;
  text-transform: capitalize;
  transition: 0.5s;
}
.navbar-responsive .collapse .nav-link:hover {
  background: #75d0f3;
  color: black;
}
.navbar-responsive .icons-col a {
  position: relative;
  color: black;
  display: inherit;
  font-size: 25px;
}
.navbar-responsive .icons-col button {
  background: none;
  border: none;
  font-size: 23px;
}
.navbar-responsive .icons-col a .cart {
  position: absolute;
  background: black;
  color: white;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  line-height: 17px;
  right: 40px;
  top: 0px;
  font-size: 11px;
}
.navbar-responsive .navbar-nav a {
  position: relative;
  color: black;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;
  line-height: 40px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin-left: 12px;
}
.navbar-responsive .navbar-nav a span {
  position: absolute;
  top: -10px;
  left: 55%;
  font-size: 8px;
  background-color: green;
  display: inline-block;
  padding: 3px 4px;
  vertical-align: middle;
  color: white;
  line-height: 1;
  z-index: 4;
}
.navbar-responsive .navbar-nav a span::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 5px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid green;
  top: 7px;
  left: 3px;
}
.navbar-responsive .search-popup {
  width: 100%;
  padding: 40px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  text-align: left;
  opacity: 0;
  display: none;
  transform: translateY(100%);
}
.navbar-responsive .search-popup button {
  background: none;
  border: none;
}
.navbar-responsive .search-popup .closeSearch {
  position: absolute;
  color: black;
  font-size: 17px;
  top: 10px;
  right: 20px;
}
.navbar-responsive .search-popup h4 {
  font-weight: 800;
  color: black;
  font-size: 16px;
}
.navbar-responsive .input-group .form-control {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 1px solid #eeeeee;
}
.navbar-responsive .input-group .btn {
  border: none;
}
.navbar-responsive .input-group .form-control::placeholder {
  font-size: 12px;
}
.navbar-responsive .search-popup-none {
  opacity: 1;
  display: block;
  transform: translateY(0);
}

/* start media */
@media (max-width: 983px) {
  .navbar .navbar-brand {
    margin: initial;
  }
  .navbar .checkbtn {
    display: block;
  }
  .navbar-responsive.active {
    left: 0;
  }
}
@media (max-width: 390px) {
  .navbar .navbar-brand img {
    height: 24px;
  }
}
/* end media */
</style>
