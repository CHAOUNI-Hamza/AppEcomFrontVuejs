<template>
<!-- start navbar -->
    <nav class="navbar navbar-expand-lg bg-light" ref="navbar">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand" >
          <img src="@/assets/logo.png" alt="">
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <LinkNavbar/>
        </div>
        <div class="icons-col">
          
          <!-- Search -->
          <BarSearchNavbar @showCloseBarSearch="(barSearch = !barSearch)" :barSearch="barSearch" />
              
          <!-- settingsBox -->
          <SettingBox @showettingbox="(showSettingBox = !showSettingBox)" :showSettingBox="showSettingBox" />
              
          <!-- Wish -->
              <router-link :to="{ name: 'wishlist' }" class="a" type="button">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <span v-if="totalQtyWish" class="wish">{{ totalQtyWish }}</span>
              </router-link>
          <!-- Cart -->
              <a class="a" type="button" @click="(showCartFixed = true)" >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span v-if="totalQty" class="cart">{{ totalQty }}</span>
              </a>
          <!-- User -->
              <div v-if="authenticated" class="a profile" type="button">
                <span @click="dropdownProfile = !dropdownProfile">
                  <img src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="">
                  <span class="name-user">{{ user.firstname }}</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                <!-- start drop down menu -->
                <ul class="dropdown-menu-profile text-left" :class="{ 'dropdown-menu-profile-hide' : !dropdownProfile, 'dropdown-menu-profile-show' : dropdownProfile }">
                  <li>
                    <button class="dropdown-itemm">
                      <span>
                        <router-link :to="{name: 'categories'}" class="link">
                        <i class="fa fa-user-o me-2" aria-hidden="true"></i>
                        Profile
                        </router-link>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-itemm">
                      <span>
                        <router-link :to="{name: 'categories'}" class="link">
                        <i class="fa fa-cogs me-2" aria-hidden="true"></i>
                        Settings
                        </router-link>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item-logout">
                      <span>
                        <router-link @click="logOut()" :to="{name: 'categories'}" class="link">
                        <i class="fa fa-sign-out me-2" aria-hidden="true"></i>
                        Logout
                        </router-link>
                      </span>
                    </button>
                  </li>
                </ul>
                <!-- end drop down menu -->
              </div>
        </div>
        <!-- Show navbar responsive -->
        <label for="" class="checkbtn" @click="(showNavbaResponsive = !showNavbaResponsive)">
                <i class="fa fa-bars" aria-hidden="true"></i>
        </label>
      </div>
    </nav>
    <!-- start navbar responsive -->
    <div class="navbar-responsive" :class="{ 'active' : showNavbaResponsive }">
      <div class="closemmn" @click="(showNavbaResponsive = !showNavbaResponsive)">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </div>
      <div>
        <LinkNavbar/>
      </div>
    </div>
    <div @click="(showNavbaResponsive = !showNavbaResponsive)" :class="{ 'modalOverly' : showNavbaResponsive }"></div>
    <div @click="barSearch = !barSearch" :class="{ 'modalOverly' : barSearch }"></div>
    <div @click="(showSettingBox = !showSettingBox)" :class="{ 'modalOverly' : showSettingBox }"></div>
    <div @click="(showCartFixed = !showCartFixed)" :class="{ 'modalOverly' : showCartFixed }"></div>
    <div @click="dropdownProfile = !dropdownProfile" :class="{ 'modalOverly' : dropdownProfile }"></div>
    <!-- end navbar responsive -->

    <!-- Side Navbar -->
    <SideNavbar  @closecartfixedd="(showCartFixed = false)" :showcartfixed="showCartFixed"/>

