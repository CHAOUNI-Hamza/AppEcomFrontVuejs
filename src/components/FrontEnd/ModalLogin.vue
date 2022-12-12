<template>
<!-- start modal login -->
<!-- Button trigger modal -->
<button v-if="!authenticated" class="button-login" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLogin">
    <i class="fa fa-user" aria-hidden="true"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="form-login">
                        <div class="title">
                            <h2>Welcome</h2>
                            <p>If you have an account with us, please log in.</p>
                        </div>

                        <!-- form login -->
                        <FormLogin />
                        
                    </div>
                </div>
                <div class="col-6 right">
                    <img  class="img-class" width="100%" height="100%" src="https://img.freepik.com/free-photo/smiling-attractive-woman-stylish-colorful-outfit-jumping-with-shopping-bags-pink-yellow-background-polo-neck-striped-mini-skirt-shopaholic-sale-fashion-summer-trend_285396-2421.jpg?w=2000" alt="">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLogin" class="close" href="">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end modal login -->
</template>

<script>
import FormLogin from './FormLogin.vue'
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
    font-family: 'Roboto Condensed', sans-serif;
}
.modal .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px 12px;
    color: black;
    transition: .2s;
}
.modal .close:hover {
    color: rgb(60, 60, 60);
}
.modal .modal-content {
    border-radius: 0!important;
    top: 100px!important;
}
.modal .right {
    padding-left: 0!important;
    padding-right: 0!important;
    position: relative!important;
}
.modal .link-forgot {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
}
.modal .form-check {
    padding-left: 0!important;
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
    padding: 0!important;
}
.modal .title p {
    margin: 6px 0 30px 0;
    font-size: 13px;
}
.modal .form-control::placeholder {
    color: rgb(165, 162, 162)!important;
}

.modal .form-control {
    font-size: 13px!important;
    padding: 12px 20px!important;
    border-radius: 0!important;
    border: 1px solid #cdcdcd!important;
}
.modal .btn {
    background: black!important;
    color: white!important;
    font-weight: 600!important;
    width: 100%!important;
    border-radius: 0!important;
    font-size: 14px!important;
    border: none!important;
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
    transition: .2s;
    z-index: 2000;
}
.button-login:hover {
    bottom: 40px;
}
.button-login.showscroll {
    bottom: 30px;
}
.img-class {
    width: 100%!important;
    height: 100%!important;
}
/* end button modal */
/* start media */
@media (min-width: 576px) {
.modal .modal-dialog {
    max-width: 625px!important;
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
</style>



