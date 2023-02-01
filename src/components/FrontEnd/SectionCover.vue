<template>
  <!-- start section Cover -->
  <div class="section-cover">
    <div class="container">
      <div class="row">
        <div
          v-for="item in listsSectionCover"
          :key="item.id"
          class="col-md-4 col-sm-4 col-xs-12 text-center">
          <a type="button">
            <i :class="item.classIcone" aria-hidden="true"></i>
            <div class="text">
              <h5>{{ item.title }}</h5>
              <p>{{ item.para }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- end section Cover -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listsSectionCover: [
        {
          title: "FREE SHIPPING",
          para: "Free shipping on all US orders",
          classIcone: "fa fa-car",
        },
        {
          title: "MONEY GAURNTEE",
          para: "30 days money back guarantee",
          classIcone: "fa fa-money",
        },
        {
          title: "ONLINE SUPPORT",
          para: "We support online 24/7 on day",
          classIcone: "fa fa-phone",
        },
      ],
    };
  },
};
</script>

<style>
/* start section-cover */
.section-cover {
  background-color: black;
  padding: 20px 0;
  font-family: "Roboto Condensed", sans-serif;
}
.section-cover a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: inherit !important;
}
.section-cover .fa {
  font-size: 42px;
  color: white;
  margin-right: 22px;
}
.section-cover .text {
  color: white;
  align-items: center;
  margin: 0;
  padding: 0;
}
.section-cover .text h5 {
  font-size: 14px;
  font-weight: 700;
}
.section-cover .text p {
  margin: 0;
}

/* start media */
@media (max-width: 768px) {
  .section-cover a {
    display: block;
  }
  .section-cover .text {
    padding: 23px 0 0 0;
  }
}
@media (max-width: 390px) {
  .section-cover a {
    display: block;
    margin-bottom: 20px;
  }
}
/* end media */
/* end section-cover */
</style>
