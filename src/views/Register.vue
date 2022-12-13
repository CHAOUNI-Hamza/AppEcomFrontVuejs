<template>
<!-- start Register -->

<!-- bar notification -->
<BarNotification />
<!-- navbar -->
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

                    <!-- Form Register -->
                    <FormRegister />

                </div>
            </div>
        </div>
    </div>
</div>

<!-- footer -->
<Footer />
<!-- ScrollTop -->
<ScrollTop />
<!-- ModalLogin -->
<ModalLogin />

<!-- end Register -->
</template>

<script>
import FormRegister from '../components/FrontEnd/FormRegister.vue'
export default {
  components: {
    FormRegister
  },
  data() {
    return {
        
    }
  },
  methods: {
  },
  mounted() {
    
  }
}
</script>

<style>

.register {
    padding: 51px 0;
    font-family: 'Roboto Condensed', sans-serif;
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
.disabled {
  pointer-events: none;
}
.form-check label {
    margin-right: 320px;
    font-size: 11px;
}

.register form .text-fields-error {
    border: 1px solid #ff00008f !important;
}
.register form .text-fields-error::placeholder {
    color: #ff00008f !important;
}
.register form .error-msg {
    color: #ff00008f;
    font-size: 13px;
    margin-top: 5px;
    text-align: left;
}
/* @media */
@media (max-width: 390px) {
    .form-check label {
        margin-right: 156px;
    }
}
</style>