<!-- end navbar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideNavbar from './SideNavbar.vue';
import LinkNavbar from './LinkNavbar.vue';
import BarSearchNavbar from './BarSearchNavbar.vue';
import SettingBox from './SettingBox.vue';
export default {
  components: {
    SideNavbar,
    LinkNavbar,
    BarSearchNavbar,
    SettingBox
  },
  data() {
    return {
        barSearch: false,
        showNavbaResponsive : false,
        showCartFixed: false,
        showSettingBox: false,
        dropdownProfile: false,
    }
  },
  methods: {
    ...mapActions({
            'signOut': 'auth/signOut'
        }),
        logOut() {
            this.signOut().then(() => this.$router.replace({ name: 'Home' }))
        }
  },
  mounted() {
    this.$store.state.carousel.HeightNavbar = this.$refs.navbar.clientHeight
  },
  computed: {
    ...mapGetters({
            'authenticated': 'auth/authenticated',
            'user': 'auth/user',
            'cart': 'cart',
            'wish': 'wish' 
        }),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
    totalQtyWish() {
      return this.wish.reduce((a, b) => a + b.qty, 0);
    },
  }
}
</script>

<style>
.dropdown-menu-profile {
    background: white;
    position: absolute;
    border-radius: 5px;
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
    list-style: none;
    padding: 5px 20px 5px 20px;
    transition: .4s;
    z-index: 1000;
}
.dropdown-item-logout {
  margin-top: 15px;
}
.dropdown-menu-profile.dropdown-menu-profile-hide {
    bottom: 60px;
    opacity: 0;
}
.dropdown-menu-profile.dropdown-menu-profile-show {
    bottom: -143px;
    opacity: 1;
}
.dropdown-itemm span, .dropdown-item-logout span {
    font-size: 13px;
    font-family: revert;
}
/* start cart-drawer */
.cart-drawer {
      width: 300px;
    height: 100%;
    background: white;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    transition: 1s;
}
.cart-drawer .fa-timess {
    color: #000;
    font-size: 20px;
    opacity: .6;
    position: absolute;
    right: 10px;
    top: 7px;
}
.cart-drawer.active {
    transform: translate(400px);
}
.cart-drawer.none {
    transform: translate(0);
}
.cart-drawer .ad-times-r {
    color: #000;
    font-size: 20px;
    opacity: .6;
    position: absolute;
    right: 10px;
    top: 7px;
}
.cart-drawer h4 {
    color: #000;
    font-size: 18px;
    text-align: left;
    margin: 10px 15px;
    font-weight: 900;
}
.cart-drawer .ad-times-r:before {
    content: "\eb41";
}
.cart-drawer .mini-products-list {
    padding: 0 15px;
    overflow-x: hidden;
    overflow-y: auto;
}

.cart-drawer .grid {
    padding: 10px 0;
    line-height: normal;
    border-top: 1px solid #eeeeeeee;
    list-style: none;
}

.cart-drawer .grid img {
    width: 100%;
    height: auto;
    display: block;
}
.cart-drawer .grid .grid__item {
  text-align: left;
}
.cart-drawer .grid .grid__item .remove {
    color: black;
    opacity: .5;
    float: right;
    padding: 7px;
    margin: -7px -7px 0 0;
}
.cart-drawer .grid .grid__item .pName {
    color: black;
    white-space: normal;
    text-decoration: none;
    line-height: 1.3;
    margin-right: 25px;
    font-size: 14px;
    text-align: left;
}
.cart-drawer .grid .grid__item .vropts {
  color: black;
    opacity: .6;
    padding: 5px 0;
    text-align: left;
}
.cart-drawer .grid .grid__item .priceRow  {
    align-items: center;
    display: flex;
}

.cart-drawer .grid .grid__item .priceRow .qtyField {
    max-width: 75px;
    margin-left: auto;
    display: flex;
    width: 100%;
    border: 1px solid #dddddd;
    border-radius: 0;
        text-align: center;
}

.cart-drawer .grid .grid__item .priceRow .qtyBtn {
    width: 25px;
    height: 25px;
    line-height: 25px;
    padding: 0;
    color: black;
    margin: 0;
    background: none;
    border-radius: 0;
        text-decoration: none;
}

