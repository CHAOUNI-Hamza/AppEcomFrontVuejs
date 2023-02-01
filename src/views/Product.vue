<template>
  <!-- start bar notification -->
  <BarNotification />
  <!-- start navbar -->
  <Navbar />
  <div class="container">
    <div class="product">
      <div class="row">
        <div class="col-md-6 images">
          <div class="row">
            <div class="col-md-10 col-sm-10 col-xs-10">
              <div class="img-left">
                <img
                  v-if="srcshow"
                  width="100%"
                  height="100%"
                  :src="srcshow"
                  alt="" />
                <img
                  v-if="!srcshow"
                  width="100%"
                  height="100%"
                  src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_1800x1800.jpg?v=1561438589"
                  alt="" />
              </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi1()"
                    ref="src1"
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_1800x1800.jpg?v=1561438589"
                    alt="" />
                </a>
              </div>
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi2()"
                    ref="src2"
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/pink_dbc666fa-a9ed-43d4-b105-b822c1610b70_1800x1800.jpg?v=1570425115"
                    alt="" />
                </a>
              </div>
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi3()"
                    ref="src3"
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/7_0d14becc-f97f-442d-b5c1-6446b717575b_1800x1800.jpg?v=1570425115"
                    alt="" />
                </a>
              </div>
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi4()"
                    width="100%"
                    ref="src4"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/3_c4d303b9-5213-4f36-a95a-bb7406b3d010_1800x1800.jpg?v=1559885946"
                    alt="" />
                </a>
              </div>
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi5()"
                    ref="src5"
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/0_500x.jpg?v=1603540482"
                    alt="" />
                </a>
              </div>
              <div class="img-right">
                <a type="button">
                  <img
                    @click="choi6()"
                    ref="src6"
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/13_1800x1800.jpg?v=1603540482"
                    alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 details-product">
          <h1 class="title">Women Shorts</h1>
          <div class="product-info">
            <div class="review">
              <a href="" class="review-link">
                <span class="etoile">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="name">No reviews</span>
              </a>
            </div>
            <div class="product-stock">
              <span class="instock">In Stock</span>
            </div>
            <div class="product-cku">
              <span class="sku">SKU : AV01-D-46</span>
            </div>
          </div>
          <p class="product-price">
            {{ (product.price * calculCurrency).toFixed(2) }} {{ currency }}
          </p>
          <div class="product-description">
            A little crisp, a little sunny, warm enough to skip a coat, just co
            l enough to wrap great cashmere around is this asymmetrical jumper.
            With a chic hue, this one makes for a perfect pick this fall. So get
            your basics right and you are good to go.
          </div>
          <div class="quantity-message">Hurry, Only 3 left!</div>
          <form action="">
            <!--<div class="color">
                            <label for="">COULEUR : <b>Blue</b></label>
                            <ul class="color-list">
                                <li class="color1"><a href=""><span></span></a></li>
                                <li class="color2"><a href=""><span></span></a></li>
                                <li class="color3"><a href=""><span></span></a></li>
                            </ul>
                        </div>-->
            <div class="size">
              <label for="">SIZE : <b>M</b></label>
              <ul class="size-list">
                <li class="size1">
                  <a href=""><span>M</span></a>
                </li>
                <li class="size2">
                  <a href=""><span>L</span></a>
                </li>
                <li class="size3">
                  <a href=""><span>XL</span></a>
                </li>
              </ul>
            </div>
            <div class="infolinks">
              <a
                type="button"
                @click="addItemToWish(product)"
                class="add-to-wishlist">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <span type="button" class="msg">Add to Wishlist</span>
              </a>
              <!--<a href="" class="delivery-returns">
                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                <span class="msg">Delivery & Returns</span>
                            </a>
                            <a href="" class="enquiry">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <span class="msg">Enquiry</span>
                            </a>-->
            </div>
            <div class="add-to-cart">
              <!--<div class="qtyfield">
                                <a class="qtyBtn" type="button" @click="reduceQty(product.id)">
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </a>
                                <span class="qtyBtn" >{{ product.qty }}</span>
                                <a class="qtyBtn" type="button" @click="addQty(product.id)">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </a>
                            </div>-->
              <button
                @click.once="addItemToCart(product)"
                type="button"
                class="btn">
                ADD TO CART
              </button>
            </div>
            <div class="method-pym">
              <label for=""><b>Guaranteed safe checkout :</b></label>
              <ul>
                <li>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB6KwAcMDUZz3BiN7DD3vNksHmhiHlwQ8Qg&usqp=CAU"
                    alt="" />
                </li>
                <li>
                  <img
                    src="https://lesalarie.ma/wp-content/uploads/2021/12/mastercard-logo-wallpapers-3-1101x570.png"
                    alt="" />
                </li>
                <li>
                  <img
                    src="https://lesalarie.ma/wp-content/uploads/2021/12/mastercard-logo-wallpapers-3-1101x570.png"
                    alt="" />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
                    alt="" />
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- start footer -->
  <Footer />
  <ScrollTop />
  <ModalLogin />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      barMessage: true,
      srcshow: "",
    };
  },
  methods: {
    choi1() {
      this.srcshow = this.$refs.src1.currentSrc;
    },
    choi2() {
      this.srcshow = this.$refs.src2.currentSrc;
    },
    choi3() {
      this.srcshow = this.$refs.src3.currentSrc;
    },
    choi4() {
      this.srcshow = this.$refs.src4.currentSrc;
    },
    choi5() {
      this.srcshow = this.$refs.src5.currentSrc;
    },
    choi6() {
      this.srcshow = this.$refs.src6.currentSrc;
    },
    ...mapActions({
      addItemToCart: "addItemToCart",
      addItemToWish: "addItemToWish",
      getProduct: "products/getOneProductAction",
      reduceQty: "reduceQty",
      addQty: "addQty",
    }),
  },
  mounted() {
    this.getProduct(this.$route.params.slug);
  },
  computed: {
    ...mapGetters({
      product: "products/getOneProductGetters",
      calculCurrency: "calculCurrency",
      currency: "currency",
    }),
  },
};
</script>

