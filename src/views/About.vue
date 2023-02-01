<template>
  <!-- start about -->

  <!--  bar notification -->
  <BarNotification />

  <!-- start navbar -->
  <Navbar />

  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12 about-top">
          <div class="title">
            STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK
          </div>
          <p>ANAIS COULON / CEO</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 about-bottom left">
          <div class="img-wrap img-left">
            <div class="img"></div>
          </div>
          <div class="info-left">
            <p><b>ADDRESS</b><br />1800 Abbot Kinney Blvd. Unit D & E Venice</p>
            <p>
              <b>PHONE</b><br />
              Mobile : 06 00 00 00 00 <br />
              Hotline : 1800 - 1102
            </p>
            <p><b>Email</b><br />chaounihamza19@gmail.com</p>
            <div class="social">
              <p><b>SOCIAL</b></p>
              <ul>
                <li>
                  <a href="" class="facebook"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="" class="twitter"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="" class="instagram"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="" class="youtube-play"
                    ><i class="fa fa-youtube-play" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 about-bottom right">
          <div class="info-right">
            <div>
              <b>OUR STORY</b>
            </div>
            <div class="text-right">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit
              qui in ea voluptate vele quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat consequatur, vel illum qui dolorem
              eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate
              verit qui in ea voluptate vele quam
            </div>
          </div>
          <div class="img-wrap img-right">
            <div class="img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />

  <!-- ScrollTop -->
  <ScrollTop />

  <!-- ModalLogin -->
  <ModalLogin />

  <!-- end about -->
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.about {
  padding: 60px 0;
  font-family: "Roboto Condensed", sans-serif;
}
.about .about-top .title {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 30px;
  color: black;
}
.about .about-top p {
  font-size: 14px;
  font-weight: 600;
}
.about .about-bottom {
  padding-top: 40px;
}
.about .about-bottom .img-wrap {
  height: 0px;
  padding-bottom: 131.915%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.about .about-bottom .img-left {
  background-image: url(https://cdn.shopify.com/s/files/1/0985/4524/files/12-about-us-v2_540x_acc06411-29a4-40a5-be4f-120fa441d815_540x.jpg?v=1642476442);
}
.about .about-bottom .img-right {
  background-image: url(https://cdn.shopify.com/s/files/1/0985/4524/files/12-about-us-v12_540x_172bc3b6-0aaf-42ed-aebe-0e0c6d7cde23_540x.jpg?v=1642476470);
  margin-top: 65px;
}
.about .about-bottom .info-left {
  padding-top: 55px;
}
.about .about-bottom .info-left p {
  text-align: left;
}
.about .about-bottom .info-left .social ul {
  list-style: none;
  display: flex;
}
.about .about-bottom .info-left .social {
  display: flex;
}
/*.about .about-bottom .info-left .social ul li a {
  margin-right: 5px;
  color: white;
  padding: 5px 8px;
  font-size: 12px;
}*/
.about .about-bottom .info-left .social ul li .facebook,
.about .about-bottom .info-left .social ul li .twitter,
.about .about-bottom .info-left .social ul li .instagram,
.about .about-bottom .info-left .social ul li .youtube-play {
  color: #000000a8;
  margin-right: 6px;
}
/*.about .about-bottom .info-left .social ul li .twitter {
  background-color: #1da1f3;
}
.about .about-bottom .info-left .social ul li .instagram {
  background-color: #517ea3;
}
.about .about-bottom .info-left .social ul li .youtube-play {
  background-color: #ff0000;
}*/
.about .about-bottom .info-right {
  padding-top: 55px;
  padding-left: 100px;
}
.about .text-right {
  text-align: justify;
}
@media (max-width: 390px) {
  .about .about-bottom .info-left .social {
    justify-content: center;
  }
  .about .about-bottom .info-left p {
    text-align: center;
  }
  .about .about-bottom .info-right {
    padding-left: 0;
    padding: 31px;
  }
}
</style>
