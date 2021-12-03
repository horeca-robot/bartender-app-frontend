import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderDetail from '../views/Orders/OrderDetail.vue'
import CreateOrder from '../views/Orders/CreateOrder.vue'
import UpdateOrder from '../views/Orders/UpdateOrder.vue'
import ProductOverview from '../views/Products/ProductOverview.vue'
import Robots from '../views/Robots/Robots.vue';
import RestaurantMap from '../views/RestaurantMaps/RestaurantMap.vue'
import EmployeeSelection from '../views/Auth/EmployeeSelection.vue'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */'@/views/Orders/Orders.vue')
  },
  {
    path: '/orders/create',
    name: 'CreateOrder',
    component: CreateOrder
  },
  {
    path: '/orders/:id',
    name: 'OrderDetail',
    component: OrderDetail
  },
  {
    path: '/orders/update/:id',
    name: 'UpdateOrder',
    component: UpdateOrder
  },
  {
    path: '/products',
    name: 'ProductOverview',
    component: ProductOverview
  },
  {
    path: '/map',
    name: 'RestaurantMap',
    component: RestaurantMap
  },
  {
      path: '/robots',
      name: 'Robots',
      component: Robots
  },
  {
    path: '/employeeSelection',
    name: 'employeeSelection',
    component: EmployeeSelection
  },
  {
    path: '/login/:id',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/orders',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
