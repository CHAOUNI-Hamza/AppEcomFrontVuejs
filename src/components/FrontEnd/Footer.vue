<template>
<!-- start footer -->
    <div class="footer">
      <div class="container">
        <footer class="site-footer">
          <div class="footer-top">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-3 lign">
                <div class="footer-block">
                  <p class="footer-logo" style="font-size: 20px;">
                    <img class="logo-footer" src="@/assets/logo.png" alt="">
                  </p>
                  <div class="text">
                    <p>55 Gallaxy Enque,<br>2568 steet, 23568 NY
                    </p>
                    <p>
                      <b>Phone </b>: 06 55 72 81 55
                    </p>
                    <p>
                      <b>Email </b><a href="">: chaouni@gmail.com</a>
                    </p>
                  </div>
                  <ul class="social-icons">
                    <li>
                      <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 lign">
                <div class="footer-links">
                  <h4 @click="showInformation = !showInformation">INFORMATION v</h4>
                  <Transition>
                    <ul v-if="showInformation">
                      <li v-for="item in listsInformation" :key="item.id">
                        <router-link :to="{ 'name' : item.link }">{{ item.title }}</router-link>
                      </li>
                    </ul>
                </Transition>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 lign">
                <div class="footer-links">
                  <h4 @click="showQuickShop = !showQuickShop">QUICK SHOP v</h4>
                  <Transition>
                    <ul v-if="showQuickShop">
                      <li v-for="item in listsQuickShop" :key="item.id">
                        <router-link :to="{ 'name' : item.link }">{{ item.title }}</router-link>
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 lign">
                <div class="footer-links">
                  <h4 @click="showCustomerServices = !showCustomerServices">CUSTOMER SERVICES v</h4>
                  <Transition>
                    <ul v-if="showCustomerServices">
                      <li v-for="item in listsCustomerServices" :key="item.id">
                        <router-link :to="{ 'name' : item.link }">{{ item.title }}</router-link>
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3 lign">
                <div class="footer-newletter">
                  <h4>NEWSLETTER</h4>
                  <p>
                    Enter your email to receive daily news and get 20% off coupon for all items.
                  </p>
                  <form @submit.prevent="submit()">
                    <div class="mb-3">
                      <input 
                      :class="{ 'text-fields-error' : v$.subscribe.email.$error === true }"
                      v-model="subscribe.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"
                      >
                    </div>
                    <div class="input-errors" v-for="error of v$.subscribe.email.$errors" :key="error.$uid">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <button type="submit" class="btn">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="row justify-content-between">
              <div class="col-md-5 left">
                <p>
                  © 2022 Axi. All Rights Reserved. Ecommerce by Chaouni Designed by Hamza
                </p>
              </div>
              <div class="col-md-3 right">
                <ul>
                  <li>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB6KwAcMDUZz3BiN7DD3vNksHmhiHlwQ8Qg&usqp=CAU" alt="">
                  </li>
                  <li>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB6KwAcMDUZz3BiN7DD3vNksHmhiHlwQ8Qg&usqp=CAU" alt="">
                  </li>
                  <li>
                    <img src="https://lesalarie.ma/wp-content/uploads/2021/12/mastercard-logo-wallpapers-3-1101x570.png" alt="">
                  </li>
                  <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
<!-- end footer -->
</template>

<script>
import { mapActions } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { email, minLength, maxLength } from '@vuelidate/validators'
export default {
  components: {},
  data() {
    return {
        v$: useVuelidate(),
        listsInformation: [
          {
            title: 'About us',
            link: 'about'
          },
          {
            title: 'Contact Us',
            link: 'contact'
          },
          {
            title: 'Career',
            link: ''
          },
          {
            title: 'My Account',
            link: ''
          },
          {
            title: 'Orders and Returns',
            link: ''
          }
        ],
        listsQuickShop: [
          {
            title: 'Fashion',
            link: ''
          },
          {
            title: 'Men',
            link: ''
          },
          {
            title: 'Furniture',
            link: ''
          },
          {
            title: 'Home',
            link: ''
          },
          {
            title: 'Home Decor',
            link: ''
          },
          {
            title: 'Shoes',
            link: ''
          }
        ],
        listsCustomerServices: [
          {
            title: 'Help & FAQs',
            link: ''
          },
          {
            title: 'Returns Policy',
            link: ''
          },
          {
            title: 'Terms & Conditions',
            link: ''
          },
          {
            title: 'Privacy Policy',
            link: ''
          },
          {
            title: 'Support Center',
            link: ''
          }
        ],
        showInformation: true,
        showCustomerServices: true,
        showQuickShop: true,
        subscribe: {
          name:"subscribe",
          email: ''
        }
    }
  },
  validations () {
    return {
      subscribe: {
            email: { email, minLength: minLength(10), maxLength: maxLength(40) }
        }
    }
  },
  methods: {
      ...mapActions({
        'addSubscribe': 'subscribe/AddSubscribeAction'
      }),
      submit() {
        this.v$.$touch();
        this.addSubscribe(this.subscribe).then(() => {
        this.subscribe = 
          { 
            name:'subscribe',
            email: ''
          }
                /*Swal.fire({
                  position: 'bottom-end',
                  icon: 'success',
                  title: 'Thank you for subscribing!',
                  showConfirmButton: false,
                  timer: 1500
                })*/
          });
      },
      footerResponsive() {
        if( window.innerWidth <= 562 ) {
          this.showInformation = false
          this.showCustomerServices = false
          this.showQuickShop = false
        }
      }
  },
  mounted() {
    this.footerResponsive()
  }
}
</script>

