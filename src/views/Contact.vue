<template>
  <!-- start Contact -->
  <!-- start bar notification -->
  <BarNotification />
  <!-- start navbar -->
  <Navbar />
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-8" style="text-align: left">
          <div class="col-md-12 text-center">
            <div class="title">
              <h4>Contact Us</h4>
              <p>
                Get in touch and let us know how we can help. Have a question
                but aren’t sure who to contact? Get in touch and a member of our
                team will reach out to you.
              </p>
            </div>
          </div>

          <!-- FormContact -->
          <FormContact />
        </div>
        <div class="col-md-4">
          <div class="info-block">
            <div class="text">
              <p>
                <b>ADDRESS: </b>55 Gallaxy Enque, 2568 steet,<br />
                23568 NY
              </p>
              <p><b>Phone </b>: 06 55 72 81 55</p>
              <p><b>Email </b><a href="">: chaouni@gmail.com</a></p>

              <hr />

              <p>
                <b>Opening Hous</b>
              </p>
              <p>
                Mon - Sat : 9am - 11pm <br />
                Sunday:11am - 5pm
              </p>

              <hr />

              <p>Stay Connected</p>
            </div>
            <ul class="social-icons">
              <li>
                <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""
                  ><i class="fa fa-pinterest-p" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href=""
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ScrollTop -->
  <ScrollTop />
  <!-- Footer -->
  <Footer />
  <!-- ModalLogin -->
  <ModalLogin />

  <!-- end Contact -->
</template>

<script>
import FormContact from "../components/FrontEnd/FormContact.vue";
export default {
  components: {
    FormContact,
  },
  data() {
    return {};
  },
};
</script>

<style>
.contact {
  padding: 34px 0;
  font-family: "Roboto Condensed", sans-serif;
}

.contact .title h4 {
  font-weight: 700;
}
.contact .title p {
  font-size: 14px;
}
.contact form .form-control {
  border-radius: 0;
  font-size: 12px;
  padding: 9px 0 9px 17px;
}
.contact form .btn {
  background: black;
  border: 0;
  border-radius: 0;
  font-size: 11px;
  padding: 9px 20px;
  font-weight: 700;
}
.contact .info-block {
  text-align: left;
  background: #f8f8f8;
  padding: 30px;
}
.contact .info-block p {
  color: black;
  font-size: 13px;
}
.contact .info-block p a {
  text-decoration: none;
  color: black;
}
.contact .info-block ul {
  display: flex;
  list-style: none;
  margin-left: -41px;
}
.contact .info-block ul li {
  margin-left: 11px;
}
.contact .info-block ul li .fa {
  color: black;
}
.contact .info-block hr {
  margin: 2rem 0;
  opacity: 0.1;
}
@media (max-width: 390px) {
  .contact form .btn {
    width: 100%;
  }
}

.contact form .text-fields-error {
  border: 1px solid #ff00008f !important;
}
.contact form .text-fields-error::placeholder {
  color: #ff00008f !important;
}
.contact form .error-msg {
  color: #ff00008f;
  font-size: 13px;
  margin-top: 5px;
}
</style>
