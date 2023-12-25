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
      </div>
      <!-- End Growing Color spinners -->
    </div>
    <!-- Growing Color spinnersr -->

    <div class="row" v-else>
      <!-- Card with header and footer -->
      <div class="card col-md-12 mx-auto">
        <div class="card-header text-center">
          Order##00{{ orderId }} current status is confirmed
        </div>
        <div class="card-body row">
          <!-- Card with header and footer -->
          <div class="card col-md-4 mt-2">
            <div class="card-header">Customer Information</div>
            <div class="card-body">
              <form action="" v-if="editingCustomerInfo">
                <input
                  v-model="customer.customerName"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="customer.phoneNumber"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="customer.email"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="customer.addressLine"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="customer.district"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="customer.division"
                  type="text"
                  class="form-control my-1"
                />
                <button
                  type="button"
                  class="btn btn-warning my-1 w-100"
                  v-on:click="orderUpdate"
                >
                  Update
                </button>
              </form>

              <div class="customer-info-container" v-else>
                <h5 class="card-title">{{ customer.customerName }}</h5>
                {{ customer.phoneNumber }} <br />
                {{ customer.email }} <br />
                <span class="text-primary"
                  >{{ customer.addressLine }}, {{ customer.district }},
                  {{ customer.division }}</span
                >
              </div>
            </div>

            <div class="card-footer">
              <a
                v-if="!editingCustomerInfo"
                v-on:click="customerInfoEditBtn"
                href="#"
                >Edit</a
              >
              <a v-else href="#" v-on:click="customerInfoEditBtn">Back</a>
            </div>
          </div>
          <!-- End Card with header and footer -->

          <!-- Card with header and footer -->
          <div class="card col-md-4 ms-3 mt-2">
            <div class="card-header">Payment Information</div>
            <div class="card-body">
              <form action="" v-if="editingPayment">
                <input
                  v-model="order.payMethod"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="order.customerAccount"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="order.payNumber"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="order.tnxId"
                  type="text"
                  class="form-control my-1"
                />
                <input
                  v-model="order.amount"
                  type="text"
                  class="form-control my-1"
                />
                <button
                  type="button"
                  class="btn btn-warning my-1 w-100"
                  v-on:click="orderUpdate"
                >
                  Update
                </button>
              </form>

              <div class="pay-info-wrapper" v-else>
                <h5 class="card-title">{{ order.payMethod }}</h5>
                <table class="table">
                  <tr>
                    <td>{{ order.customerAccount }}</td>
                    <td>-From</td>
                  </tr>
                  <tr>
                    <td>{{ order.payNumber }}</td>
                    <td>-To</td>
                  </tr>
                  <tr>
                    <td>{{ order.tnxId }}</td>
                    <td>-tnxId</td>
                  </tr>
                  <tr>
                    <td>৳. {{ order.amount }}</td>
                    <td>-amount</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" v-if="!editingPayment" v-on:click="paymentEditButton"
                >Edit</a
              >
              <a href="#" v-else v-on:click="paymentEditButton">Back</a>
            </div>
          </div>
          <!-- End Card with header and footer -->
          <!-- Card with header and footer -->
          <div class="card col-md-3 ms-5 mt-2">
            <div class="card-header">Actions</div>
            <div class="card-body">
              <button class="btn btn-warning mt-1 w-100">Send Mail</button>
              <button class="btn btn-warning mt-1 w-100">Add Note</button>

              <div class="form-group mt-2">
                <select class="form-control" :on-change="order.status" name="" id="">
                  <option value="0">Pending</option>
                  <option value="1">On Hold</option>
                  <option value="2">Called</option>
                  <option value="3">Confirm</option>
                  <option value="4">On Going</option>
                  <option value="5">Delivered</option>
                  <option value="6">Cancel</option>
                </select>
              </div>
            </div>
            <div class="card-footer">Order is Confirmed</div>
          </div>
          <!-- End Card with header and footer -->

          <!-- Card with header and footer -->
          <div class="card col-md-12">
            <div class="card-header">Items Information</div>
            <div class="card-body">
              <table class="table">
                <thead v-if="productEditing">
                  <tr>
                    <td>Product</td>
                    <td>Variant</td>
                    <td>Color</td>
                    <td>Quantity</td>
                    <td>Price</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        v-model="order.productName"
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                      />
                    </td>

                    <td>
                      <input
                        v-model="order.variant"
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                      />
                    </td>

                    <td>
                      <input
                        v-model="order.color"
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                      />
                    </td>
                    <td>
                      <input
                        v-model="order.qty"
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                      />
                    </td>
                    <td>
                      <input
                        v-model="order.price"
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4"></td>
                    <td class="text-end" colspan="4">
                      <button class="btn btn-warning" v-on:click="orderUpdate">
                        Submit
                      </button>
                    </td>
                  </tr>
                </thead>

                <tbody v-else>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>

                  <tr>
                    <td>
                      <h5 class="card-title">{{ order.productName }}</h5>
                      <span> {{ order.variant }} {{ order.color }}</span>
                    </td>
                    <td>{{ order.qty + "x" }}</td>
                    <td>{{ order.price }}</td>
                    <td>{{ order.price * order.qty }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <a href="#" v-on:click="productEditBtn" v-if="productEditing">
                Back</a
              >
              <a href="#" v-on:click="productEditBtn" v-else> Edit</a>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
        <div class="card-footer"></div>
      </div>
      <!-- End Card with header and footer -->
    </div>
  </main>
</template>

<script>
import axiosPrivetService from "../../my-services/axiosPrivetService";

export default {
  data: () => ({
    orderId: "",
    order: "",
    customer: "",
    gettingInfo: true,
    editingPayment: false,
    editingCustomerInfo: false,
    productEditing: false,
  }),

  mounted() {
    this.orderId = this.$route.params.orderId;

    setTimeout(() => {
      this.getOrderDetails();
    }, 400);
  },
  methods: {
    getOrderDetails() {
      this.gettingInfo = true;
      axiosPrivetService
        .getOrderDetails(this.orderId)
        .then((res) => {
          console.log(res);
          this.order = res.data;
          this.customer = JSON.parse(this.order.customerInfo);
          this.gettingInfo = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    productEditBtn() {
      event.preventDefault();
      this.productEditing = !this.productEditing;
    },
    paymentEditButton() {
      event.preventDefault();
      this.editingPayment = !this.editingPayment;
    },
    customerInfoEditBtn() {
      event.preventDefault();
      this.editingCustomerInfo = !this.editingCustomerInfo;
    },
    orderUpdate() {
      this.order.customerInfo = this.customer;
      axiosPrivetService
        .orderUpdate(this.order)
        .then((res) => {
          // console.log(res);
          toastr.success(res.data.message, "Success");
          this.editingPayment = false;
          this.editingCustomerInfo = false;
          this.productEditing = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
