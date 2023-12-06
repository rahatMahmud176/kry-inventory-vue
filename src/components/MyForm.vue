<template>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 mt-5">
        <div class="card">
          <div class="card-header p-3 mb-3"> <h5 class="card-title text-white mt-3 text-center my-font">Company Name Order Form</h5></div>
            <div class="card-body"> 
              <!-- No Labels Form -->
              <form class="row g-3" @submit.prevent="formHandel">

                <div class="col-md-12">
                  <input type="text" v-model="input.customerName" class="form-control" placeholder="Customer Name">
                </div>

                <div class="col-md-6">
                  <input type="email" v-model="input.email" class="form-control" placeholder="Email (optional)">
                </div>

                <div class="col-md-6">
                  <input type="text" v-model="input.phoneNumber" class="form-control" placeholder="+880">
                </div>

                <div class="col-md-6">
                  <input type="text" v-model="input.division" class="form-control" placeholder="Division">
                </div>
                <div class="col-md-6">
                  <input type="text" v-model="input.district" class="form-control" placeholder="District">
                </div>

                <div class="col-12">
                  <input type="text" v-model="input.addressLine" class="form-control" placeholder="Address Line 1">
                </div> 
              <div class="alert alert-dark bg-dark text-light border-0 alert-dismissible fade show" role="alert">
                Enter the description of the product you want to order here 
                <button type="button" class="float-end btn btn-danger"> <i class="bi bi-arrow-clockwise"></i></button>
              </div>


                <div class="col-md-6">
                  <input type="text" v-model="input.productName" class="form-control" placeholder="Product Name">
                </div>
                <div class="col-md-3">
                  <input type="text" v-model="input.color" class="form-control" placeholder="Color">
                </div>
                <div class="col-md-3">
                  <input type="text" v-model="input.variant" class="form-control" placeholder="Variant">
                </div> 
                <div class="col-md-6">
                  <input type="text" v-model="input.qty" class="form-control" placeholder="Quantity">
                </div>
                <div class="col-md-6">
                  <input type="text" v-model="input.price" class="form-control" placeholder="Price">
                </div>

                <div class="alert alert-warning bg-warnign border-0 alert-dismissible fade show" role="alert">
                Enter the description of the product you want to order here 
                <button type="button" class="float-end btn btn-danger"> <i class="bi bi-arrow-clockwise"></i></button>
              </div>
 
              <div class="col-md-4">
                  <input type="text" v-model="input.payMethod" class="form-control" placeholder="Bkash / Nagad / Name.Bank">
                </div> 

                <div class="col-md-4">
                  <input type="text" v-model="input.payNumber" class="form-control" placeholder="payment Number ">
                </div>

                 
                
                <div class="col-md-4">
                  <input type="text" v-model="input.amount" class="form-control" placeholder="Amount">
                </div>

                
                <div class="col-md-6">
                  <input type="text" v-model="input.customerAccount" class="form-control" placeholder="Customer Account">
                </div>

                <div class="col-md-6">
                  <input type="text" v-model="input.tnxId" class="form-control" placeholder="Transition ID">
                </div>

                <div class="text-end">
                  <button type="reset" class="btn btn-secondary m-2">Reset</button>

                 <button class="btn btn-primary" type="button" disabled v-if="orderPlacing">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Wait...
                 </button>

                  <button type="submit" class="btn btn-primary" v-else>Submit</button>
                </div>
              </form><!-- End No Labels Form -->

            </div>
            <div class="card-footer">
              <p class="text-center mt-3 my-font">Design and develop by Rahat Mahmud</p>
          </div>
          </div>
          
      </div>
      <div class="col-md-2 text-center  mt-5"> <router-link class="btn btn-warning" to="/dashboard"><i class="bi bi-grid"></i></router-link> </div>
    </div>
</template>

<script>

import axios from 'axios';
import {axiosPrivet} from "../my-services/axiosInstance"; 

export default {
  data : ()=>({
      input : {
          "customerName" : "Mr.",
          "email"        : "",
          "phoneNumber"  : "", 
          "division"     : "",
          "district"     : "",
          "addressLine"  : "", 
          "productName"  : "",
          "color"        : "",
          "variant"      : "",
          "qty"          : "",
          "price"        : "",
          "payMethod"    : "",
          "payNumber"    : "",
          "amount"       : "",
          "customerAccount" : "",
          "tnxId"        : ""
      },
      orderPlacing: false,
  }),

  methods:{
    formHandel(){ 
      this.orderPlacing = true;
      axiosPrivet.post('form-order-submit-by-admin',this.input)
              .then((res)=>{
                  // console.log(res);
                  toastr.success('order Place Successfully');
                  this.orderPlacing = false;
              })
              .catch((err)=>{
                  console.log(err);
                  toastr.error(err.response.data.message);
                  this.orderPlacing = false;
              }) 
    }
  }


};
</script> 
<style scoped>

@font-face {
  font-family: myFont;
  src: url('../../public/my-fonts/KdamThmorPro-Regular.ttf');
}
.card-header{
  background: #04138b;
  min-height: 130px; 
}
.card-title{
  font-size: 30px;
}
.card-footer{
  background: #04138b; 
}
.my-font{
  font-family: myFont;
}
/* .my-font, .card{
  font-family: myFont;
} */


</style>
