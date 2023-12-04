<template>
     <main id="main" class="main">


      
<div class="text-center" v-if="gettingInfo">
  <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> 
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div><!-- End Growing Color spinners -->
</div>
              <!-- Growing Color spinnersr -->

       <div class="row" v-else>
               <!-- Card with header and footer -->
          <div class="card col-md-12 mx-auto">
            <div class="card-header text-center">Order##00{{ orderId }} current status is confirmed</div>
            <div class="card-body row">



      <!-- Card with header and footer -->
          <div class="card col-md-4 mt-2">
            <div class="card-header">Customer Information</div>
            <div class="card-body">

              <h5 class="card-title">{{ customer.customerName }}</h5>
               {{ customer.phoneNumber }} <br> {{ customer.email }} <br>
               <span class="text-primary">{{ customer.addressLine }}, {{ customer.district }}, {{ customer.division }}</span>
            </div>

            <form action="" >
                <input v-model="customer.customerName" type="text" class="form-control my-1" >
                <input v-model="customer.phoneNumber" type="text" class="form-control my-1" >
                <input v-model="customer.email" type="text" class="form-control my-1" >
                <input v-model="customer.addressLine" type="text" class="form-control my-1">
                <input v-model="customer.district" type="text" class="form-control my-1">
                <input v-model="customer.division" type="text" class="form-control my-1"> 
                <button class="btn btn-warning my-1 w-100">Update</button>
            </form>

            <div class="card-footer">
              <a href="#">Edit</a>
            </div>
          </div><!-- End Card with header and footer -->

          <!-- Card with header and footer -->
          <div class="card col-md-4 ms-3 mt-2">
            <div class="card-header">Payment Information</div>
            <div class="card-body">
              <h5 class="card-title">{{ order.payMethod }}</h5>
              <table class="table">
                <tr>
                  <td>{{ order.customerAccount }}</td> <td>-From</td> 
                </tr>
                <tr>
                  <td>{{ order.payNumber  }}</td> <td>-To</td>
                </tr>
                <tr>
                  <td>{{ order.tnxId }}</td> <td>-tnx</td>
                </tr>
                <tr>
                 <td> ৳. {{ order.amount }}</td> <td>-amount</td> 
                </tr>
              </table>


              <form action="" >
                <input v-model="customer.customerName" type="text" class="form-control my-1" >
                <input v-model="customer.phoneNumber" type="text" class="form-control my-1" >
                <input v-model="customer.email" type="text" class="form-control my-1" >
                <input v-model="customer.addressLine" type="text" class="form-control my-1">
                <input v-model="customer.district" type="text" class="form-control my-1">
                <input v-model="customer.division" type="text" class="form-control my-1"> 
                <button class="btn btn-warning my-1 w-100">Update</button>
            </form>
                 
            </div>
            <div class="card-footer">
              <a href="#">Edit</a>
            </div>
          </div><!-- End Card with header and footer -->
          <!-- Card with header and footer -->
          <div class="card col-md-3 ms-5  mt-2">
            <div class="card-header">Actions</div>
            <div class="card-body">
              
                <button class="btn btn-warning mt-1 w-100">Send Mail</button>
                <button class="btn btn-warning mt-1 w-100">Add Note</button>

              </div>
            <div class="card-footer">
              Order is Confirmed
            </div>
          </div><!-- End Card with header and footer -->







                    <!-- Card with header and footer -->
          <div class="card col-md-12">
            <div class="card-header">Items Information</div>
            <div class="card-body">
  
              
              <table class="table">
                <tr>
                  <th>Title </th>
                  <th>Quantity </th>
                  <th>Price </th>
                  <th>Total </th>
                </tr>
                <tr>
                  <td>
                    <h5 class="card-title">{{ order.productName }}</h5>
                    <span>  {{ order.variant }}  {{ order.color }}</span>
                  </td>
                  <td> {{ order.qty+'x' }}</td>
                  <td> {{ order.price }}</td>
                  <td> {{ order.price*order.qty }}</td>
                </tr>


              </table>

            </div>
            <div class="card-footer">
              Edit
            </div>
          </div><!-- End Card with header and footer -->
                
             

            </div>
            <div class="card-footer">
              Edit 
            </div>
          </div><!-- End Card with header and footer -->  
          
           

        </div>     
 
  </main>
</template>

<script>

import {axiosPrivet} from '../../my-services/axiosInstance';

export default {
    data:()=>({
        orderId : '',
        order:'',
        customer: '',
        gettingInfo: true,
    }),

    mounted(){
        this.orderId = this.$route.params.orderId
        
        setTimeout(() => {
            this.getOrderDetails();
        }, 400);

    },
    methods:{
        getOrderDetails(){
          this.gettingInfo = true;
            axiosPrivet.get('get-order-details/'+this.orderId)
            .then((res)=>{
                console.log(res);
                this.order = res.data;
                this.customer = JSON.parse(this.order.customerInfo);
                this.gettingInfo= false;
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }




}
</script>

<style>

</style>