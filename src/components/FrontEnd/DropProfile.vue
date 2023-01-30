<template>
  <div v-if="authenticated" class="a profile" type="button">
    <div @click="dropProfile" v-click-outside="closeDropProfile">dfsdfd</div>
    <span>
      <img
        src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg"
        alt="" />
      <span class="name-user">{{ user.firstname }}</span>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </span>
    <!-- start drop down menu -->
    <ul
      class="dropdown-menu-profile text-left pl-5 pr-5 pb-5 pt-5"
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
      <li>
        <button class="dropdown-item-logout d-flex">
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
