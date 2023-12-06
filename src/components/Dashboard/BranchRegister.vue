<template>
 <main id="main" class="main">
   <div class="row">
     <!-- Card with header and footer -->
     <div class="card col-md-8 mx-auto">
            <div class="card-header">Actions</div>
            <div class="card-body">
               <form action="" >
                    <div class="form-group mt-2">
                      <label for="">Branch Title</label>
                      <input v-model="input.title" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                     </div>
                    <div class="form-group mt-2">
                      <label for="">Manager Name</label>
                      <input v-model="input.managerName" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                     </div>
                    <div class="form-group mt-2">
                      <label for="">Manager Email</label>
                      <input v-model="input.email" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                     </div>
                    <div class="form-group mt-2">
                      <label for="">Manager Phone Number</label>
                      <input v-model="input.phoneNumber" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>
                </form> 
              </div>
            <div class="card-footer text-end"> 
                <button class="btn btn-info" v-on:click="branchSubmit">Submit</button>
            </div>
    </div><!-- End Card with header and footer -->
   </div>

</main>
</template>

<script>
import axiosPrivetService from '../../my-services/axiosPrivetService';

export default {
  data: ()=>({
      input:{
        'title'      : '',
        'managerName': '',
        'email'      : '',
        'phoneNumber': '',
      },
  }),
methods:{
  branchSubmit(){
    // console.log(this.input);
    axiosPrivetService.branchRegisterSubmit(this.input)
    .then((res)=>{
      // console.log(res);
      toastr.success('Branch register successfully','Success');
      this.input = '';
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

