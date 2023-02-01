<template>
  <!-- start reset password -->

  <!-- bar notification -->
  <BarNotification />
  <!-- start navbar -->
  <Navbar />

  <div class="container">
    <div class="register">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="title">Create an Account</div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="left">
            <form @submit.prevent="resetpassword()">
              <div class="mb-3">
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email" />
              </div>
              <div class="mb-3">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password" />
              </div>
              <div class="mb-3">
                <input
                  v-model="user.password_confirmation"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  placeholder="password confirmation" />
              </div>
              <div class="checkbox">
                <label for=""
                  ><input type="checkbox" value="option1" /><span
                    class="checkbox-input"></span>
                  Subscribe to stay updated with new products and offers!
                </label>
              </div>
              <button type="submit" class="btn">Submite</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <Footer />
  <!-- ScrollTop -->
  <ScrollTop />

  <!-- start reset password -->
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
        password_confirmation: "",
        token: this.$route.params.token,
      },
    };
  },
  methods: {
    resetpassword() {
      axios
        .post("auth/reset-password", this.user)
        .then((res) => {
          this.$router.replace({ name: "login" });
          this.user = {
            email: "",
            password: "",
            password_confirmation: "",
          };
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style>
.register {
  padding: 51px 0;
  font-family: "Roboto Condensed", sans-serif;
}
.register .title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 33px;
}
.register .left .form-control {
  border-radius: 0;
  font-size: 12px;
  padding: 9px 19px;
}

.register .left .title-form {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}
.register .left p {
  font-size: 12px;
}

.register .left button {
  width: 100%;
  background-color: black;
  border-radius: 0;
  color: white;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 10px;
}

.register .checkbox label input {
  display: none;
}
.register .checkbox-input {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 5px 0 0;
  background: white;
  vertical-align: middle;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  border: 1px solid #00000030;
}
.register .checkbox {
  text-align: left;
  margin-bottom: 10px;
  font-size: 10px;
}
</style>
