<template>
<div class="container text-center admin-login">
    <div class="row align-items-center justify-content-center">
        <div class="col-md-8 text-center login">
            <div class="container text-center">
                <div class="row">
                    <div class="col-6 text-center">
                        <div class="content">hhh</div>
                        
                    </div>
                    <div class="col-6 text-center">
                        <div class="form-login">
                            <img class="logo-form" src="@/assets/logo.png" alt="">
                            <h3>Admin Login</h3>
                        <p class="des-title">Something to remember by - Idioms by The Free Dictionary</p>
                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                                    <i class="fa fa-bandcamp" aria-hidden="true"></i>
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    <i class="fa fa-bandcamp" aria-hidden="true"></i>
                                </div>
                                <div class="forgout-password">
                                    <span>Remember by</span>
                                    <span>
                                        <a href="">forgot password</a>
                                    </span>
                                </div>
                                <button type="submit" class="btn-login">Login</button>
                                <button type="submit" class="btn-google">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="">
                                    Sign in - Google Accounts
                                </button>
                                </form>

                            <p class="sign-up">Sign in - Google Accounts<a href="">SignUp</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>



export default {
  components: {

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

<style scoped>
form {
    margin-top: 49px;
}
.sign-up {
    margin-top: 111px;
}
.sign-up a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-left: 15px;
}
.mb-3 {
    position: relative;
}
.mb-3 .fa {
     position: absolute;
    bottom: 13px;
    right: 17px;
}
h3 {
    margin-top: 20px;
    font-weight: bold;
    margin-top: 27px;
}
.des-title {
    font-size: 11px;
}
.admin-login {
    margin-top: 50px;
}
.forgout-password {
    display: flex;
    justify-content: space-between;
}
.forgout-password span a {
    text-decoration: none;
}
.content {
    height: 100%;
    background: #2196f3;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
}
.col-6 {
    padding: 0!important;
}

.form-login {
    height: 100%;
    padding: 28px;
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
}
.login {
    padding: 20px;
    
    padding: 0!important;
}
.btn-login {
    width: 100%;
    background: #2196f3;
    border-radius: 0;
    border: 0;
    padding: 9px;
    color: white;
    margin-top: 50px;
}
.btn-google {
    width: 100%;
    background: #ffffff;
    border-radius: 0;
    border: 1px solid #eee;
    padding: 9px;
    color: rgb(0, 0, 0);
    margin-top: 9px;
}

.btn-google img {
    width: 15px;
    margin-right: 6px;
}
.form-control {
    border: 1px solid #ced4da73!important;
    background: #eeeeee8f!important;
    padding: 9px!important;
}
</style>



