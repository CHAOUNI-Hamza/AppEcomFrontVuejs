<template>
  <div>
    <!-- start Home -->

    <!-- bar notification -->
    <BarNotification />
    <!-- navbar -->
    <Navbar />
    <!-- carousel -->
    <Carousel
      @heightNavbar="heightNavbar($event)"
      @heightBarMessage="heightBarMessage($event)" />
    <!-- content-indent -->
    <ContentIndent />
    <!-- shopify-section -->
    <ShopifySectionTemplate />
    <!-- shopify-section -->
    <ShopifySection />
    <!-- logo bar -->
    <LogoBar />
    <!-- LatestBlog -->
    <LatestBlog />
    <!-- section cover -->
    <SectionCover />
    <!-- footer -->
    <Footer />
    <!-- ScrollTop -->
    <ScrollTop />
    <!-- ModalLogin -->
    <ModalLogin />

    <!-- end Home -->
  </div>
</template>
<script>
import Carousel from "../components/FrontEnd/Carousel.vue";
import ContentIndent from "../components/FrontEnd/ContentIndent.vue";
import ShopifySection from "../components/FrontEnd/ShopifySection.vue";
import SectionCover from "../components/FrontEnd/SectionCover.vue";
import ShopifySectionTemplate from "../components/FrontEnd/ShopifySectionTemplate.vue";
import LogoBar from "../components/FrontEnd/LogoBar.vue";
import LatestBlog from "../components/FrontEnd/LatestBlog.vue";

export default {
  name: "Home",
  props: {},
  components: {
    Carousel,
    ContentIndent,
    ShopifySection,
    SectionCover,
    ShopifySectionTemplate,
    LogoBar,
    LatestBlog,
  },
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");

body {
  font-family: "Poppins";
}

/* start shopify-section */
.shopify-section .title h3 {
  font-weight: 600;
}
.card {
  position: relative;
  overflow: hidden;
  padding: 0 10px 0 0;
  border: none !important;
}
.card .img-wrap {
  position: relative;
  overflow: hidden;
}
.card .img-wrap .img {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 360px;
  transition: 0.2s;
}
.card .img-wrap .img:hover {
  opacity: 0.7;
}
.card .img-wrap .img-one {
  background-image: url(https://img.ltwebstatic.com/images3_pi/2022/09/27/166427630182d48fc22ef87cf10ba41cb2cae681d6_thumbnail_405x552.webp);
}
.card .img-wrap .img-two {
  background-image: url(https://img.ltwebstatic.com/images3_pi/2022/10/08/1665214091a25709083f0053c7745613b8580ff5a8_thumbnail_405x552.webp);
}
.card .img-wrap .img-three {
  background-image: url(https://img.ltwebstatic.com/images3_pi/2022/01/07/164153513212a3866c4b13a80c9f56f320e2d3fb89_thumbnail_600x.webp);
}
.card .img-wrap .img-for {
  background-image: url(https://img.ltwebstatic.com/images3_pi/2022/09/24/166401188942154588c0c99644826be2834dce1f14_thumbnail_405x552.webp);
}
.card .img-wrap .icone {
  position: absolute;
  top: 113%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}
.card:hover .img-wrap .icone {
  position: absolute;
  top: 86%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card .img-wrap .icone .faa {
  background-color: black;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  margin-left: 8px;
}
.card .img-wrap .icone .faa:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.card .details {
  margin-top: 24px;
}
.card .details p:first-child {
  color: black;
  font-size: 12px;
  text-transform: none;
  font-weight: 400;
  margin-bottom: 5px;
}
.card .details p {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
}
.card .details .etoiles .fa {
  color: #ff9800;
}

.card .details .gridSwatches {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card .details .gridSwatches li {
  overflow: hidden;
  display: inline-block;
  position: relative;
  height: 17px;
  width: 17px;
  margin: 3px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
  box-shadow: 0 0 1px 1px #ddd;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: 0.4s;
}
.card .details .gridSwatches .one {
  background-color: #f05454 !important;
}
.card .details .gridSwatches .two {
  background-color: #0aa319 !important;
}
.card .details .gridSwatches .three {
  background-color: #1c09f0 !important;
}
.card .details .gridSwatches li:hover {
  height: 19px;
  width: 19px;
  border: none;
  border-radius: 50%;
}

.template-test .grid-two,
.template-test .grid-for {
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .shopify-section .card .img-wrap .img {
    background-position: 50% 0;
    height: 200px;
  }
  .card .img-wrap .icone {
    top: 140%;
    display: flex;
  }
}
@media (max-width: 390px) {
  .shopify-section .card .img-wrap .img {
    height: 371px;
  }
  .shopify-section .card .img-wrap {
    padding: 21px;
  }
  .shopify-section-template .card .img-wrap {
    padding: 0px;
  }
  .card .details {
    padding: 6px;
  }
  .card .details p {
    font-size: 19px;
  }
  .card .details p:first-child {
    font-size: 19px;
  }
}
</style>