<style>
.product {
  font-family: "Roboto Condensed", sans-serif;
}
.product .img-right img {
  margin-bottom: 6px;
  width: 100%;
  transition: 0.2s;
}
.product .img-right img:hover {
  opacity: 0.5;
}
.product .img-left {
  height: 100%;
  overflow: hidden;
}
.product .img-left img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.product .img-left img:hover {
  scale: 1.5;
}
.product {
  padding: 60px 0;
}
.product .details-product {
  text-align: left;
}
.product .details-product .title {
  color: #111;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
}
.product .details-product .product-info {
  display: flex;
}
.product .details-product .product-info .review {
  margin-right: 20px;
}
.product .details-product .product-info .review .review-link {
  text-decoration: none;
}
.product .details-product .product-info .review .review-link .etoile .fa {
  color: #ffb503;
}

.product .details-product .product-info .review .review-link .etoile {
  margin-right: 10px;
}
.product .details-product .product-info .product-stock {
  margin-right: 20px;
}
.product .details-product .product-info .product-cku {
  margin-right: 20px;
}
.product .details-product .product-info .instock {
  color: #76bd1c;
  font-size: 13px;
}
.product .details-product .product-info .sku {
  color: #444444b3;
  font-size: 13px;
}
.product .details-product .product-info .review-link .name {
  color: #444444b3;
  font-size: 13px;
  transition: 0.3s;
}
.product .details-product .product-info .review-link:hover .name {
  color: #444444;
  border-bottom: 1px solid black;
}

.product .details-product .product-price {
  color: black;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}
.product .details-product .product-description {
  font-size: 12px;
  text-align: justify;
  margin-bottom: 15px;
}

.product .details-product .quantity-message {
  background: #ff6e6e;
  color: white;
  display: inline-block;
  padding: 1px 10px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
}

.product form .color label {
  font-size: 14px;
}
.product form .color .color1 {
  background-color: red;
}
.product form .color .color2 {
  background-color: rgb(10, 250, 94);
}
.product form .color .color3 {
  background-color: rgb(0, 51, 255);
}
.product form .color li {
  overflow: hidden;
  display: inline-block;
  position: relative;
  height: 30px;
  width: 30px;
  margin: 3px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
  box-shadow: 0 0 1px 1px #ddd;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: 0.4s;
}

.product form .size label {
  font-size: 14px;
  margin-bottom: 9px;
}
.product form .size .size-list {
  display: flex;
}

.product form .size .size-list li {
  width: 30px;
  border: 1px solid #00000054;
  height: 30px;
  margin-right: 5px;
}
.product form .size .size-list a {
  text-decoration: none;
  padding: 5px 8px;
  color: #000000c2;
  margin-right: 8px;
}
.product form .size .size-list a span {
  font-size: 11px;
}

.product form .infolinks a {
  text-decoration: none;
  color: black;
  font-size: 13px;
  margin-right: 19px;
}
.product form .infolinks a .fa {
  margin-right: 6px;
}
.product form .infolinks {
  margin-bottom: 9px;
}
.product form .add-to-cart {
  display: flex;
}

.product .add-to-cart .input-qty {
  margin: 0;
  color: #000;
  width: 28px;
  height: 38px;
  line-height: normal;
  text-align: center;
  padding: 11px 0;
  background: none;
  /* border-radius: 0; */
  border: none;
}

.product .add-to-cart .qtybtn {
  margin: 0;
  color: #000;
  width: 28px;
  height: 38px;
  line-height: normal;
  text-align: center;
  padding: 11px 0;
  background: none;
  border-radius: 0;
}

.product .add-to-cart .qtyfield {
  display: flex;
  /* width: 100%; */
  border: 1px solid #dddddd;
  border-radius: 0;
  padding: 0 9px;
  align-items: center;
}

.product .add-to-cart .qtyfield .qtyBtn {
  color: black;
  font-size: 11px;
}

.product .add-to-cart .btn {
  background: black;
  border-radius: 0;
  color: white;
  font-size: 12px;
  width: 100%;
  margin-left: 8px;
}
.product .method-pym {
  margin-top: 16px;
}
.product .method-pym ul {
  display: flex;
  width: 100%;
  padding: 0;
  margin-top: 10px;
}
.product .method-pym ul li {
  list-style: none;
}
.product .method-pym ul li img {
  width: 40px;
  margin-right: 15px;
}

/* start media */
@media (max-width: 390px) {
  .product .img-left {
    display: none;
  }
  .product .img-right {
    padding: 26px;
  }
  .product .details-product {
    text-align: center;
  }
  .product .colors {
    text-align: center;
  }
  .product .details-product .product-info {
    justify-content: center;
  }
  .product form .size .size-list {
    justify-content: center;
  }
}
/* end media */
</style>
