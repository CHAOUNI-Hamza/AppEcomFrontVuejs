<template>
<!-- start Navbar -->

<!-- bar notification -->
<BarNotification />
<!-- navbar -->
<Navbar />

<div class="container">
    <div class="login">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="title">My Account</div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="left">
                    <div class="title-form">Login</div>
                    <p>If you have an account with us, please log in.</p>
                    
                    <!-- form login -->
                    <FormLogin />
                </div>
            </div>
            <div class="col-md-5">
                <div class="right">
                    <div class="title-form">NEW CUSTOMER?</div>
                    <p class="p-right">Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
                    <router-link :to="{name: 'register'}" class="btn">CREATE AN ACCOUNT</router-link>
                </div>
            </div>
        </div>
    </div>
</div> 

<!-- footer -->
<Footer />
<!-- ScrollTop -->
<ScrollTop />

<!-- end Navbar -->
</template>

<script>
import FormLogin from '../components/FrontEnd/FormLogin.vue'
export default {
  components: {
    FormLogin
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
/* start login */
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
}


.login {
    padding: 51px 0;
    font-family: 'Roboto Condensed', sans-serif;
}
.login .title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 33px;
}
.login .left {
    border: 1px solid #00000024;
    padding: 49px;
    height: 373px;
}
.login .left .form-control {
    border-radius: 0;
    font-size: 12px;
    padding: 9px 19px;
}

.login .left .title-form {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
}
.login .left p {
    font-size: 12px;
}

.login .left button {
    width: 100%;
    background-color: black;
    border-radius: 0;
    color: white;
    font-size: 12px;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
}

.login .left .Forgot-your-password a {
    text-decoration: none;
    color: black;
    font-size: 12px;
}


.login .right {
    border: 1px solid #00000024;
    padding: 49px;
    height: 373px;
}
.login .right .title-form {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
}
.login .right .p-right {
    font-size: 14px;
    text-align: justify;
        margin-top: 38px;
}
.login .right button {
    width: 100%;
    background-color: black;
    border-radius: 0;
    color: white;
    font-size: 12px;
    padding: 10px;
    margin-bottom: 10px;
}
.login .right .btn {
    width: 100%;
    background-color: black;
    border-radius: 0;
    color: white;
    font-size: 12px;
    padding: 10px;
    margin-bottom: 10px;
}

.login form .text-fields-error,
.modal form .text-fields-error {
    border: 1px solid #ff00008f !important;
}
.login form .text-fields-error::placeholder,
.modal form .text-fields-error::placeholder {
    color: #ff00008f !important;
}
.login form .error-msg,
.modal form .error-msg {
    color: #ff00008f;
    font-size: 13px;
    margin-top: 5px;
    text-align: left;
}
/* end login */
</style>



