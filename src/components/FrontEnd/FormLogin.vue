<template>
  <!-- start form login -->
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <input
        @blur="v$.user.email.$touch"
        :class="{ 'text-fields-error': v$.user.email.$error === true }"
        v-model="user.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email" />
    </div>
    <div class="mb-3">
      <input
        @blur="v$.user.password.$touch"
        :class="{ 'text-fields-error': v$.user.password.$error === true }"
        v-model="user.password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password" />
    </div>
    <div class="mb-3 form-check">
      <a
        class="link-forgot"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        >Forgot your password?</a
      >
    </div>
    <button type="submit" class="btn btn-primary">LOGIN</button>
  </form>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        <div class="modal-body">
          <div class="title">Forgot Your Password?</div>
          <form @submit.prevent="forgoutPassword()">
            <div class="mb-3">
              <input
                @blur="v$.forgotpassword.email.$touch"
                :class="{
                  'text-fields-error': v$.forgotpassword.email.$error === true,
                }"
                v-model="forgotpassword.email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email" />
              <div
                class="input-errors"
                v-for="error of v$.forgotpassword.email.$errors"
                :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <button class="btn" type="submit">RESET</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- end form login -->
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      v$: useVuelidate(),
      user: {
        email: "",
        password: "",
      },
      forgotpassword: {
        email: "",
      },
    };
  },
  validations() {
    return {
      user: {
        password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(30),
          $autoDirty: true,
        },
        email: {
          required,
          email,
          minLength: minLength(10),
          maxLength: maxLength(40),
          $autoDirty: true,
        },
      },
      forgotpassword: {
        email: {
          required,
          email,
          minLength: minLength(10),
          maxLength: maxLength(40),
          $autoDirty: true,
        },
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      /*this.v$.$touch();
      if (!this.v$.$invalid) {*/
      this.signIn(this.user).then(() => {
        document.querySelector(".close").click();
        this.$router.replace({ name: "dashboard" });
      });
      /*}*/
    },
    forgoutPassword() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        axios
          .post("auth/forgot-password", this.forgotpassword)
          .then((res) => {
            console.log(res);
            /*var element = document.getElementById("exampleModal");
                element.classList.remove("show");

                var elementback = document.getElementsByClassName("modal-backdrop");
                elementback.style.display = "none!important";*/
            document.querySelector(".btn-close").click();

            this.forgotpassword = {
              email: "",
            };
            this.$router.replace({ name: "login" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
};
</script>
<style scoped>
/* start MODAL */
/*.modal-content .btn-close {
    position: absolute;
    top: 16px;
    right: 20px;
    border: 1px solid #a69f9f;
    border-radius: 50%;
    padding: 11px;
    font-size: 10px;
}*/
.modal-body {
  font-family: "Roboto Condensed", sans-serif;
}
.modal .close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2px 12px;
  color: black;
  transition: 0.2s;
}
.modal .close:hover {
  color: rgb(60, 60, 60);
}
.modal .modal-content {
  border-radius: 0 !important;
  top: 100px !important;
}
.modal .right {
  padding-left: 0 !important;
  padding-right: 0 !important;
  position: relative !important;
}
.modal .link-forgot {
  color: rgba(51, 51, 51, 0.6);
  font-size: 14px;
}
.modal .form-check {
  padding-left: 0 !important;
}
.modal .form-login {
  text-align: left;
  padding: 37px 6px;
}
.modal .title h2 {
  font-size: 26px;
  margin: 0;
  font-weight: 400;
  color: #000000;
}
.modal .modal-body {
  padding: 0 !important;
}
.modal .title p {
  margin: 6px 0 30px 0;
  font-size: 13px;
}
.modal .form-control::placeholder {
  color: rgb(165, 162, 162) !important;
}

.modal .form-control {
  font-size: 13px !important;
  padding: 12px 20px !important;
  border-radius: 0 !important;
  border: 1px solid #cdcdcd !important;
}
.modal .btn {
  background: black !important;
  color: white !important;
  font-weight: 600 !important;
  width: 100% !important;
  border-radius: 0 !important;
  font-size: 14px !important;
  border: none !important;
}
/* start button login */
.button-login {
  position: fixed;
  bottom: 30px;
  left: 30px;
  transition: 1s;
  border: none;
  background: black;
  font-size: 21px;
  padding: 5px 12px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  transition: 0.2s;
  z-index: 2000;
}
.button-login:hover {
  bottom: 40px;
}
.button-login.showscroll {
  bottom: 30px;
}
.img-class {
  width: 100% !important;
  height: 100% !important;
}
/* end button modal */
/* start media */
@media (min-width: 576px) {
  .modal .modal-dialog {
    max-width: 625px !important;
  }
}
/* end media */
/* end MODAL */
.modal-body form .text-fields-error {
  border: 1px solid #ff00008f !important;
}
.modal-body form .text-fields-error::placeholder {
  color: #ff00008f !important;
}
.modal-body form .error-msg {
  color: #ff00008f;
  font-size: 13px;
  margin-top: 5px;
}
.left button {
  width: 100%;
  background-color: black;
  border-radius: 0;
  color: white;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
}

.left .Forgot-your-password a {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.link-forgot {
  color: #000000b0;
  text-decoration: none;
}
.modal-content {
  padding: 85px;
}

.modal-content .title {
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;
}
.modal-content .form-control {
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #eee;
}

.modal-content .btn {
  width: 100%;
  background: #000000;
  color: white;
  border-radius: 0;
  font-weight: bold;
}
.modal-content .btn-close {
  position: absolute;
  top: 16px;
  right: 20px;
  border: 1px solid #a69f9f;
  border-radius: 50%;
  padding: 11px;
  font-size: 10px;
  display: none;
}
</style>
