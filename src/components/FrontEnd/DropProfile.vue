<template>
  <div
    v-if="authenticated"
    class="a profile ml-3 position-relative"
    type="button">
    <span @click="dropProfile" v-click-outside="closeDropProfile">
      <img
        src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg"
        alt="" />
      <span class="name-user ml-5">{{ user.firstname }}</span>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </span>
    <!-- start drop down menu -->
    <ul
      class="dropdown-menu-profile text-left p-3 position-absolute list-unstyled"
      :class="{
        'dropdown-menu-profile-hide': !showDropProfile,
        'dropdown-menu-profile-show': showDropProfile,
      }">
      <li>
        <button class="dropdown-itemm d-flex">
          <span>
            <router-link :to="{ name: 'categories' }" class="link">
              <i class="fa fa-user-o me-2" aria-hidden="true"></i>
            </router-link>
          </span>
          <span> Profile </span>
        </button>
      </li>
      <li>
        <button class="dropdown-itemm d-flex">
          <span>
            <router-link :to="{ name: 'categories' }" class="link">
              <i class="fa fa-cogs me-2" aria-hidden="true"></i>
            </router-link>
          </span>
          <span>Settings</span>
        </button>
      </li>
      <li class="mt-2">
        <button class="dropdown-item-logout d-flex border-top pt-1">
          <span>
            <router-link
              @click="logOut()"
              :to="{ name: 'categories' }"
              class="link">
              <i class="fa fa-sign-out me-2" aria-hidden="true"></i>
            </router-link>
          </span>
          <span>Logout</span>
        </button>
      </li>
      <span class="triangle position-absolute bg-white"></span>
    </ul>
    <!-- end drop down menu -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      showDropProfile: false,
    };
  },
  methods: {
    dropProfile() {
      this.showDropProfile = true;
    },
    closeDropProfile() {
      this.showDropProfile = false;
    },
    ...mapActions({
      signOut: "auth/signOut",
    }),
    logOut() {
      this.signOut().then(() => this.$router.replace({ name: "Home" }));
    },
  },
  mounted() {},
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>
<style scoped>
.dropdown-menu-profile {
  background: var(--white);
  border-radius: var(--borderRaduis);
  box-shadow: var(--shadow);
  transition: 0.4s;
  z-index: 1000;
}
.fa {
  width: 17px;
  color: var(--colorSmallText);
}
.dropdown-menu-profile .dropdown-itemm span,
.dropdown-menu-profile .dropdown-item-logout {
  color: var(--colorSmallText);
}
.triangle {
  transform: rotate(45deg);
  top: -5px;
  width: 10%;
  height: 10%;
  left: 18px;
}
.a.profile {
  text-decoration: none;
}
.profile .name-user {
  font-size: 13px;
  margin-left: 10px;
  color: var(--colorSmallText);
}
</style>