.cart-drawer .grid .freeshiping {
    list-style: none;
    background: #efefef;
    padding: 10px 15px;
    margin: 18px -19px 11px -48px;
    font-size: 14px;
}
.cart-drawer .shipping-button .form-check-label {
    font-size: 13px;
    margin-top: 5px;
    width: 100%;
}
.cart-drawer .shipping-button .form-check-input {
    border-radius: 0;
}
.cart-drawer .shipping-button .checkout {
  background: #a3a0a0;
    width: 100%;
    border-radius: 0;
    color: white;
    font-weight: bold;
    font-size: 13px;
    margin-top: 10px;
}
.cart-drawer .shipping-button {
    list-style: none;
}
.cart-drawer .shipping-button p {
    font-size: 13px;
}
.cart-drawer .shipping-button .cart {
  background: #ff0000;
    width: 100%;
    border-radius: 0;
    color: white;
    font-weight: bold;
    font-size: 13px;
    margin-top: 10px;
}
.cart-drawer .subtotal {
    list-style: none;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    justify-content: space-between;
    display: flex;
    margin-bottom: 11px;
}
/* end cart-drawer */
/* start navbar */
.navbar {
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
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
  text-transform: capitalize;
}
.navbar .icons-col .settingsBox {
    position: absolute;
    width: 300px;
    z-index: 999;
    background: white;
    right: 76px;
    font-size: 13px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
    padding: 15px;
    transition: .2s;
}
.navbar .icons-col .settingsBox.show-setting-box {
    top: 100%;
    opacity: 1;
}
.navbar .icons-col .settingsBox.none-setting-box {
    top: 140%;
    opacity: 0;
}
.navbar .icons-col .settingsBox .customer-links .btn {
    background: black;
    border-radius: 0;
    color: white;
    font-weight: bold;
    width: 100%;
    font-size: 14px;
}
.navbar .icons-col .settingsBox .customer-links .register-now {
  color: black;
}
.navbar .icons-col .settingsBox .customer-links .user-now {
  color: black;
  letter-spacing: 1px;
}
.navbar .icons-col .settingsBox .picker {
    text-align: left;
}
.navbar .icons-col .settingsBox .picker .title {
    display: block;
    margin: 20px 0 10px;
    letter-spacing: 1.2px;
    color: black;
    font-weight: 600;
}
.navbar .icons-col .settingsBox .picker ul {
  display: block;
  padding: 0;
}
.navbar .icons-col .settingsBox .picker ul li {
  list-style: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 0px 9px;
    margin: 0 9px 4px 0;
    display: inline-block;
}
.navbar .icons-col .settingsBox .picker ul li:hover {
    border: 1px solid rgb(255, 1, 1);
}
.navbar .icons-col .settingsBox .picker ul li a {
    text-decoration: none;
    color: black;
}
.navbar .icons-col .settingsBox .picker ul li:hover a {
    color: rgb(255, 0, 0);
}
.navbar .icons-col .settingsBox .picker ul li.back {
    border: 1px solid rgb(255, 1, 1);
}
.navbar .icons-col .settingsBox .picker ul li a.back {
    color: rgb(255, 0, 0);
}
.navbar .icons-col .a {
    position: relative;
    color: black;
    display: inline-block;
    text-align: center;
    padding: 0 9px;
}
.navbar .icons-col button {
    background: none;
    border: none;
}
.navbar .icons-col a .cart {
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
    transition: .2s;
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
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    border-bottom: 1px solid #eeeeee;
}
.navbar .input-group .btn {
  border: none;
}
.navbar .input-group .form-control::placeholder {
  font-size: 12px;
}
.navbar .search-popup.search-popup-none {
  opacity: 1;
  transform: translateY(0);
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
        font-family: 'Poppins', sans-serif;
}
.closemmn {
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
    display: none;;
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
.navbar .a img {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    background-color: #00000021;
    padding: 3px;
}
.navbar .a.profile {
  margin-left: 10px;
  text-decoration: none;
  position: relative;
}
.navbar .profile .name-user {
    font-size: 13px;
    margin-left: 7px;
    color: #000000c2;
}
.fa-angle-down {
  margin-left: 5px;
}

.checkbtn {
  display: none;
  cursor: pointer;
}
.modalOverly {
  position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 666;
    background-color: #0009;
    transition: all .4s cubic-bezier(.29,.63,.44,1);
}
/* start media */
@media (max-width: 983px) {
  .checkbtn {
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