<style>
/* start footer */
.footer {
  font-family: 'Roboto Condensed', sans-serif;
}
.footer-bottom {
    border-top: 1px solid #00000012;
    padding: 22px 0 0;
}
.footer .logo-footer {
  width: 124px;
}
.footer-bottom p {
    font-size: 13px;
    text-align: left;
}
.footer-bottom ul {
    display: flex;
    width: 100%;
}
.footer-bottom ul li {
  list-style: none;
}
.footer-bottom ul li img{
  width: 30px;
  margin-right: 15px;
}
.footer {
    padding: 45px 0 6px;
        background-color: #fafafa
}
.footer .lign {
  /*width: 19.666667%;*/
}
.footer-newletter p {
  color: black;
  font-size: 13px;
}
.footer-newletter .form-control {
    border-radius: 0;
    background-color: white;
    font-size: 11px;
}
.footer-newletter .btn {
    border: 0;
    font-size: 11px;
    padding: 10px 15px;
    color: #fff;
    background-color: #000;
    border-radius: 0;
    font-weight: 700;
}
.footer-newletter h4 {
    color: black;
    font-size: 16px;
    font-weight: bold;
}
.footer-top {
  display: flex;
  width: 100%;
}
.footer-block, .footer-links, .footer-newletter {
  text-align: left;
  padding-left: 30px;
}
.footer-newletter h4 {
  font-size: 16px;
}
.footer-links h4 {
    color: black;
    font-size: 16px;
    font-weight: bold;
}

.footer-links ul {
  margin: 0;
    padding: 0;
}
.footer-links ul li {
    margin-bottom: 7px;
    list-style: none;
}
.footer-block  ul li a, .footer-links  ul li a, .footer-newletter ul li a {
    text-decoration: none;
    color: black;
    font-size: 13px;
}
.footer-block p {
  color: black;
  font-size: 13px;
}
.footer-block p a {
    text-decoration: none;
    color: black;
}
.footer-block img {
  width: 80%;
}
.footer-block ul {
      margin-left: -6px;
    padding: 0;
}
.footer-block ul li {
    display: inline-block;
}
.footer-block ul li a {
    text-decoration: none;
    padding: 0 7px;
    color: black;
}

/* start media */
@media (max-width: 390px) {
  .footer-links h4::before {
  content: "\f107";
    font-size: 15px;
    font-family: adorn-icons;
    float: right;
    cursor: pointer;
}
.footer-links ul {
  transition: 1s;
}
.footer-links .showul {
  opacity: 1;
    /*display: block;*/
}
.footer-links .noneul {
  opacity: 0;
    /*display: none;*/
}

.footer-links .showulnone {
    display: block;
}
.footer-links .noneulnone {
    display: none;
}
.footer-bottom p {
    font-size: 13px;
    text-align: center;
}
.footer-bottom ul {
    justify-content: center;
}
.footer-logo {
  text-align: center;
}

.footer .text {
    text-align: center;
}
.footer-block ul {
    text-align: center;
}
.footer-block p {
    margin: 7px;
}
}

@media (max-width: 390px) {
  .footer form {
    margin-bottom: 40px;
}
}

/* end media */
/* end footer */
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.footer form .text-fields-error {
    border: 1px solid #ff00008f !important;
}
.footer form .text-fields-error::placeholder {
    color: #ff00008f !important;
}
.footer form .error-msg {
    color: #ff00008f;
    font-size: 13px;
    margin-top: 5px;
}
</style>



