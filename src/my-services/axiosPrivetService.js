import {axiosPrivet} from '../my-services/axiosInstance'

export default{

// orders route 
    getOrders(){
       return axiosPrivet.get('get-form-orders');
    },
    getOrderDetails(id){
       return axiosPrivet.get('get-order-details/'+id);
    },
    orderUpdate(payload){
       return axiosPrivet.post('order-update',payload);
    },
// Branch register route 
    branchRegisterSubmit(payload){
        return axiosPrivet.post('branch-register',payload);
    }

}