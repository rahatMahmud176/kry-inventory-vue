<template>
  <main id="main" class="main">




<div class="text-center" v-if="gettingOrders">
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
            
 

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Phone Number </th>
          <th scope="col">Product</th>
          <th scope="col" class="text-center">Status</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="order in orders" :key="order.productName">  
          <td scope="row">{{ new Date(order.created_at).toLocaleString('en-US', dateFormet) }}</td>
          <td scope="row">{{ JSON.parse(order.customerInfo).customerName }}</td>
          <td scope="row">{{ JSON.parse(order.customerInfo).phoneNumber }}</td>
          <td scope="row">{{ order.productName }}</td>
          <th scope="row" class="text-center">
            
            <i class="bi bi-hourglass-split text-warning" title="pending.."></i> 
            <i class="bi bi-telephone-outbound-fill text-info" title="Called"></i> 
            <i class="ri-pause-line" title="Send Later"></i>
            <i class="ri-heart-pulse-fill text-success" title="Confirmed"></i>
            <i class="bi bi-plug-fill  text-danger" title="Cancelled"></i>
            <i class="ri-flight-takeoff-line text-info" title="OnGoing"></i>
            <i class="ri-plant-fill text-success" title="Delivered"></i>
            
          </th>
          <td scope="row" class="text-center"> 
              <router-link :to="{name:'orderViewDetails', params:{orderId:order.id}}"><i class="bi bi-file-text-fill"></i></router-link>  
           </td>
           
        </tr>
       
      </tbody>
    </table> 
     
  </main>
</template>

<script>  
import axiosPrivetService from "../../my-services/axiosPrivetService";

export default { 
  mounted() {
    setTimeout(()=>{
      this.getOrdersCollection();
    },100);
    
  },
  data: () => ({
    gettingOrders: false,
    orders : "",
    dateFormet : { 
            day   : 'numeric', 
            month : 'short',  
            hour  : 'numeric',
            minute: 'numeric'
}
  }),
  methods:{
    getOrdersCollection(){
        this.gettingOrders = true;
      axiosPrivetService.getOrders()
      .then((res)=>{
        this.orders = res.data.data;
          console.log(res.data.data);
          this.gettingOrders = false;
      }).catch((err)=>{
        console.log(localStorage.getItem('accessToken'));
          toastr.error(err.response.data.message);
          this.gettingOrders = false;
      });
    }
  }
};
</script>

<style></style>
