import {createRouter,createWebHistory} from "vue-router"


import TheDashboard from '../views/TheDashboard.vue';

const TheRegister = ()=> import('../views/Auth/TheRegisterPage.vue')
const TheLogin = ()=> import('../views/Auth/TheLogin.vue'); 
const Overview = ()=> import('../components/Dashboard/TheOverview.vue')
const MyForm = ()=> import('../components/MyForm.vue');
const MyOrders = ()=> import('../components/Dashboard/MyOrders.vue')
const OrderViewDetails = ()=> import('../components/Dashboard/OrderViewDetails.vue')
const BranchRegister = ()=>import('../components/Dashboard/BranchRegister.vue')


const route = [
    {path:'/dashboard', component:TheDashboard, redirect:'/overview',children:[
        {path:'/orders', component:MyOrders},
        {path:'/overview', component:Overview},
        {path: '/order-view-details/:orderId',name:'orderViewDetails', component:OrderViewDetails},
        {path: '/branch-register', component:BranchRegister}
    ]}, 
    {path:"/", component: MyForm},
    {path: "/login", component: TheLogin},
    {path: "/register", component: TheRegister}

]


const router = createRouter({
    routes:route,
    history: createWebHistory()
}) 
export default router;