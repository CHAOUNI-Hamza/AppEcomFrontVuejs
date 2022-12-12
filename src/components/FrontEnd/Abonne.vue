<template>
<!-- Start Abonne -->
<div class="modal" id="exampleModal" :class="{'modalclose': showModal}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="row">
        <div class="col-md-6 left">
          <div class="content">
            <h4>NEWSLETTER</h4>
            <p>Sign up for newsletter to receive special offers and exclusive news about Minimart products</p>
            <form >
              <div class="mb-3">
                <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
              </div>
              <button type="button" class="btn">SEND</button>
            </form>
          </div>
        </div>
        <div class="col-md-6 right">
          <div class="img">
            <img src="https://cdn.shopify.com/s/files/1/0560/0254/3784/files/newsletter_fashion_830x.jpg?v=1622717159" alt="" width="100%">
          </div>
          <div class="close" >
            <button @click="showModal = true">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Abonne -->
</template>

<script>
export default {
  data() {
    return {
      showModal: false,     
    }
  }
}
</script>

<style scoped>
/* start abonne */
.modal {
    --bs-modal-width: 700px!important;
    font-family: 'Roboto Condensed', sans-serif;
}
.modal .left {
    padding: 45px 14px 43px 40px;
    display: table;
}

.modal .modal-content {
    border-radius: 0;
    border: 0;
}
.modal .left h4 {
    font-size: 26px;
    text-transform: uppercase;
    margin-bottom: 11px;
    font-weight: 700;
    color: black;
}
.modal .left p {
  margin-bottom: 25px;
      font-size: 14px;
}

.modal .left .form-control {
    border-radius: 0;
    font-size: 11px;
    padding: 10px;
}

.modal .left .btn {
    background-color: black;
    color: white;
    border-radius: 0;
    padding: 8px;
    width: 100%;
    font-size: 14px;
}
.modal .left .content {
    display: table-cell;
    vertical-align: middle;
}
.modal {
    display: block!important;
}
.modal .right {
  position: relative;
}
.modal .right .close {
    position: absolute;
    top: 7px;
    right: 25px;
    cursor: pointer;
}
.modal .modalclose {
  display: none!important;
}
.modal .right img {
    width: 100%!important;
}
/* end abonne */
</style>



