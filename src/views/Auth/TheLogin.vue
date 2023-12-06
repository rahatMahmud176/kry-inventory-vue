<template>
   <main>
    <div class="container">

 <router-link to="/" class="btn btn-warning float-end order-form-icon"><i class="bi bi-border-style"></i></router-link>


      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="../../../public/nice-admin/assets/img/logo.png" alt="">
                  <span class="d-none d-lg-block">Company Name</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your Email & password to login</p>
                  </div>

                  <form @submit.prevent="formHandel" class="row g-3 needs-validation" novalidate>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Email</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">Email</span>
                        <input type="text" v-model="input.email" class="form-control" id="yourUsername" required>
                        <div class="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" v-model="input.password"  class="form-control" id="yourPassword" required>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <!-- <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div> -->
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <router-link to="/register">Create an account</router-link></p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
                 Designed by <a href="#">Rahat Mahmud</a>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main><!-- End #main -->
</template>

<script>
import { axiosPublic } from '../../my-services/axiosInstance';
import {setAxiosPrivetHeaders} from '../../my-services/axiosInstance';
 
export default {
  data: ()=>({
      input : {
          email   : "",
          password: "",
      },
  }),
  methods: {
    formHandel(){
      axiosPublic.post('admin-login',this.input)
      .then((res)=>{
        console.log(res.data.token);
        localStorage.setItem('accessToken', "Bearer "+res.data.token);
        setAxiosPrivetHeaders();
        this.$router.push('/dashboard');
      })
      .catch((err)=>{
          toastr.error(err.response.data.message);
      })
    }
  }
}
</script>

<style scoped>
  .order-form-icon{
    position:fixed;
    top: 20px;
    right: 20px;
  }
</style>